'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ContactFormPrefillEs() {
  const searchParams = useSearchParams()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const message = searchParams.get('message')
    if (message && textareaRef.current) {
      textareaRef.current.value = message
    }
  }, [searchParams])

  return <textarea ref={textareaRef} id="story" name="entry.story" rows={5} placeholder="Por favor describa su lesión y cómo sucedió..." required className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold transition-colors resize-none" />
}
