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
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-accent hover:bg-accent-hover text-black font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50 flex items-center gap-2"
        style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden sm:inline">Get What I Deserve</span>
        <span className="sm:hidden">Call Now</span>
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-dark border border-gray rounded-2xl p-6 sm:p-8 max-w-md w-full relative"
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

            {/* Call Button */}
            <a
              href="tel:512-883-0012"
              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-6 rounded-lg transition-colors text-lg mb-6 w-full"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (512) 883-0012
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray"></div>
              <span className="text-gray-light text-sm">or fill out the form</span>
              <div className="flex-1 h-px bg-gray"></div>
            </div>

            {/* Form */}
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse" method="POST" target="_blank">
              <div className="space-y-4">
                <input
                  type="text"
                  name="entry.name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="tel"
                  name="entry.phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                />
                <select
                  name="entry.case-type"
                  required
                  className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
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
