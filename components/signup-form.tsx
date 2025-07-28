"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ReCAPTCHA from "react-google-recaptcha"
import Image from "next/image"
import { trackFormView, trackFormSubmission, trackFormSuccess, trackFormError } from "@/lib/gtm"

type FormData = {
  name: string
  email: string
  occupation: "trainer" | "gym-owner"
}

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    occupation: "trainer", // Default value
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Track form view when component mounts
  useEffect(() => {
    trackFormView()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOccupationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, occupation: value as "trainer" | "gym-owner" }))
  }

  const handleCaptchaChange = (token: string | null) => {
    setIsCaptchaVerified(!!token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isCaptchaVerified) {
      alert("Please complete the CAPTCHA verification")
      return
    }

    setIsSubmitting(true)

    // Track form submission attempt
    trackFormSubmission(formData)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful response
      setIsSuccess(true)
      setResponseMessage("Successfully joined the waiting list!")
      trackFormSuccess()
    } catch (error) {
      console.error("Error submitting form:", error)
      const errorMessage = "Something went wrong. Please try again later."
      setResponseMessage(errorMessage)
      trackFormError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full bg-white/10 backdrop-blur-md border-white/20 text-white">
      <CardHeader className="flex flex-col items-center">
        <div className="mb-2">
          <div className="relative h-10 w-10 bg-white rounded-full flex items-center justify-center p-1.5">
            <Image
              src="/images/best-rep-logo.png"
              alt="Best Rep Logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
        <CardTitle className="text-2xl">Get Early Access</CardTitle>
        <CardDescription className="text-gray-200">
          Join our waiting list today and get <span className="font-bold text-orange-300">3 months FREE access</span>{" "}
          when we launch!
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Thank You!</h3>
            <p className="text-gray-200">
              {responseMessage || "You're on the list! We've secured your 3 months FREE access to Best Rep."}
            </p>
            <p className="text-gray-200 mt-2">We'll notify you as soon as we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-orange-500/20 border border-orange-500/50 rounded-md p-3 mb-4 text-center">
              <p className="text-sm font-medium">
                <span className="block text-orange-300 text-lg font-bold mb-1">EARLY ACCESS OFFER</span>
                Sign up now and receive 3 months of premium access completely FREE!
              </p>
            </div>

            {responseMessage && !isSuccess && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-md p-3 text-center">
                <p className="text-sm text-red-200">{responseMessage}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label>I am a</Label>
              <RadioGroup
                value={formData.occupation}
                onValueChange={handleOccupationChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="trainer" id="trainer" />
                  <Label htmlFor="trainer" className="cursor-pointer">
                    Personal Trainer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gym-owner" id="gym-owner" />
                  <Label htmlFor="gym-owner" className="cursor-pointer">
                    Gym Owner
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="my-6 flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isSubmitting || !isCaptchaVerified}
            >
              {isSubmitting ? "Processing..." : "Get Started"}
            </Button>
            {!isCaptchaVerified && (
              <p className="text-xs text-orange-300 text-center mt-2">
                Please complete the CAPTCHA verification to continue
              </p>
            )}
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t border-white/10 pt-4">
        <p className="text-xs text-gray-300">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
      </CardFooter>
    </Card>
  )
}
