'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import MobileMenu from '@/components/mobile-menu'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/#platform', label: 'Platform' },
  { href: '/events', label: 'Events' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/ask', label: 'Ask Russ' },
  { href: '/contact', label: 'Contact' },
]

const DONATE_URL = 'https://secure.actblue.com/donate/clevelandq12026'

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-bone-200 bg-paper/80 backdrop-blur-[14px] text-ink-900">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-16">
          <Link href="/" aria-label="Russ Cleveland for U.S. House MT-01" className="flex items-center">
            <Image
              src="/mt-us-house-logo.webp"
              alt="Russ Cleveland · U.S. House MT-01"
              width={1060}
              height={630}
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
                    className="text-ink-900 transition-colors hover:text-ochre-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rust border-[1.5px] border-rust px-5 py-3 font-body font-semibold text-[11px] uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
            >
              Donate
              <span aria-hidden="true">→</span>
            </a>
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
