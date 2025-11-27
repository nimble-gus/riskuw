"use server"

import { z } from "zod"

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email address"),
    question: z.string().optional(),
    plan: z.string().min(1, "Plan selection is required"),
})

export async function submitLead(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        question: formData.get("question"),
        plan: formData.get("plan"),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check the form for errors.",
        }
    }

    const { name, company, email, question, plan } = validatedFields.data

    // Simulate sending email to hola@oktae.tech
    // In a real app, use Resend, SendGrid, or Nodemailer here.
    console.log("--- NEW LEAD SUBMISSION ---")
    console.log(`To: hola@oktae.tech`)
    console.log(`From: ${name} (${email})`)
    console.log(`Company: ${company}`)
    console.log(`Selected Plan: ${plan}`)
    console.log(`Question: ${question || "N/A"}`)
    console.log("---------------------------")

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        success: true,
        message: "Thanks! We've received your interest and will be in touch soon.",
    }
}
