"use client";

import { useStore } from "@/lib/store";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit2, Trash2, CheckCircle2 } from "lucide-react";
import { Course } from "@/lib/mockData";

export default function AdminCoursesPage() {
    const { courses, addCourse, updateCourse, deleteCourse } = useStore();
    const [isEditing, setIsEditing] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Course>>({});

    const handleEdit = (course: Course) => {
        setIsEditing(course.id);
        setFormData({ ...course });
    };

    const handleSave = (id: string) => {
        updateCourse(id, formData);
        setIsEditing(null);
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this mock course?")) {
            deleteCourse(id);
        }
    };

    const handleAddNew = () => {
        const newId = `course-${Date.now()}`;
        const newCourse: Course = {
            id: newId,
            name: "New Course Template",
            originalPrice: 10000,
            offerPrice: 5000,
            duration: "1 Month",
            time: "2 Hours",
            publicSyllabus: ["Intro Module"],
            fullSyllabus: ["Advanced Module 1", "Advanced Module 2"]
        };
        addCourse(newCourse);
        handleEdit(newCourse);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-zinc-900 border border-white/10 p-6 rounded-xl">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Course Management</h1>
                    <p className="text-slate-400 text-sm">Create, update, and manage Summer Cohorts.</p>
                </div>
                <Button onClick={handleAddNew} className="bg-blue-600 hover:bg-blue-500 text-white gap-2">
                    <Plus className="w-4 h-4" /> Add Course
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {courses.map((course) => (
                    <Card key={course.id} className="bg-zinc-900 border-white/10 p-6">
                        {isEditing === course.id ? (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">Course Name</label>
                                        <input
                                            className="w-full bg-black border border-white/10 rounded-md p-2 text-white"
                                            value={formData.name || ""}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">Offer Price (₹)</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black border border-white/10 rounded-md p-2 text-white"
                                            value={formData.offerPrice || 0}
                                            onChange={e => setFormData({ ...formData, offerPrice: parseInt(e.target.value) })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 pt-4">
                                    <Button variant="outline" onClick={() => setIsEditing(null)} className="border-white/10 text-white hover:bg-white/5">Cancel</Button>
                                    <Button onClick={() => handleSave(course.id)} className="bg-emerald-600 hover:bg-emerald-500 text-white">Save Changes</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        {course.name}
                                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">Active</span>
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        {course.duration} | {course.time} | {course.fullSyllabus.length} Advanced Modules
                                    </p>
                                    <p className="text-sm font-medium text-emerald-400 mt-2">
                                        ₹{course.offerPrice} <span className="text-slate-500 line-through text-xs ml-1">₹{course.originalPrice}</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-auto">
                                    <Button variant="outline" size="sm" onClick={() => handleEdit(course)} className="border-white/10 text-white hover:bg-white/5 flex-1 md:flex-none gap-2">
                                        <Edit2 className="w-4 h-4" /> Edit
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => handleDelete(course.id)} className="border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-400 flex-1 md:flex-none gap-2">
                                        <Trash2 className="w-4 h-4" /> Delete
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Card>
                ))}
                {courses.length === 0 && (
                    <div className="text-center p-12 border border-dashed border-white/20 rounded-xl">
                        <p className="text-slate-400">No courses available. Create one to get started.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
