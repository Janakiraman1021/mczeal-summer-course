"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

export default function PastEventsGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    const images = Array.from({ length: 15 }, (_, i) => `/img/${i + 1}.jpeg`);

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 text-center z-10 relative mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
                    Memories From <br /><span className="text-gradient-emerald">Past Camps</span>
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full glow-emerald"></div>
            </div>

            <div className="relative max-w-[100vw] overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-24 snap-x snap-mandatory hide-scrollbar relative z-10 items-center"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {images.map((src, idx) => {
                        // Create slightly staggered heights for masonry feel
                        const heightClass = idx % 2 === 0 ? "h-[300px] md:h-[400px]" : "h-[250px] md:h-[350px]";
                        const mtClass = idx % 2 === 0 ? "mt-0" : "mt-8";

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 5) * 0.1, duration: 0.5 }}
                                className={`min-w-[280px] md:min-w-[350px] ${heightClass} ${mtClass} bg-zinc-900 rounded-xl relative overflow-hidden snap-center shrink-0 border border-white/10 group`}
                            >
                                <Image
                                    src={src}
                                    alt={`Past Summer Camp Memory ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    sizes="(max-width: 768px) 280px, 350px"
                                />
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500 pointer-events-none mix-blend-overlay"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Fade Edges */}
                <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Scroll Progress Indicator */}
            <div className="max-w-md mx-auto mt-4 h-1 bg-white/5 rounded-full relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-emerald-500/50 rounded-full"
                    style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                />
            </div>
        </section>
    );
}
