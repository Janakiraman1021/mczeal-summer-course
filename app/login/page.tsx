"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useStore();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="font-bold text-3xl tracking-tighter text-white inline-block">
                        McZeal<span className="text-blue-500">.</span>
                    </Link>
                </div>

                <Card className="bg-zinc-900/80 border-white/10 backdrop-blur-md shadow-2xl">
                    <CardHeader className="space-y-1 text-center">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Lock className="w-6 h-6 text-blue-500" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
                        <CardDescription className="text-slate-400">
                            Enter your email to sign in to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent placeholder:text-slate-500"
                                    placeholder="admin@mczeal.com or student@mczeal.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-slate-300">Password</label>
                                    <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 hover:underline">Forgot password?</Link>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent placeholder:text-slate-500"
                                    placeholder="Any password works (Mock)"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white mt-4 h-11">
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-white/5 pt-6 mt-2">
                        <p className="text-sm text-slate-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
