import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${className}`}>
      {children}
    </div>
  )
}
