"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Wand2, BarChart3, TrendingUp, AlertCircle, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LeadForm } from "@/components/lead-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-24 md:pt-40 md:pb-40">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/hero1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[0px]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-400"
              >
                <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-400"></span>
                Coming Soon: The Future of Underwriting
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Underwrite MCAs in <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Minutes, Not Hours
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-slate-200 md:text-xl"
              >
                Join the waitlist for the AI platform that delivers 99% more effective analysis. Get exclusive early access.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="h-12 rounded-full px-8 text-lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                  Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                Simple, powerful, and completely customizable.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-100 md:block dark:bg-slate-800"></div>

              <div className="grid gap-12 md:grid-cols-3">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    <div className="relative">
                      <FileText className="h-10 w-10 text-indigo-600" />
                      <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">3</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-50">1. Upload Statements</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Simply drag and drop your merchant's bank statements into the system.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    <Wand2 className="h-10 w-10 text-violet-600 animate-pulse" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-50">2. We Do The Magic</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our AI analyzes transactions, detects patterns, and calculates risk in seconds.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    <BarChart3 className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-50">3. Get Key Insights</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Receive a detailed report with actionable data.
                  </p>
                </motion.div>
              </div>

              {/* Insights Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/50 p-8 dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
                    <div className="rounded-lg bg-red-100 p-2 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Competitors Pulling</div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">3 Active</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
                    <div className="rounded-lg bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Negative Days</div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">5 Days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Real Revenue</div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">$45,230</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lead Capture & Pricing Section */}
        <section id="waitlist" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                Get Exclusive Early Access
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                We are launching soon. Select a plan you're interested in and join the waitlist to secure your spot.
              </p>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
