'use client'

import { useState } from 'react'

const caseTypes = [
  { value: 'Car Accident', label: 'Car Accident' },
  { value: 'Truck Accident', label: 'Truck Accident' },
  { value: 'Motorcycle Accident', label: 'Motorcycle Accident' },
  { value: 'Workplace Injury', label: 'Workplace Injury' },
  { value: 'Slip & Fall', label: 'Slip & Fall' },
  { value: 'Wrongful Death', label: 'Wrongful Death' },
  { value: 'Police Brutality', label: 'Police Brutality' },
  { value: 'Other', label: 'Other' },
]

const timeFrameOptions = [
  { value: 'within-30-days', label: 'Within 30 days' },
  { value: 'within-1-year', label: 'Within 1 year' },
  { value: 'within-2-years', label: 'Within 2 years' },
  { value: 'more-than-2-years', label: 'More than 2 years' },
]

const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unsure', label: 'Unsure' },
]

interface FormData {
  injured: string
  causedByOther: string
  timeFrame: string
  caseType: string
  story: string
  name: string
  phone: string
  email: string
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [formData, setFormData] = useState<FormData>({
    injured: '',
    causedByOther: '',
    timeFrame: '',
    caseType: '',
    story: '',
    name: '',
    phone: '',
    email: '',
  })

  const totalSteps = 3

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setDirection('forward')
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection('backward')
      setCurrentStep(prev => prev - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.injured && formData.causedByOther && formData.timeFrame
      case 2:
        return formData.caseType
      case 3:
        return formData.name && formData.phone && formData.email
      default:
        return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit to Google Forms or your backend
    const form = e.target as HTMLFormElement
    form.submit()
  }

  // Radio button group component
  const RadioGroup = ({
    name,
    value,
    onChange,
    options
  }: {
    name: string
    value: string
    onChange: (value: string) => void
    options: { value: string; label: string }[]
  }) => (
    <div className="flex gap-3">
      {options.map(option => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-200 font-medium ${
            value === option.value
              ? 'bg-accent text-black border-accent'
              : 'bg-black/50 border-white/10 text-white hover:border-white/30'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-light">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-gray-light">
            {currentStep === 1 && 'Initial Questions'}
            {currentStep === 2 && 'Injury Details'}
            {currentStep === 3 && 'Contact Info'}
          </span>
        </div>
        <div className="h-2 bg-black/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for form submission */}
        <input type="hidden" name="entry.injured" value={formData.injured} />
        <input type="hidden" name="entry.causedByOther" value={formData.causedByOther} />
        <input type="hidden" name="entry.timeFrame" value={formData.timeFrame} />
        <input type="hidden" name="entry.caseType" value={formData.caseType} />
        <input type="hidden" name="entry.story" value={formData.story} />
        <input type="hidden" name="entry.name" value={formData.name} />
        <input type="hidden" name="entry.phone" value={formData.phone} />
        <input type="hidden" name="entry.email" value={formData.email} />

        {/* Step Content Container */}
        <div className="relative overflow-hidden min-h-[320px]">
          {/* Step 1: Initial Questions */}
          <div
            className={`transition-all duration-400 ease-out ${
              currentStep === 1
                ? 'opacity-100 translate-x-0'
                : currentStep > 1
                  ? 'opacity-0 -translate-x-full absolute inset-0'
                  : 'opacity-0 translate-x-full absolute inset-0'
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Let&apos;s Start With a Few Questions</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Were you or a family member injured?
                </label>
                <RadioGroup
                  name="injured"
                  value={formData.injured}
                  onChange={(value) => updateFormData('injured', value)}
                  options={yesNoOptions}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">
                  Was the injury caused by someone else?
                </label>
                <RadioGroup
                  name="causedByOther"
                  value={formData.causedByOther}
                  onChange={(value) => updateFormData('causedByOther', value)}
                  options={yesNoOptions}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">
                  How long ago did the incident occur?
                </label>
                <select
                  value={formData.timeFrame}
                  onChange={(e) => updateFormData('timeFrame', e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                >
                  <option value="">Select timeframe</option>
                  {timeFrameOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Injury Details */}
          <div
            className={`transition-all duration-400 ease-out ${
              currentStep === 2
                ? 'opacity-100 translate-x-0'
                : currentStep > 2
                  ? 'opacity-0 -translate-x-full absolute inset-0'
                  : 'opacity-0 translate-x-full absolute inset-0'
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Tell Us About Your Injury</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Type of Injury
                </label>
                <select
                  value={formData.caseType}
                  onChange={(e) => updateFormData('caseType', e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                >
                  <option value="">Select injury type</option>
                  {caseTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">
                  Tell Us What Happened
                </label>
                <textarea
                  value={formData.story}
                  onChange={(e) => updateFormData('story', e.target.value)}
                  rows={5}
                  placeholder="Briefly describe what happened..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Contact Info */}
          <div
            className={`transition-all duration-400 ease-out ${
              currentStep === 3
                ? 'opacity-100 translate-x-0'
                : currentStep > 3
                  ? 'opacity-0 -translate-x-full absolute inset-0'
                  : 'opacity-0 translate-x-full absolute inset-0'
            }`}
          >
            <h2 className="text-xl font-bold mb-4">How Can We Reach You?</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-4 px-6 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-colors"
            >
              ← Back
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex-1 py-4 px-6 rounded-lg font-bold transition-all ${
                canProceed()
                  ? 'bg-accent hover:bg-accent-hover text-black'
                  : 'bg-gray text-gray-light cursor-not-allowed'
              }`}
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed()}
              className={`flex-1 py-4 px-6 rounded-lg font-bold transition-all text-lg ${
                canProceed()
                  ? 'bg-accent hover:bg-accent-hover text-black'
                  : 'bg-gray text-gray-light cursor-not-allowed'
              }`}
            >
              Get What I Deserve →
            </button>
          )}
        </div>

        <p className="text-gray-light text-xs mt-4 text-center">
          By submitting, you agree to be contacted about your case. We respect your privacy.
        </p>
      </form>
    </div>
  )
}
