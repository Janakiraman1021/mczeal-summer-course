"use client";

import { useStore } from "@/lib/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, BookOpen, Users, LogOut, Receipt } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { userRole, isLoggedIn, logout } = useStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Basic mock protection route
        if (!isLoggedIn || userRole !== 'admin') {
            router.push("/login");
        }
    }, [isLoggedIn, userRole, router]);

    if (userRole !== 'admin') return null;

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Courses", href: "/admin/courses", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
        { name: "Payments", href: "#", icon: <Receipt className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen bg-zinc-950 pt-16">
            {/* Sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-white/5 flex flex-col fixed h-[calc(100vh-64px)] overflow-y-auto">
                <div className="p-6">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Admin Panel</p>
                    <nav className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <div className="mt-auto p-6 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 w-full transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Exit Admin
                    </button>
                </div>
            </aside>

            {/* Main Content Workspace */}
            <main className="flex-1 ml-64 bg-black p-8">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
