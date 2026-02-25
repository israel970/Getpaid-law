'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ContactFormPrefill() {
  const searchParams = useSearchParams()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const message = searchParams.get('message')
    if (message && textareaRef.current) {
      textareaRef.current.value = message
    }
  }, [searchParams])

  return <textarea ref={textareaRef} id="story" name="story" rows={4} placeholder="Describe your injury and how it happened..." className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none backdrop-blur-sm" />
}
