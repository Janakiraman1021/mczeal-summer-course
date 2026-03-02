"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="font-bold text-2xl tracking-tighter text-white mb-4 block">
                            McZeal<span className="text-blue-500">.</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mt-4">
                            Premium IT skill-building platform with modern curriculum for Kids and aspiring Professionals. Let your journey start here.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Summer Courses</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/#courses" className="hover:text-blue-400 transition-colors">Python for Kids</Link></li>
                            <li><Link href="/#courses" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
                            <li><Link href="/#syllabus" className="hover:text-blue-400 transition-colors">Syllabus Overview</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-500">© 2026 McZeal Edtech. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0 text-slate-500">
                        <span className="text-sm hover:text-white transition-colors cursor-pointer">Twitter</span>
                        <span className="text-sm hover:text-white transition-colors cursor-pointer">LinkedIn</span>
                        <span className="text-sm hover:text-white transition-colors cursor-pointer">Instagram</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
