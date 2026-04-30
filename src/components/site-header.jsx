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

const DONATE_URL = 'https://secure.anedot.com/coos-county-republican-party-/donate'

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-bone-200 bg-paper/80 backdrop-blur-[14px] text-ink-900 before:content-[''] before:block before:h-[3px] before:w-full before:bg-ochre-500">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-16">
          <Link href="/" aria-label="Coos County Republicans" className="flex items-center">
            <Image
              src="/coos-county-republicans-logo.webp"
              alt="Coos County Republicans"
              width={4167}
              height={3464}
              priority
              className="h-auto w-full max-w-[72px] md:max-w-[80px] lg:max-w-[90px]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-ink-900 transition-colors hover:text-ochre-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton href={DONATE_URL} variant="rust" size="md" external>
              Donate
            </MagneticButton>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/30 text-ink-900 transition-colors hover:border-ochre-600 hover:text-ochre-600"
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
        </div>
      </header>

      <div aria-hidden="true" className="h-24" />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  )
}

export default SiteHeader
