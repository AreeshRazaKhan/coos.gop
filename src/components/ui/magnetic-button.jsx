import PropTypes from 'prop-types'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const VARIANT_CLASSES = {
  primary:
    'bg-ink-900 text-paper border-ink-900 hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900',
  ochre:
    'bg-ochre-500 text-paper border-ochre-500 hover:bg-ochre-600 hover:border-ochre-600',
  ghost:
    'bg-transparent text-ink-900 border-ink-900 hover:bg-ink-900 hover:text-paper',
  'ghost-light':
    'bg-transparent text-moonlight border-moonlight/70 hover:bg-moonlight hover:text-ink-900 hover:border-moonlight',
  rust: 'bg-rust text-paper border-rust hover:bg-ink-900 hover:border-ink-900',
}

const SIZE_CLASSES = {
  md: 'px-6 py-3 text-[11px] gap-2.5',
  lg: 'px-8 py-4 text-xs gap-3',
}

const BASE_CLASSES =
  'group relative inline-flex items-center justify-center rounded-full border-[1.5px] font-body font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none'

const MagneticButton = ({
  href,
  children,
  variant,
  size,
  external,
  className,
  type,
  onClick,
  disabled,
  showArrow,
  ariaLabel,
}) => {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="relative block overflow-hidden h-[1.2em] leading-none">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2 motion-reduce:transition-none motion-reduce:transform-none">
          <span className="flex h-[1.2em] items-center whitespace-nowrap">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="flex h-[1.2em] items-center whitespace-nowrap"
          >
            {children}
          </span>
        </span>
      </span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={2}
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
        />
      )}
    </>
  )

  if (!href) {
    return (
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={classes}
      >
        {inner}
      </button>
    )
  }

  const shouldUseAnchor =
    external || /^(https?:|mailto:|tel:)/.test(href) || href.startsWith('#')
  const anchorProps =
    external || /^https?:/.test(href)
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

  if (shouldUseAnchor) {
    return (
      <a
        href={href}
        {...anchorProps}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {inner}
    </Link>
  )
}

MagneticButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'ochre', 'ghost', 'ghost-light', 'rust']),
  size: PropTypes.oneOf(['md', 'lg']),
  external: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  showArrow: PropTypes.bool,
  ariaLabel: PropTypes.string,
}

MagneticButton.defaultProps = {
  variant: 'primary',
  size: 'lg',
  external: false,
  className: '',
  disabled: false,
  showArrow: true,
}

export default MagneticButton
