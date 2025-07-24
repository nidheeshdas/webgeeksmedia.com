interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8 md:h-10",
    lg: "h-12 md:h-16",
  }

  return (
    <img
      src="/images/WebGeeksMediaLogo.png"
      alt="WebGeeks Media"
      className={`w-auto ${sizeClasses[size]} ${className}`}
      loading="eager"
      decoding="async"
    />
  )
}
