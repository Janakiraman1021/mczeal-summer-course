"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-24 bg-emerald-900 relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-60 mix-blend-screen pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-md uppercase">
                        It’s Not Too Late To Start, But It Will Be Too Late <br />
                        <span className="text-emerald-300">If You Don't Take Action Now!</span>
                    </h2>
                    <p className="text-2xl text-emerald-100 mb-10 font-bold max-w-4xl mx-auto drop-shadow-sm">
                        Stop hesitating. Join 1000+ ambitious students building their future this summer in Chennai.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button asChild size="lg" className="w-full sm:w-auto h-20 bg-emerald-500 text-black hover:bg-emerald-400 font-black text-2xl px-12 shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-105 transition-all glow-emerald animate-pulse-fast">
                            <Link href="/#courses">YES, SECURE MY SEAT NOW! 🚀</Link>
                        </Button>
                    </div>
                    <div className="mt-8 text-center text-emerald-200 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                        <span className="bg-emerald-950/60 px-4 py-2 rounded-full border border-emerald-500/30">Seats Closing Tonight at 11:59 PM</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
