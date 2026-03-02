"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, TrendingUp, Users, Award } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Become a Confident Tech Innovator",
            description: "Master coding, problem-solving, and practical digital skills.",
            icon: <Code className="w-10 h-10 text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        },
        {
            title: "Build Real-World Projects This Summer",
            description: "Create apps, games, and designs from scratch with guided help.",
            icon: <TrendingUp className="w-10 h-10 text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        },
        {
            title: "Learn from Expert Mentors in Chennai",
            description: "Get hands-on guidance and feedback from industry professionals.",
            icon: <Users className="w-10 h-10 text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        },
        {
            title: "Earn a Certificate of Excellence",
            description: "Showcase your new skills with a recognized tech certificate from McZeal.",
            icon: <Award className="w-10 h-10 text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as any, stiffness: 50, damping: 10 } }
    };

    return (
        <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-background to-background pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase leading-tight font-sans">
                        What You Will Achieve in the <br />
                        <span className="text-gradient-emerald">McZeal Summer Tech Camp</span>
                    </h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={item}>
                            <Card className="funnel-card h-full hover:scale-[1.03] transition-transform duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-t-2 border-t-emerald-500 overflow-hidden">
                                <CardHeader className="pb-2 bg-gradient-to-b from-emerald-900/10 to-transparent">
                                    <div className="group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                                    <CardTitle className="text-2xl font-bold text-white mt-2 leading-tight uppercase font-sans tracking-wide">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-emerald-100/70 text-lg leading-relaxed pt-2 border-t border-emerald-500/20 mt-2 font-medium">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
