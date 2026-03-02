"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function TestimonialVideos() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    const videos = [

        "/testimonials/1.mp4",
        "/testimonials/2.mp4",
        "/testimonials/3.mp4",
        "/testimonials/4.mp4",
        "/testimonials/5.mp4",
        "/testimonials/6.mp4",
        "/testimonials/7.mp4",
        "/testimonials/8.mp4"

    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 rotate-180 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

            <div className="container mx-auto px-4 text-center z-10 relative mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                    Hear It From <br /><span className="text-gradient-emerald">Our Students</span>
                </h2>
                <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">
                    Real stories and experiences from the McZeal Summer Camp.
                </p>
            </div>

            <div className="relative max-w-[100vw] overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 pt-4 px-8 md:px-24 snap-x snap-mandatory hide-scrollbar relative z-10"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {videos.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="min-w-[280px] md:min-w-[320px] h-[500px] md:h-[560px] bg-zinc-900 rounded-2xl relative overflow-hidden snap-center shrink-0 border border-white/10 group shadow-2xl"
                        >
                            <video
                                src={src}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                controls
                                preload="metadata"
                                poster="" // You can add a poster image here if available
                            />

                            {/* Decorative overlay when not playing (optional, native controls handle this but it adds styling) */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Left/Right Fade Edges */}
                <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Scroll Progress Indicator */}
            <div className="max-w-md mx-auto mt-8 h-1 bg-white/10 rounded-full relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-emerald-500 rounded-full"
                    style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                />
            </div>
        </section>
    );
}

// Add these hide-scrollbar classes to globals.css if not present
// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
