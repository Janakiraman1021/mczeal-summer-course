"use client";

import { useStore } from "@/lib/store";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, CalendarDays } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Courses() {
    const { courses } = useStore();

    return (
        <section id="courses" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" className="mb-4 bg-red-500/20 text-red-500 hover:bg-red-500/30 px-6 py-2 border-red-500/30 text-sm tracking-widest uppercase font-bold animate-pulse-fast">
                        ⚠️ Summer 2026 Admissions Open
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                        Claim Your Spot Before <br /><span className="text-red-500">Prices Increase</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Select from our intensive summer programs designed to take you from absolute beginner to confident tech innovator.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: idx * 0.2 }}
                        >
                            <Card className="flex flex-col h-full funnel-card overflow-hidden relative group">
                                {/* Popular Badge for specific course if needed */}
                                {idx === 1 && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-orange-500 px-6 py-1.5 text-sm font-black text-white rounded-bl-xl shadow-lg z-10 uppercase tracking-widest">
                                        🔥 MOST POPULAR
                                    </div>
                                )}

                                <CardHeader className="pb-6 border-b border-white/10 bg-black/40">
                                    <CardTitle className="text-2xl text-white mb-2">{course.name}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                                        <span className="flex items-center gap-1.5"><CalendarDays size={16} /> {course.duration}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={16} /> {course.time}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-8 flex-grow">
                                    <div className="mb-8 p-4 bg-red-950/20 rounded-xl border border-red-500/20 text-center">
                                        <div className="flex items-center justify-center gap-3 mb-1">
                                            <span className="text-5xl font-black text-white">₹{course.offerPrice}</span>
                                            <span className="text-2xl text-slate-500 line-through decoration-red-500/50 decoration-2">₹{course.originalPrice}</span>
                                        </div>
                                        <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mt-2 bg-yellow-500/10 inline-block px-3 py-1 rounded-full">Save ₹{course.originalPrice - course.offerPrice} Today Only!</p>
                                    </div>

                                    <ul className="space-y-4">
                                        {course.publicSyllabus.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                        <li className="flex items-start gap-3 text-slate-500 italic">
                                            <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                                            <span>+ {course.fullSyllabus.length} Advanced Modules (Unlock to view)</span>
                                        </li>
                                    </ul>
                                </CardContent>

                                <CardFooter className="pt-6 pb-8 border-t border-white/10 bg-black/40 flex flex-col gap-4">
                                    <Button asChild size="lg" className="w-full h-16 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xl flex items-center gap-2 group glow-yellow animate-pulse-fast transition-all">
                                        <Link href={`/payment/${course.id}`}>
                                            ENROLL FOR ₹{course.offerPrice}
                                            <span className="group-hover:translate-x-2 transition-transform ml-1">🚀</span>
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-center text-slate-500 font-medium">100% Secure Checkout • Instant Access</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
