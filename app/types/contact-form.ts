export interface FormData {
  name: string;
  email: string;
  subject: string;
  country: string;
  message: string;
  "cf-turnstile-response"?: string | null;
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  country?: string
  message?: string
  submit?: string
}

export interface ContactFormProps {
  onSubmit?: (data: FormData) => void | Promise<void>
  className?: string
}
