import Link from "next/link"
import { Activity, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                <Activity className="h-5 w-5" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                Underwrite<span className="text-indigo-600">AI</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Revolutionizing MCA underwriting with AI-driven analysis. Faster, smarter, and 99% more effective.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Product</h3>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-indigo-600">Features</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-indigo-600">About Us</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Careers</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Blog</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    © {new Date().getFullYear()} UnderwriteAI. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
