"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "My child is not from a tech background. Can they still benefit from this summer camp?",
            answer: "Absolutely. Our courses are designed from scratch for absolute beginners. We focus on hands-on practical implementation entirely without the jargon."
        },
        {
            question: "Will my child get a certificate after completing the summer camp?",
            answer: "Yes, every student receives a verified Certificate of Completion from McZeal upon finishing the syllabus and submitting their capstone project."
        },
        {
            question: "What age groups are the summer camp courses designed for?",
            answer: "Our courses are tailored for students aged 8-16, with different modules catering to various skill levels and interests within this range."
        },
        {
            question: "What kind of projects will my child work on during the summer camp?",
            answer: "Students will engage in exciting hands-on projects, such as building their own games, designing websites, creating animations, or developing simple AI applications, depending on the course chosen."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-black border-t border-red-500/10 relative">
            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                        Frequently <span className="text-red-500">Asked Questions</span>
                    </h2>
                    <p className="text-xl text-slate-300 font-medium">
                        Still have doubts? We've got you covered.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="border border-white/10 rounded-xl funnel-card overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold text-white">{faq.question}</span>
                                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                                        <ChevronDown className="w-6 h-6 text-red-500" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-slate-300 text-lg pt-2 border-t border-white/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
