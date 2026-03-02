"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show after scrolling down 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-[#10b981] border-t border-emerald-400 p-3 shadow-[0_-10px_30px_rgba(16,185,129,0.3)] backdrop-blur-md"
                >
                    <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#10b981] font-black text-xl shadow-inner border-2 border-emerald-200">
                                M
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight">Join the Chennai Summer Camp</h4>
                                <p className="text-emerald-100 text-sm font-medium">Limited Seats Remaining.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <Button asChild size="lg" className="w-full sm:w-auto h-12 bg-black hover:bg-zinc-800 text-white font-black text-lg px-8 shadow-lg shadow-black/20 rounded-lg hover:scale-105 transition-transform">
                                <Link href="/#courses">REGISTER NOW 🚀</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
