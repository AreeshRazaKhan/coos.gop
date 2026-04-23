import PropTypes from 'prop-types'

const BASE_INPUT_CLASSES =
  'w-full bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 placeholder:text-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 focus:border-ochre-500 disabled:opacity-60 disabled:cursor-not-allowed'

const DARK_INPUT_CLASSES =
  'w-full bg-ink-800 border border-ink-700 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-moonlight placeholder:text-moonlight/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 focus:border-ochre-500 disabled:opacity-60 disabled:cursor-not-allowed'

const ERROR_CLASSES = 'border-rust focus:border-rust focus-visible:outline-rust'

const FormField = ({
  id,
  name,
  label,
  type,
  as,
  rows,
  required,
  placeholder,
  value,
  onChange,
  error,
  options,
  autoComplete,
  inputMode,
  pattern,
  disabled,
  variant,
  hint,
  children,
}) => {
  const fieldId = id || name
  const labelColor = variant === 'dark' ? 'text-ochre-400' : 'text-brass'
  const hintColor = variant === 'dark' ? 'text-moonlight/60' : 'text-stone-600'
  const baseClasses = variant === 'dark' ? DARK_INPUT_CLASSES : BASE_INPUT_CLASSES
  const inputClasses = `${baseClasses} ${error ? ERROR_CLASSES : ''}`
  const describedBy = [
    error ? `${fieldId}-error` : null,
    hint ? `${fieldId}-hint` : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined

  const sharedProps = {
    id: fieldId,
    name,
    required,
    disabled,
    value,
    onChange,
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': describedBy,
    className: inputClasses,
  }

  const renderControl = () => {
    if (as === 'textarea') {
      return (
        <textarea
          {...sharedProps}
          rows={rows || 5}
          placeholder={placeholder}
          className={`${inputClasses} resize-vertical leading-[1.6]`}
        />
      )
    }

    if (as === 'select') {
      return (
        <select {...sharedProps}>
          {options?.map((opt) => {
            const optValue = typeof opt === 'string' ? opt : opt.value
            const optLabel = typeof opt === 'string' ? opt : opt.label
            return (
              <option key={optValue} value={optValue}>
                {optLabel}
              </option>
            )
          })}
        </select>
      )
    }

    return (
      <input
        {...sharedProps}
        type={type || 'text'}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
      />
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={fieldId}
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${labelColor}`}
        >
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      {children || renderControl()}
      {hint && !error && (
        <p
          id={`${fieldId}-hint`}
          className={`font-mono text-[11px] leading-[1.5] ${hintColor}`}
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${fieldId}-error`}
          role="alert"
          className="font-mono text-[11px] leading-[1.5] text-rust"
        >
          {error}
        </p>
      )}
    </div>
  )
}

FormField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
  rows: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ]),
  ),
  autoComplete: PropTypes.string,
  inputMode: PropTypes.string,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['light', 'dark']),
  hint: PropTypes.string,
  children: PropTypes.node,
}

FormField.defaultProps = {
  as: 'input',
  variant: 'light',
}

export default FormField
