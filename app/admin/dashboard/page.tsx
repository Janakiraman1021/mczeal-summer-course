"use client";

import { useStore } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, Activity } from "lucide-react";

export default function AdminDashboardPage() {
    const { students, courses } = useStore();

    const totalRevenue = students.filter(s => s.paymentStatus === 'Completed').reduce((acc, student) => {
        let revenue = 0;
        student.enrolledCourseIds.forEach(id => {
            const course = courses.find(c => c.id === id);
            if (course) revenue += course.offerPrice;
        });
        return acc + revenue;
    }, 0);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Overview</h1>
                <p className="text-slate-400">Welcome back, Admin. Here's what's happening with McZeal Summer Courses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-zinc-900 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Total Revenue</CardTitle>
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">₹{totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-emerald-500 mt-1">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Active Students</CardTitle>
                        <Users className="w-4 h-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">{students.length}</div>
                        <p className="text-xs text-blue-500 mt-1">+4 new enrollments today</p>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Active Courses</CardTitle>
                        <GraduationCap className="w-4 h-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">{courses.length}</div>
                        <p className="text-xs text-slate-500 mt-1">2 cohort tracks active</p>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Platform Health</CardTitle>
                        <Activity className="w-4 h-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">100%</div>
                        <p className="text-xs text-emerald-500 mt-1">All systems operational</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12 bg-zinc-900 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Detailed Analytics Dashboard</h3>
                <p className="text-slate-400 max-w-md text-center">
                    The full reporting suite requires backend connection. Currently running in mock-data presentation mode.
                </p>
            </div>
        </div>
    );
}
