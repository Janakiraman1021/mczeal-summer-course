"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
    const { isLoggedIn, userRole, user, logout } = useStore();

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl tracking-tighter text-white">
                    McZeal<span className="text-blue-500">.</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/#courses" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Courses</Link>
                    <Link href="/#syllabus" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Syllabus</Link>
                    <Link href="/#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</Link>
                </nav>
                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                                    {user?.name || (userRole === "admin" ? "Admin" : "Account")}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 bg-zinc-950 border-white/10 text-white">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-white/10" />
                                {userRole === "admin" && (
                                    <DropdownMenuItem asChild>
                                        <Link href="/admin/dashboard" className="cursor-pointer">Dashboard</Link>
                                    </DropdownMenuItem>
                                )}
                                {userRole === "student" && (
                                    <DropdownMenuItem>Enrolled: {user?.enrolledCourseIds.length}</DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem className="cursor-pointer text-red-500 hover:text-red-400" onClick={logout}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                <Link href="/register">Get Started</Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
