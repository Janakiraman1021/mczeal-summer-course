"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Sharma",
            role: "SDE at TechCorp",
            review: "The data analytics bootcamp changed my entire career trajectory. I got a 60% hike within 3 months of completion. The mentors are absolutely top-tier.",
            avatar: "R" // simulated avatar
        },
        {
            name: "Aditi Mathur",
            role: "Parent of 8th Grader",
            review: "My daughter built her own game in Python after just 2 weeks. The instructors know exactly how to keep kids engaged and curious.",
            avatar: "A"
        },
        {
            name: "Karan Desai",
            role: "Freelance Analyst",
            review: "Unlike traditional colleges, McZeal cuts the theory fluff and focuses strictly on what employers actually pay for. Worth every penny.",
            avatar: "K"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10 relative">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                        What Our Alumni Are <br /><span className="text-gradient-emerald">Saying About Us</span>
                    </h2>
                    <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">
                        Don't just take our word for it. Join 1000+ students who transformed their summer into a launchpad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
                            className="bg-zinc-900 border border-white/10 p-8 rounded-xl text-left flex flex-col hover:-translate-y-2 transition-transform duration-300 funnel-card relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-emerald-400 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                                ))}
                            </div>

                            <blockquote className="text-white text-lg font-medium flex-grow mb-8 italic leading-relaxed">
                                "{review.review}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-inner border-2 border-white/20">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h6 className="text-white font-bold text-lg">{review.name}</h6>
                                    <p className="text-sm text-slate-500">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
