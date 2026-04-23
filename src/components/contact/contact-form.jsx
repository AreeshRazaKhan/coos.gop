'use client'

import { useState } from 'react'

import FormField from '@/components/ui/form-field'
import FormLegalLine from '@/components/ui/form-legal-line'
import MagneticButton from '@/components/ui/magnetic-button'
import { formatPhoneInput } from '@/lib/phone'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SMS_UPDATES_COPY =
  'By checking this box, I consent to receive campaign updates from Cleveland for Congress via automated text messages at the phone number provided. Message frequency may vary. Message and data rates may apply. Text STOP to opt out or HELP for help. View our Privacy Policy and Terms of Service.'

const SMS_PROMO_COPY =
  'By checking this box, I consent to receive promotional messages, event invitations, and fundraising communications from Cleveland for Congress via automated text messages. Message frequency may vary. Message and data rates may apply. Text STOP to opt out or HELP for help.'

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  smsUpdates: false,
  smsPromo: false,
}

const validate = (values) => {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'First name is required.'
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Message is required.'
  return errors
}

const ContactForm = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const hasPhone = values.phone.trim().length > 0

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handlePhoneChange = (event) => {
    const formatted = formatPhoneInput(event.target.value)
    setValues((prev) => {
      if (formatted.trim().length === 0) {
        return { ...prev, phone: formatted, smsUpdates: false, smsPromo: false }
      }
      return { ...prev, phone: formatted }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fieldErrors = validate(values)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setSubmitError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: values.phone,
          message: values.message.trim(),
          sms_updates: values.smsUpdates ? 'Yes' : 'No',
          sms_promo: values.smsPromo ? 'Yes' : 'No',
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        setSubmitError(data?.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSuccess(true)
      setValues(INITIAL_STATE)
    } catch (error) {
      console.error('[ContactForm]:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 flex flex-col gap-4 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500"
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
          — Message sent
        </span>
        <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
          Thanks for reaching out.
        </h3>
        <p className="text-base leading-[1.65] text-stone-600 max-w-[52ch]">
          We read every message. Someone from the team will follow up as soon as we can.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <FormField
        name="firstName"
        label="First name"
        required
        autoComplete="given-name"
        placeholder="First name"
        value={values.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <FormField
        name="lastName"
        label="Last name"
        required
        autoComplete="family-name"
        placeholder="Last name"
        value={values.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        name="phone"
        type="tel"
        label="Phone (optional)"
        autoComplete="tel"
        placeholder="+1 (406) 555-0123"
        value={values.phone}
        onChange={handlePhoneChange}
        error={errors.phone}
      />
      <div className="md:col-span-2">
        <FormField
          name="message"
          as="textarea"
          rows={5}
          label="Message"
          required
          placeholder="Press request, event hosting, story tip, or a question for Russ…"
          value={values.message}
          onChange={handleChange}
          error={errors.message}
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-3 border-t border-bone-200 pt-5">
        <label
          className={`flex items-start gap-3 font-mono text-[11px] leading-[1.6] ${
            hasPhone ? 'text-stone-600 cursor-pointer' : 'text-stone-600/50 cursor-not-allowed'
          }`}
        >
          <input
            type="checkbox"
            name="smsUpdates"
            checked={values.smsUpdates}
            onChange={handleChange}
            disabled={!hasPhone}
            required={hasPhone}
            className="mt-1 accent-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 disabled:opacity-40 disabled:cursor-not-allowed"
          />
          <span>{SMS_UPDATES_COPY}</span>
        </label>
        <label
          className={`flex items-start gap-3 font-mono text-[11px] leading-[1.6] ${
            hasPhone ? 'text-stone-600 cursor-pointer' : 'text-stone-600/50 cursor-not-allowed'
          }`}
        >
          <input
            type="checkbox"
            name="smsPromo"
            checked={values.smsPromo}
            onChange={handleChange}
            disabled={!hasPhone}
            required={hasPhone}
            className="mt-1 accent-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 disabled:opacity-40 disabled:cursor-not-allowed"
          />
          <span>{SMS_PROMO_COPY}</span>
        </label>
      </div>

      {submitError && (
        <p
          role="alert"
          className="md:col-span-2 font-mono text-[12px] leading-[1.5] text-rust"
        >
          {submitError}
        </p>
      )}

      <div className="md:col-span-2 w-fit">
        <MagneticButton type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </MagneticButton>
      </div>

      <FormLegalLine />
    </form>
  )
}

export default ContactForm
