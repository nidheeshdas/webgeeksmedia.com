export interface ValidationResult {
  isValid: boolean
  error?: string
}

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: "Name is required" }
  }
  if (name.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long" }
  }
  if (name.trim().length > 50) {
    return { isValid: false, error: "Name must be less than 50 characters" }
  }
  return { isValid: true }
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: "Email is required" }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" }
  }
  return { isValid: true }
}

export const validateSubject = (subject: string): ValidationResult => {
  if (!subject.trim()) {
    return { isValid: false, error: "Subject is required" }
  }
  if (subject.trim().length < 3) {
    return { isValid: false, error: "Subject must be at least 3 characters long" }
  }
  if (subject.trim().length > 100) {
    return { isValid: false, error: "Subject must be less than 100 characters" }
  }
  return { isValid: true }
}

export const validateMessage = (message: string): ValidationResult => {
  if (!message.trim()) {
    return { isValid: false, error: "Message is required" }
  }
  if (message.trim().length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters long" }
  }
  if (message.trim().length > 1000) {
    return { isValid: false, error: "Message must be less than 1000 characters" }
  }
  return { isValid: true }
}

export const validateCountry = (country: string): ValidationResult => {
  if (country.trim().length > 50) {
    return { isValid: false, error: "Country must be less than 50 characters" }
  }
  return { isValid: true }
}
