"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { submitLead } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
    { id: "starter", name: "Starter", price: "$20", docs: "25 docs/mo" },
    { id: "growth", name: "Growth", price: "$99", docs: "150 docs/mo" },
    { id: "pro", name: "Pro", price: "$299", docs: "500 docs/mo" },
    { id: "enterprise", name: "Enterprise", price: "$999", docs: "3000 docs/mo" },
]

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : (
                "Join Waitlist"
            )}
        </Button>
    )
}

export function LeadForm() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
    const [state, formAction] = useState<{ success?: boolean; message?: string; errors?: any } | null>(null)

    async function handleSubmit(formData: FormData) {
        if (selectedPlan) {
            formData.set("plan", selectedPlan)
        }
        const result = await submitLead(null, formData)
        // @ts-ignore
        formAction(result)
    }

    if (state?.success) {
        return (
            <Card className="mx-auto max-w-lg border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-green-900 dark:text-green-50">You're on the list!</h3>
                    <p className="text-green-700 dark:text-green-400">{state.message}</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="grid gap-12 lg:grid-cols-2">
            {/* Pricing Selection */}
            <div id="pricing" className="space-y-6">
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        1. Choose your plan
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                        Select the plan that best fits your volume. We'll send you specific details.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={cn(
                                "cursor-pointer rounded-xl border-2 p-4 transition-all hover:border-indigo-600/50",
                                selectedPlan === plan.id
                                    ? "border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-950/30"
                                    : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-slate-900 dark:text-slate-50">{plan.name}</h4>
                                {selectedPlan === plan.id && <Check className="h-4 w-4 text-indigo-600" />}
                            </div>
                            <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">{plan.price}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{plan.docs}</div>
                        </div>
                    ))}
                </div>
                {state?.errors?.plan && (
                    <p className="text-sm font-medium text-red-500">{state.errors.plan}</p>
                )}
            </div>

            {/* Contact Form */}
            <Card className="border-slate-200 shadow-lg dark:border-slate-800">
                <CardHeader>
                    <CardTitle>2. Get Early Access</CardTitle>
                    <CardDescription>
                        Be the first to know when we launch.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                            {state?.errors?.name && <p className="text-xs text-red-500">{state.errors.name}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" name="company" placeholder="Acme Capital" required />
                            {state?.errors?.company && <p className="text-xs text-red-500">{state.errors.company}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" name="email" type="email" placeholder="john@acme.com" required />
                            {state?.errors?.email && <p className="text-xs text-red-500">{state.errors.email}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="question">Questions? (Optional)</Label>
                            <Textarea id="question" name="question" placeholder="Ask us anything..." />
                        </div>

                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
