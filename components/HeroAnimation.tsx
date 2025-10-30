"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface HeroAnimationProps {
  children: React.ReactNode
}

export default function HeroAnimation({ children }: HeroAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  )
}
