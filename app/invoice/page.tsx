"use client";

import { useSearchParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function InvoicePage() {
    const searchParams = useSearchParams();
    const courseId = searchParams.get("courseId");
    const { courses, user } = useStore();
    const [course, setCourse] = useState<any>(null);

    useEffect(() => {
        if (courseId) {
            setCourse(courses.find(c => c.id === courseId));
        }
    }, [courseId, courses]);

    // Mock Invoice ID
    const invoiceId = `INV-MCZ-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (!course || !user) return null;

    return (
        <div className="min-h-screen bg-zinc-950 py-24 px-4 flex justify-center items-start">
            <div className="w-full max-w-3xl space-y-6">

                {/* Mock Notification Toast */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500 mb-8">
                    <Info className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Confirmation email sent successfully to {user.email}</p>
                </div>

                <Card className="bg-white text-slate-900 no-dark-mode">
                    <CardHeader className="border-b border-slate-200 pb-8 pt-8 px-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-3xl font-black tracking-tighter text-blue-600 mb-1">
                                    McZeal.
                                </CardTitle>
                                <p className="text-sm text-slate-500 font-medium">Summer Courses Division</p>
                            </div>
                            <div className="text-right">
                                <h2 className="text-4xl font-semibold text-slate-300">INVOICE</h2>
                                <p className="text-slate-600 mt-2 font-mono text-sm leading-relaxed">
                                    #{invoiceId}<br />
                                    {dateStr}
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-8 py-8 space-y-8">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Billed To</p>
                                <p className="font-semibold text-slate-800">{user.name}</p>
                                <p className="text-slate-600">{user.email}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Payment Status</p>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                    Paid
                                </span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-slate-200 text-sm">
                                        <th className="pb-3 text-slate-600 font-semibold uppercase">Description</th>
                                        <th className="pb-3 text-slate-600 font-semibold uppercase text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base text-slate-800">
                                    <tr className="border-b border-slate-100">
                                        <td className="py-4">
                                            <p className="font-semibold">{course.name}</p>
                                            <p className="text-sm text-slate-500">{course.duration} Intensive Cohort</p>
                                        </td>
                                        <td className="py-4 text-right font-medium">₹{course.offerPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end pt-4">
                            <div className="w-64 space-y-3">
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>Subtotal</span>
                                    <span>₹{course.offerPrice}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600 pb-3 border-b border-slate-200">
                                    <span>Tax (Included)</span>
                                    <span>₹0.00</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-slate-900 pt-1">
                                    <span>Total Paid</span>
                                    <span>₹{course.offerPrice}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 text-center text-sm text-slate-500 border-t border-slate-200">
                            <p>Thank you for enrolling in McZeal! Keep learning, keep growing.</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" className="bg-zinc-900 border-white/10 text-white hover:bg-zinc-800" asChild>
                        <Link href="/">Back to Home</Link>
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2" onClick={() => window.print()}>
                        <Download className="w-4 h-4" /> Download PDF
                    </Button>
                </div>
            </div>
        </div>
    );
}
