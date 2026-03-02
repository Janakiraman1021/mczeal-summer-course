"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/lib/store";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CheckCircle2 } from "lucide-react";

export default function PaymentPage() {
    const { courseId } = useParams();
    const { courses, enrollUser, user, isLoggedIn } = useStore();
    const router = useRouter();
    const [course, setCourse] = useState<any>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    });

    useEffect(() => {
        if (courseId) {
            const found = courses.find((c) => c.id === courseId);
            if (found) setCourse(found);
            else router.push("/");
        }
    }, [courseId, courses, router]);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment delay
        setTimeout(() => {
            enrollUser(courseId as string, { name: formData.name, email: formData.email });
            setIsProcessing(false);
            setIsSuccess(true);

            // Redirect to invoice after success
            setTimeout(() => {
                router.push(`/invoice?courseId=${courseId}`);
            }, 2000);
        }, 1500);
    };

    if (!course) return null;

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
                <Card className="max-w-md w-full text-center bg-zinc-900 border-emerald-500/30 p-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
                    <p className="text-slate-400 mb-6">You've successfully enrolled in {course.name}. Generating your invoice...</p>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 py-24 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-96 bg-blue-900/10 -skew-y-3 origin-top-left pointer-events-none"></div>
            <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

                {/* Order Summary */}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-6">Complete Enrollment</h1>
                    <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-md sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Order Summary</CardTitle>
                            <CardDescription className="text-slate-400">Review your course selection</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-start pb-4 border-b border-white/10">
                                <div>
                                    <h3 className="font-semibold text-white">{course.name}</h3>
                                    <p className="text-sm text-slate-400">{course.duration} • {course.time}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-white">₹{course.offerPrice}</p>
                                    <p className="text-sm text-slate-500 line-through">₹{course.originalPrice}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-emerald-400 text-sm font-medium">
                                <span>Summer Cohort Discount Applied</span>
                                <span>-₹{course.originalPrice - course.offerPrice}</span>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                <span className="text-lg font-bold text-white">Total Amount</span>
                                <span className="text-2xl font-extrabold text-blue-400">₹{course.offerPrice}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Payment Form */}
                <div>
                    <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-white flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-blue-500" /> Payment Details
                            </CardTitle>
                            <CardDescription className="text-slate-400">All transactions are secure and encrypted.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handlePayment} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Name on account</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        disabled={isLoggedIn}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address for Invoice</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        disabled={isLoggedIn}
                                    />
                                </div>
                                <div className="pt-4 border-t border-white/10 mt-6 space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Card Number (Mock)</label>
                                        <input
                                            type="text"
                                            maxLength={19}
                                            placeholder="0000 0000 0000 0000"
                                            className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300">Expiry (MM/YY)</label>
                                            <input
                                                type="text"
                                                placeholder="12/26"
                                                className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300">CVV</label>
                                            <input
                                                type="password"
                                                maxLength={3}
                                                placeholder="***"
                                                className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full h-12 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg"
                                >
                                    {isProcessing ? "Processing..." : `Pay ₹${course.offerPrice}`}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

// Simple motion wrapper that avoids issues with export default and Framer Motion in Next.js App router
import { motion } from "framer-motion";
