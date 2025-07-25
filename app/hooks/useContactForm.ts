import { useState, useCallback } from "react"
import type { FormData, FormErrors } from "../types/contact-form"
import { validateName, validateEmail, validateSubject, validateMessage, validateCountry } from "../utils/validation"

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    country: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = useCallback((field: keyof FormData, value: string) => {
    switch (field) {
      case "name":
        return validateName(value)
      case "email":
        return validateEmail(value)
      case "subject":
        return validateSubject(value)
      case "country":
        return validateCountry(value)
      case "message":
        return validateMessage(value)
      default:
        return { isValid: true }
    }
  }, [])

  const handleFieldChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    },
    [errors],
  )

  const handleFieldBlur = useCallback(
    (field: keyof FormData) => {
      setTouched((prev) => ({ ...prev, [field]: true }))

      const validation = validateField(field, formData[field])
      if (!validation.isValid) {
        setErrors((prev) => ({ ...prev, [field]: validation.error }))
      }
    },
    [formData, validateField],
  )

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData
      const validation = validateField(field, formData[field])
      if (!validation.isValid) {
        newErrors[field] = validation.error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      country: true,
      message: true,
    })

    return isValid
  }, [formData, validateField])

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      country: "",
      message: "",
    })
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [])

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleFieldChange,
    handleFieldBlur,
    validateForm,
    resetForm,
  }
}
