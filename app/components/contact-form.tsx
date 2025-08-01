// "use client";

import type React from "react";

import { PhoneCall, Mail, ArrowRight } from "lucide-react";
import { useContactForm } from "~/hooks/useContactForm";
import type { ContactFormProps } from "../types/contact-form";
import { useState } from "react";
import { Turnstile } from '@marsidev/react-turnstile';

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


export default function ContactForm({
  className = "",
}: ContactFormProps) {
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
    onSubmit,
    success
  } = useContactForm();
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        onSubmit({
          ...formData,
          "cf-turnstile-response": turnstileToken,
        });
      } else {
        // Default behavior - log to console
        console.log("Form submitted:", {
          ...formData,
          "cf-turnstile-response": turnstileToken,
        });
        alert("Form submitted successfully!");
      }
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto px-3 lg:px-4 py-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="mb-[30px">
              <h1 className="text-[40px] font-semibold text-[#333333] mb-5">
                Get in touch with us
              </h1>
              <p className="text-gray-600 text-xl leading-[26px]">
                Questions, comments, or suggestions? Simply fill in the form and
                we'll be in touch shortly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+918698511369"
                  className="text-gray-700 font-bold hover:underline"
                >
                  {" "}
                  +91 86985 11369{" "}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:joseph@webgeeksmedia.com"
                  className="text-gray-700 font-bold hover:underline"
                >
                  {" "}
                  joseph@webgeeksmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-[10px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.10)] p-[25px] lg:p-[50px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                {/* Name Field */}
                <div className="w-full">
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
                  {errors.name && touched.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="w-full">
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
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={(e) =>
                      handleFieldChange("subject", e.target.value)
                    }
                    onBlur={() => handleFieldBlur("subject")}
                    className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                      errors.subject && touched.subject
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && touched.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Country Field */}
                <div className="relative w-full">
                  <div className="relative w-full">
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        handleFieldChange("country", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("country")}
                      className={`w-full appearance-none px-4 py-3 border-2 rounded-xl text-gray-900 transition-colors focus:outline-none focus:ring-0 ${
                        errors.country && touched.country
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      } ${formData.country === "" ? "text-gray-500" : "text-gray-900"}`}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled className="text-gray-500">
                        Select your country
                      </option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country} className="text-gray-900">
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  {errors.country && touched.country && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <textarea
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      handleFieldChange("message", e.target.value)
                    }
                    onBlur={() => handleFieldBlur("message")}
                    className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 resize-none transition-colors focus:outline-none focus:ring-0 ${
                      errors.message && touched.message
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Turnstile Widget */}
                <Turnstile className="w-full"
                  siteKey="0x4AAAAAABmlzHbo3c-aQEBP"
                  onSuccess={(token) => setTurnstileToken(token)}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 mt-5"
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
                {errors.submit && (
                  <div className="w-full"><p className="mt-1 text-sm text-red-600">{errors.submit}</p></div>
                )}
                {success && (
                  <div className="w-full bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-700">{success}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
