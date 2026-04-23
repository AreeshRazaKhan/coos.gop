import Image from 'next/image'
import Link from 'next/link'

import MagneticButton from '@/components/ui/magnetic-button'

const NAV_COLUMNS = [
  {
    label: 'Campaign',
    links: [
      { href: '/about', text: 'About Russ' },
      { href: '#platform', text: 'Platform' },
      { href: '/events', text: 'Events' },
      { href: '/volunteer', text: 'Join Movement' },
    ],
  },
  {
    label: 'Give',
    links: [
      { href: 'https://secure.actblue.com/donate/clevelandq12026', text: 'Donate' },
      { href: 'https://secure.actblue.com/donate/russclevelandstore', text: 'Store' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { href: 'mailto:connect@russellcleveland.org', text: 'Email' },
      { href: 'https://www.instagram.com/cleveland4mt_01/', text: 'Instagram' },
      { href: 'https://www.facebook.com/cleveland4mt01/', text: 'Facebook' },
      { href: 'https://www.tiktok.com/@cleveland4mt_01', text: 'TikTok' },
      { href: 'https://x.com/Cleveland4MT_01', text: 'X / Twitter' },
      { href: 'https://www.youtube.com/@ClevelandforMontana', text: 'YouTube' },
    ],
  },
]

const SiteFooter = () => {
  return (
    <footer className="bg-ink-900 text-moonlight border-t border-ink-700">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="grid grid-cols-2 gap-10 tablet:grid-cols-12 tablet:gap-12">
          <div className="col-span-2 tablet:col-span-5">
            <Link href="/" aria-label="Russ Cleveland for U.S. House MT-01" className="inline-flex">
              <Image
                src="/mt-us-house-logo.webp"
                alt="Russ Cleveland · U.S. House MT-01"
                width={1060}
                height={630}
                className="h-auto w-full max-w-[96px] md:max-w-[110px] lg:max-w-[120px]"
              />
            </Link>

            <p className="mt-6 max-w-[42ch] font-italic italic text-lg leading-[1.4] text-moonlight/80">
              Independent spirit, democratic values.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="https://secure.actblue.com/donate/clevelandq12026"
                variant="rust"
                size="md"
                external
              >
                Chip in
              </MagneticButton>
              <MagneticButton href="/volunteer" variant="ghost-light" size="md">
                Join the movement
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
                — {col.label}
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
              Ask Russ
            </Link>
            <Link href="/contact" className="hover:text-ochre-400">
              Contact
            </Link>
          </div>
        </div>

        <hr className="mt-16 border-t border-ink-700" />

        <div className="mt-8 flex flex-col tablet:flex-row tablet:items-start tablet:justify-between gap-6">
          <p className="font-mono text-[11px] leading-[1.65] text-moonlight/60 max-w-[60ch]">
            Paid for by Cleveland for Congress · FEC ID C00902395 · P.O. Box 691, Saint Regis,
            MT 59866. Not authorized by any candidate or candidate&apos;s committee other than
            Cleveland for Congress.
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
              © 2026 Cleveland for Congress &apos;26
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
