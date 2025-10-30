import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  [key: string]: any
}

export default function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-colors duration-200 inline-block"

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1E3A8A]",
    secondary: "bg-[#F3F4F6] text-[#1F2937] hover:bg-gray-200",
    outline: "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
