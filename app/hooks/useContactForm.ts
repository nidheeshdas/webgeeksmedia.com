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
  const [success, setSuccess] = useState<string>("")


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
    let isValid = true;

    [
      'name',
      'email',
      'subject',
      'country',
      'message',
    ].forEach((key) => {
      const field = key as keyof FormData
      const validation = validateField(field, formData[field])
      if (!validation.isValid) {
        newErrors[field as keyof FormErrors] = validation.error
        isValid = false
      }
    })

    if (!isValid) {
      newErrors.submit = 'Please fill valid input in all fields.';
    }

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      country: true,
      message: true,
    });

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

  const onSubmit = useCallback((body) => {
    fetch("/mailer/send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body as any),
    })
      .then(async (res) => {
        const message = await res.text();
        if (!res.ok) {
          throw new Error(message);
        }
        return message;
      })
      .then((message) => {
        setSuccess(message);
      })
      .catch((err) => {
        console.error(err);
        setErrors((prevErrors) => ({
          ...prevErrors,
          submit: err.message || "Error sending message",
        }));
      });
  }, []);


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
    onSubmit,
    success,
    setSuccess,
  }
}
