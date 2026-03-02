"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThreeDBackground from "@/components/ThreeDBackground";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden isolate px-4">
            {/* Three.js Background Component */}
            <ThreeDBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto relative z-10 text-center max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 text-sm font-bold mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.3)] uppercase tracking-wider">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse-fast"></span>
                    Attention: Parents & Students in Chennai
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] font-sans uppercase">
                    Unlock Your Future This <br className="hidden md:block" />
                    <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Summer With McZeal</span>
                </h1>

                <div className="max-w-2xl mx-auto mb-10 text-left space-y-4 text-lg md:text-xl font-medium text-slate-200">
                    <div className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <p>Beginner Friendly Tech Programs for All Ages.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <p>Receive a <strong className="text-white">McZeal Certificate of Completion</strong>.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <p>Learn Future-Ready Skills <strong className="text-white">(Coding, Robotics & UI)</strong>.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mb-4">
                    <Button size="lg" className="w-full sm:w-auto h-20 px-12 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-2xl md:text-3xl rounded-xl flex items-center justify-center gap-3 group glow-emerald animate-pulse-fast transition-all uppercase shadow-[0_10px_30px_rgba(16,185,129,0.4)] border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1">
                        <Link href="#courses" className="flex items-center">
                            REGISTER FOR THE CHENNAI SUMMER CAMP
                            <span className="group-hover:translate-x-2 transition-transform ml-2">→</span>
                        </Link>
                    </Button>
                    <p className="text-zinc-400 font-medium text-sm">Join 1000+ Students Upgrading Their Skills in Chennai.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                    className="bg-red-950/40 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 max-w-md mx-auto glow-red"
                >
                    <p className="text-sm text-red-200 mb-2 font-bold uppercase tracking-widest">⚠️ OFFER EXPIRES IN</p>
                    <div className="text-4xl md:text-5xl font-mono font-black text-white tabular-nums tracking-wider text-shadow-glow">
                        {formatTime(timeLeft)}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
