'use client'

import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import MagneticButton from '@/components/ui/magnetic-button'

const DONATE_URL = 'https://secure.anedot.com/coos-county-republican-party-/donate'

const MobileMenu = ({ open, onClose, links }) => {
  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-nav-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] bg-ink-900 text-moonlight transition-opacity duration-200 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-ink-700">
        <Link
          href="/"
          onClick={onClose}
          aria-label="Coos County Republicans"
          className="flex items-center"
        >
          <Image
            src="/coos-county-republicans-logo.webp"
            alt="Coos County Republicans"
            width={4167}
            height={3464}
            className="h-auto w-full max-w-[96px]"
          />
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-moonlight/40 text-moonlight transition-colors hover:border-ochre-400 hover:text-ochre-400"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
      </div>

      <div className="h-[calc(100%-72px)] overflow-y-auto px-6 py-10">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
          Menu
        </span>
        <ul className="mt-8 flex flex-col">
          {links.map((link) => (
            <li key={link.href} className="border-b border-ink-700">
              <Link
                href={link.href}
                onClick={onClose}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex items-center justify-between py-5 font-display text-3xl font-extrabold leading-none tracking-[-0.02em] text-moonlight transition-colors hover:text-ochre-400"
              >
                {link.label}
                <span aria-hidden="true" className="text-ochre-500 text-xl">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3">
          <MagneticButton
            href={DONATE_URL}
            variant="rust"
            size="lg"
            external
            onClick={onClose}
          >
            Chip in
          </MagneticButton>
          <MagneticButton href="/get-involved" variant="ochre" size="lg" onClick={onClose}>
            Join the fight
          </MagneticButton>
        </div>

        <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/60">
          chris.castleman@coos.gop
        </p>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      external: PropTypes.bool,
    }),
  ).isRequired,
}

export default MobileMenu
