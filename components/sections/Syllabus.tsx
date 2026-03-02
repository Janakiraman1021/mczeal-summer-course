"use client";

import { useStore } from "@/lib/store";
import { Lock, Unlock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Syllabus() {
    const { courses, isLoggedIn } = useStore();

    return (
        <section id="syllabus" className="py-24 bg-zinc-950 border-y border-red-500/10 relative">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mb-4">
                    Inside The <span className="text-gradient-emerald">Summer Camp Curriculum</span>
                </h2>

                {!isLoggedIn ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-8 max-w-3xl mx-auto mb-12 shadow-[0_0_30px_rgba(16,185,129,0.15)] glow-emerald"
                    >
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/50">
                            <Lock className="w-8 h-8 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Premium Content Locked</h3>
                        <p className="text-slate-300 font-medium mb-6 text-lg max-w-xl mx-auto">
                            Access the complete module breakdown, practical coding exercises, and advanced tech stacks by securing your spot today.
                        </p>
                        <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-lg px-8 w-full sm:w-auto h-14 shadow-lg glow-emerald animate-pulse-fast">
                            <Link href="/login">UNLOCK FULL ACCESS NOW</Link>
                        </Button>
                    </motion.div>
                ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-12 backdrop-blur-sm mx-auto">
                        <Unlock className="w-4 h-4" /> Full Syllabus Unlocked
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
                    {courses.map((course, idx) => (
                        <div key={course.id} className="funnel-card p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 blur-2xl"></div>

                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center text-lg font-black shadow-md border border-white/20 text-white">
                                    {idx + 1}
                                </span>
                                {course.name}
                            </h4>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 border-b border-white/10 pb-2">Foundation Modules</h5>
                                    <ul className="space-y-3">
                                        {course.publicSyllabus.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                                <span className="text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 border-b border-white/10 pb-2 flex items-center justify-between">
                                        Advanced Modules
                                        {!isLoggedIn && <Lock className="w-4 h-4 text-amber-500" />}
                                    </h5>
                                    <ul className="space-y-3">
                                        {isLoggedIn ? (
                                            course.fullSyllabus.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                                    <span className="text-slate-200">{item}</span>
                                                </li>
                                            ))
                                        ) : (
                                            Array(Math.min(3, course.fullSyllabus.length)).fill(0).map((_, i) => (
                                                <li key={`blur-${i}`} className="flex items-start gap-3 opacity-40 select-none">
                                                    <div className="w-5 h-5 rounded-full bg-slate-700 shrink-0" />
                                                    <div className="h-5 bg-slate-800 rounded w-full blur-[2px]" />
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                    {!isLoggedIn && (
                                        <p className="text-sm text-emerald-400 font-bold mt-4 text-center tracking-wide uppercase bg-emerald-950/50 p-3 rounded-lg border border-emerald-500/20">
                                            + {course.fullSyllabus.length} HIDDEN PREMIUM MODULES
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
