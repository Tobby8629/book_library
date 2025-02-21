"use client"
import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
}).refine((data) => data.email !== data.password, {
  message: "Username and password cannot be the same",
})

export const signUpSchema = z.object({
    fullName: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("University Card is required"),
    // confirmPassword: z.string().min(8).max(50),
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords do not match",})
