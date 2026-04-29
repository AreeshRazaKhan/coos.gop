'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import MobileMenu from '@/components/mobile-menu'
import MagneticButton from '@/components/ui/magnetic-button'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/elections', label: 'Elections' },
  { href: '/events', label: 'Events' },
  { href: '/articles', label: 'Articles' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/ask', label: 'Ask Us' },
  { href: '/contact', label: 'Contact' },
]

const DONATE_URL = 'https://secure.anedot.com/friends-of-coos-county-republicans/donate'

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-4 border-b border-ink-700/40 bg-ink-900/85 backdrop-blur-[14px] px-6 py-4 md:px-12 lg:px-16 text-moonlight before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-ochre-500"
      >
        <Link href="/" aria-label="Coos County Republicans" className="flex items-center">
          <Image
            src="/mt-us-house-logo.webp"
            alt="Coos County Republicans"
            width={1060}
            height={630}
            priority
            className="h-auto w-full max-w-[72px] md:max-w-[80px] lg:max-w-[90px]"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="hover:text-ochre-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <MagneticButton href={DONATE_URL} variant="ochre" size="md" external>
            Donate
          </MagneticButton>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-moonlight/50 text-moonlight transition-colors hover:border-ochre-400 hover:text-ochre-400"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      <div aria-hidden="true" className="h-24" />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  )
}

export default SiteNav
