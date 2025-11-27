import Link from "next/link"
import { Activity } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <Activity className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        Underwrite<span className="text-indigo-600">AI</span>
                    </span>
                </Link>
                <nav className="hidden gap-6 md:flex">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                        Pricing
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    {/* Coming Soon Mode: No Login/Signup */}
                </div>
            </div>
        </header>
    )
}
