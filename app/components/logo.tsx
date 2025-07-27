interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-32",
    md: "w-[162px]",
    lg: "w-[162px]",
  };
  return (
    <img
      src="/images/webgeeksmedialogo.png"
      alt="WebGeeks Media"
      className={`h-auto ${sizeClasses[size]} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
