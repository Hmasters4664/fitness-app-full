import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleTagManager from "@/components/gtm-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Rep - Fitness Platform for Trainers and Gyms",
  description: "The ultimate platform for personal trainers and gyms to manage their clients, workouts, and workout plans."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
