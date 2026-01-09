'use client'

import { useState } from 'react'

const caseTypes = [
  { value: 'Car Accident', label: 'Car Accident' },
  { value: 'Truck Accident', label: 'Truck Accident' },
  { value: 'Motorcycle Accident', label: 'Motorcycle Accident' },
  { value: 'Workplace Injury', label: 'Workplace Injury' },
  { value: 'Slip & Fall', label: 'Slip & Fall' },
  { value: 'Wrongful Death', label: 'Wrongful Death' },
  { value: 'Other', label: 'Other' },
]

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile: Dual Button (Call + Text) */}
      <div className="fixed bottom-6 right-6 sm:hidden flex gap-2 z-50">
        {/* Text Us Button */}
        <a
          href="sms:5128830012?body=Match%20me%20with%20the%20perfect%20attorney"
          className="bg-gold hover:bg-gold-hover text-black font-bold py-3 px-4 rounded-full shadow-lg transition-all flex items-center gap-2"
          style={{ boxShadow: '0 4px 20px rgba(255, 184, 0, 0.4)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Text
        </a>
        {/* Call Button */}
        <a
          href="tel:512-883-0012"
          className="bg-accent hover:bg-accent-hover text-black font-bold py-3 px-4 rounded-full shadow-lg transition-all flex items-center gap-2"
          style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
      </div>

      {/* Desktop: Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex fixed bottom-8 right-8 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50 items-center gap-2"
        style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Get What I Deserve
      </button>

      {/* Popup Overlay with Glassmorphism */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="glass rounded-2xl p-6 sm:p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-light hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Case Review</h3>

            {/* Call & Text Buttons */}
            <div className="flex gap-3 mb-6">
              <a
                href="tel:512-883-0012"
                className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a
                href="sms:5128830012?body=Match%20me%20with%20the%20perfect%20attorney"
                className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-black font-bold py-4 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text Us
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-gray-light text-sm">or fill out the form</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Form with glass-styled inputs */}
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse" method="POST" target="_blank">
              <div className="space-y-4">
                <input
                  type="text"
                  name="entry.name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                />
                <input
                  type="tel"
                  name="entry.phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                />
                <select
                  name="entry.case-type"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Type of Injury</option>
                  {caseTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  Get My Free Review
                </button>
              </div>
            </form>

            <p className="text-gray-light text-xs mt-4 text-center">
              Free consultation. No fees unless you win.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
