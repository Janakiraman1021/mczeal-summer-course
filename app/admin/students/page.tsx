"use client";

import { useStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";

export default function AdminStudentsPage() {
    const { students, courses } = useStore();

    const getCourseNames = (ids: string[]) => {
        return ids.map(id => courses.find(c => c.id === id)?.name).filter(Boolean).join(", ");
    };

    return (
        <div className="space-y-6">
            <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                <h1 className="text-2xl font-bold text-white mb-1">Student Enrollments</h1>
                <p className="text-slate-400 text-sm">View all registered students and their payment statuses.</p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-400 uppercase bg-black/50 border-b border-white/10">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Student Name</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Email Address</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Enrolled Courses</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-white">{student.name}</div>
                                        <div className="text-xs text-slate-500 font-mono mt-1">{student.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.email}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-300">
                                        {student.enrolledCourseIds.length > 0 ? getCourseNames(student.enrolledCourseIds) : <span className="text-slate-500 italic">None yet</span>}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.paymentStatus === 'Completed' ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Completed
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}

                            {students.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        No students found in the database.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
