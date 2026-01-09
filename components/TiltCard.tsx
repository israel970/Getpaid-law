'use client'

import { useState, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({
  children,
  className = '',
}: TiltCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${isHovered ? 'animate-wiggle' : ''}`}
    >
      {children}
    </div>
  )
}
