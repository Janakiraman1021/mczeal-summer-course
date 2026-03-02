"use client";

import { motion } from "framer-motion";

export default function TrustBadges() {
    const brands = [
        "Google",
        "Microsoft",
        "Amazon",
        "Meta",
        "Netflix",
        "Apple"
    ];

    return (
        <section className="py-12 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-8">
                    Preparing Students For The Future Of Tech
                </p>

                {/* Marquee Effect Container */}
                <div className="relative flex overflow-x-hidden md:justify-center">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%", "0%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {/* Duplicate for seamless infinite feeling on mobile, though static on desktop */}
                        {[...brands, ...brands, ...brands].map((brand, idx) => (
                            <div
                                key={idx}
                                className="bg-black/50 border border-white/10 px-8 py-4 rounded-xl flex items-center justify-center min-w-[200px]"
                            >
                                <span className="text-2xl font-black text-slate-500 opacity-60 uppercase tracking-tighter mix-blend-plus-lighter">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient fades for edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
