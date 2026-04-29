import Image from 'next/image'
import Link from 'next/link'

import MagneticButton from '@/components/ui/magnetic-button'

const NAV_COLUMNS = [
  {
    label: 'Committee',
    links: [
      { href: '/about', text: 'About' },
      { href: '/events', text: 'Events' },
      { href: '/get-involved', text: 'Get Involved' },
    ],
  },
  {
    label: 'Give',
    links: [
      {
        href: 'https://secure.anedot.com/friends-of-coos-county-republicans/donate',
        text: 'Donate',
      },
    ],
  },
  {
    label: 'Connect',
    links: [
      { href: '/ask', text: 'Ask Us' },
      { href: '/contact', text: 'Contact' },
    ],
  },
]

const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/cooscountyconservatives',
    label: 'Facebook',
    Icon: FacebookIcon,
  },
  {
    href: 'https://www.youtube.com/@CitizenCouncil',
    label: 'YouTube',
    Icon: YoutubeIcon,
  },
  {
    href: 'https://x.com/RobTaylorReport',
    label: 'X (formerly Twitter)',
    Icon: XIcon,
  },
]

const SiteFooter = () => {
  return (
    <footer className="bg-ink-900 text-moonlight border-t border-ink-700">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="grid grid-cols-2 gap-10 tablet:grid-cols-12 tablet:gap-12">
          <div className="col-span-2 tablet:col-span-5">
            <Link href="/" aria-label="Coos County Republicans" className="inline-flex">
              <Image
                src="/coos-county-republicans-logo-white.webp"
                alt="Coos County Republicans"
                width={4167}
                height={3505}
                className="h-auto w-full max-w-[96px] md:max-w-[110px] lg:max-w-[120px]"
              />
            </Link>

            <p className="mt-6 max-w-[42ch] font-italic italic text-lg leading-[1.4] text-moonlight/80">
              Unapologetically American. Coos County First.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="https://secure.anedot.com/friends-of-coos-county-republicans/donate"
                variant="rust"
                size="md"
                external
              >
                Chip in
              </MagneticButton>
              <MagneticButton href="/get-involved" variant="ghost-light" size="md">
                Join the fight
              </MagneticButton>
            </div>
          </div>

          <div className="col-span-2 tablet:col-span-7 flex flex-col gap-10 tablet:flex-row tablet:justify-between tablet:gap-10">
            {NAV_COLUMNS.map((col) => (
              <nav
                key={col.label}
                aria-label={col.label}
                className="flex flex-col gap-4"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  {col.label}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="font-display text-base font-medium text-moonlight/85 hover:text-ochre-400 transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Reach" className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Reach
              </span>
              <Link
                href="mailto:chris.castleman@coos.gop"
                className="inline-flex items-center gap-2 font-display text-base font-medium text-moonlight/85 hover:text-ochre-400 transition-colors break-all"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-ochre-400" />
                chris.castleman@coos.gop
              </Link>
              <Link
                href="tel:+15419826793"
                className="inline-flex items-center gap-2 font-display text-base font-medium text-moonlight/85 hover:text-ochre-400 transition-colors"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-ochre-400" />
                +1 541-982-6793
              </Link>
              <ul className="mt-2 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-moonlight/25 text-moonlight/85 transition-colors hover:border-ochre-400 hover:text-ochre-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <hr className="mt-16 border-t border-ink-700" />

        <div className="mt-8 flex flex-col tablet:flex-row tablet:items-start tablet:justify-between gap-6">
          <p className="font-mono text-[11px] leading-[1.65] text-moonlight/60 max-w-[60ch]">
            Paid for by the Coos County Republican Central Committee · Oregon PAC #300 · PO Box
            914, Coos Bay, OR 97420. Not authorized by any candidate or candidate&apos;s
            committee.
          </p>
          <div className="flex flex-col tablet:items-end gap-2">
            <Link
              href="/terms-of-services"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/70 hover:text-ochre-400 transition-colors"
            >
              Terms of Services
            </Link>
            <Link
              href="/privacy-policy"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/70 hover:text-ochre-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/50">
              © 2026 Coos County Republican Central Committee
            </p>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/50">
              Powered by{' '}
              <a
                href="https://op1776.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-moonlight/70 hover:text-ochre-400 transition-colors"
              >
                Operation 1776
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
