"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export default function Comparison() {
    const ignoringAI = [
        "Falling behind in the job market",
        "Limited career growth & stagnant salary",
        "Missing out on high-demand opportunities",
        "Feeling overwhelmed by tech changes",
        "No portfolio or certifications to show",
        "Watching peers get ahead"
    ];

    const masteringAI = [
        "In-demand skills employers fight over",
        "3X career growth with portfolio proof",
        "Freelance opportunities & side income",
        "Confidence to build anything",
        "Industry-recognized certification",
        "Part of an elite alumni network"
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase font-sans">
                        <span className="text-emerald-400">Ignoring</span> Vs <br className="md:hidden" />
                        <span className="text-emerald-400">Mastering</span> Tech Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Center Divider for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

                    {/* Ignoring AI Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="bg-[#1a0a0a] border border-red-900/50 rounded-xl p-5 mb-2 flex items-center justify-center gap-3">
                            <span className="text-2xl font-black text-red-500">❌</span>
                            <h3 className="text-xl font-bold text-red-500 uppercase tracking-widest">IGNORING TECH SKILLS</h3>
                        </div>
                        {ignoringAI.map((item, idx) => (
                            <div key={idx} className="bg-[#1a0a0a]/80 border border-red-900/30 rounded-xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
                                <span className="text-2xl shrink-0">😰</span>
                                <p className="text-slate-100 font-bold text-lg">{item}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Mastering AI Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="bg-[#022c15]/60 border border-emerald-800/60 rounded-xl p-5 mb-2 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <span className="text-2xl font-black text-emerald-400">✅</span>
                            <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest">MASTERING AT MCZEAL</h3>
                        </div>
                        {masteringAI.map((item, idx) => (
                            <div key={idx} className="bg-[#022c15]/40 border border-emerald-800/40 rounded-xl p-5 flex items-center gap-4 shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-transform hover:scale-[1.02]">
                                <span className="text-2xl shrink-0">🚀</span>
                                <p className="text-white font-bold text-lg">{item}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
