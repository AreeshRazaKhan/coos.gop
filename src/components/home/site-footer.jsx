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
      { href: 'mailto:party@coos.gop', text: 'Email' },
      { href: 'https://www.facebook.com/cooscountyconservatives', text: 'Facebook' },
    ],
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

          {NAV_COLUMNS.map((col) => (
            <nav
              key={col.label}
              aria-label={col.label}
              className="tablet:col-span-2 flex flex-col gap-4"
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

          <div className="col-span-2 tablet:col-span-1 flex tablet:flex-col gap-4 tablet:justify-start tablet:items-end text-moonlight/70 font-mono text-[10px] font-semibold uppercase tracking-[0.22em]">
            <Link href="/ask" className="hover:text-ochre-400">
              Ask Us
            </Link>
            <Link href="/contact" className="hover:text-ochre-400">
              Contact
            </Link>
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
              href="/terms-and-conditions"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/70 hover:text-ochre-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/70 hover:text-ochre-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/50">
              © 2026 Coos County Republicans
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
