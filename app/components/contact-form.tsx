"use client"

import type React from "react"

import { Phone, Mail, ArrowRight } from "lucide-react"
import { useContactForm } from "~/hooks/useContactForm"
import type { ContactFormProps } from "../types/contact-form"

export default function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleFieldChange,
    handleFieldBlur,
    validateForm,
    resetForm,
  } = useContactForm()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default behavior - log to console
        console.log("Form submitted:", formData)
        alert("Form submitted successfully!")
      }
      resetForm()
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`max-w-6xl mx-auto p-6 ${className}`}>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in touch with us</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">+91 86985 11369</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">joseph@webgeeksmedia.com</span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                onBlur={() => handleFieldBlur("name")}
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                  errors.name && touched.name
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && touched.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                onBlur={() => handleFieldBlur("email")}
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                  errors.email && touched.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && touched.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                placeholder="Subject*"
                value={formData.subject}
                onChange={(e) => handleFieldChange("subject", e.target.value)}
                onBlur={() => handleFieldBlur("subject")}
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                  errors.subject && touched.subject
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.subject && touched.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>

            {/* Country Field */}
            <div>
              <input
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={(e) => handleFieldChange("country", e.target.value)}
                onBlur={() => handleFieldBlur("country")}
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                  errors.country && touched.country
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.country && touched.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                onBlur={() => handleFieldBlur("message")}
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 resize-none transition-colors focus:outline-none focus:ring-0 ${
                  errors.message && touched.message
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.message && touched.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
