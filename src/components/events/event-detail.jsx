'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'

import FormField from '@/components/ui/form-field'
import MagneticButton from '@/components/ui/magnetic-button'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_RSVP_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
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
  return errors
}

const RsvpForm = ({ event }) => {
  const [values, setValues] = useState(INITIAL_RSVP_STATE)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (changeEvent) => {
    const { name, value } = changeEvent.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault()
    const fieldErrors = validate(values)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setSubmitError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/events/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          eventName: event.name,
          eventDate: event.date,
          eventTime: event.time,
          eventCategory: event.category,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        setSubmitError(data?.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSuccess(true)
      setValues(INITIAL_RSVP_STATE)
    } catch (error) {
      console.error('[RsvpForm]:', error)
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
        className="bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 flex flex-col gap-4 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500"
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
          — RSVP confirmed
        </span>
        <h3 className="font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
          See you there.
        </h3>
        <p className="text-base leading-[1.65] text-stone-600 max-w-[52ch]">
          Check your inbox for a confirmation and directions.
        </p>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <FormField
        name="firstName"
        label="First name"
        required
        placeholder="Jane"
        autoComplete="given-name"
        value={values.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <FormField
        name="lastName"
        label="Last name"
        required
        placeholder="Cleveland"
        autoComplete="family-name"
        value={values.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <div className="md:col-span-2">
        <FormField
          name="email"
          type="email"
          label="Email"
          required
          placeholder="you@email.com"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="md:col-span-2">
        <FormField
          name="phone"
          type="tel"
          label="Contact number (optional)"
          placeholder="(406) 555-1234"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
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
        <MagneticButton type="submit" variant="ochre" size="lg" disabled={submitting}>
          {submitting ? 'Reserving…' : 'RSVP'}
        </MagneticButton>
      </div>
    </form>
  )
}

RsvpForm.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

const EventDetail = ({ event }) => {
  return (
    <article className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
      <div className="tablet:col-span-7">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          — {event.category}
        </span>
        <h1 className="mt-6 font-display font-black leading-[0.96] tracking-[-0.03em] text-[clamp(2.5rem,7vw,5.5rem)] text-ink-900">
          {event.name}
        </h1>
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[58ch] border-t border-bone-200 pt-8">
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              — Date
            </dt>
            <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
              {event.date}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              — Time
            </dt>
            <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
              {event.time}
            </dd>
          </div>
          {event.location && (
            <div className="flex flex-col gap-1 sm:col-span-2">
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                — Location
              </dt>
              <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
                {event.location}
              </dd>
            </div>
          )}
        </dl>
        {event.description && (
          <p className="mt-10 max-w-[60ch] text-base md:text-lg leading-[1.65] text-stone-600">
            {event.description}
          </p>
        )}
      </div>

      <aside className="tablet:col-span-5">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            — Reserve your spot
          </span>
          <h2 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
            RSVP below.
          </h2>
        </div>
        <div className="mt-6">
          <RsvpForm event={event} />
        </div>
      </aside>
    </article>
  )
}

EventDetail.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default EventDetail
