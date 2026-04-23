'use client'

import { useState } from 'react'

import FormField from '@/components/ui/form-field'
import MagneticButton from '@/components/ui/magnetic-button'
import { ISSUE_CATEGORIES } from '@/constants/issues'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_STATE = {
  name: '',
  email: '',
  category: '',
  location: '',
  subject: '',
  description: '',
}

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.category) errors.category = 'Please pick a category.'
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.description.trim()) {
    errors.description = 'Please tell us what’s on your mind.'
  }
  return errors
}

const toSelectOptions = (list) => [
  { value: '', label: 'Select a category…' },
  ...list.map((item) => ({ value: item, label: item })),
]

const IssueForm = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
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
      const response = await fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          category: values.category,
          location: values.location.trim(),
          subject: values.subject.trim(),
          description: values.description.trim(),
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
      console.error('[IssueForm]:', error)
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
          — Question received
        </span>
        <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
          On the record.
        </h3>
        <p className="text-base leading-[1.65] text-stone-600 max-w-[52ch]">
          Russ reviews questions weekly. Answers show up on this page with full
          attribution when they&rsquo;re recorded.
        </p>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <FormField
        name="name"
        label="Full name"
        required
        autoComplete="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        required
        autoComplete="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        name="category"
        as="select"
        label="Category"
        required
        options={toSelectOptions(ISSUE_CATEGORIES)}
        value={values.category}
        onChange={handleChange}
        error={errors.category}
      />
      <FormField
        name="location"
        label="Location (optional)"
        placeholder="County, town, or neighborhood"
        value={values.location}
        onChange={handleChange}
        error={errors.location}
      />
      <div className="md:col-span-2">
        <FormField
          name="subject"
          label="Subject"
          required
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
        />
      </div>
      <div className="md:col-span-2">
        <FormField
          name="description"
          as="textarea"
          rows={6}
          label="Your question or story"
          required
          value={values.description}
          onChange={handleChange}
          error={errors.description}
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
        <MagneticButton type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit question'}
        </MagneticButton>
      </div>
    </form>
  )
}

export default IssueForm
