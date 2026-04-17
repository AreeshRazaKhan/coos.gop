import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/russellcleveland', label: 'Instagram' },
  { href: 'https://facebook.com/russellcleveland', label: 'Facebook' },
  { href: 'https://tiktok.com/@russellcleveland', label: 'TikTok' },
  { href: 'https://x.com/russellcleveland', label: 'X / Twitter' },
  { href: 'https://youtube.com/@russellcleveland', label: 'YouTube' },
  { href: 'https://bsky.app/profile/russellcleveland', label: 'Bluesky' },
]

export const metadata = {
  title: 'Contact — Cleveland for Congress',
  description:
    'Get in touch with the Russ Cleveland for Congress campaign. Email connect@russellcleveland.org or reach us at P.O. Box 691, Saint Regis, MT 59866.',
}

const ContactPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-40">
            <div className="md:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Contact
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.94] tracking-[-0.03em] text-[clamp(3rem,9vw,7rem)]">
                Drop a line.{' '}
                <em className="font-italic not-italic text-ochre-600">We answer.</em>
              </h1>
              <p className="mt-10 max-w-[52ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                Questions, story tips, press requests, or just saying hello &mdash; every message
                lands in a human&rsquo;s inbox. We try to reply within two business days.
              </p>
            </div>
            <aside className="md:col-span-5 md:col-start-8">
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                  — Direct
                </span>
                <dl className="mt-6 flex flex-col gap-6">
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      — Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href="mailto:connect@russellcleveland.org"
                        className="font-display text-xl font-semibold text-ink-900 underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
                      >
                        connect@russellcleveland.org
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      — Mailing address
                    </dt>
                    <dd className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
                      Cleveland for Congress
                      <br />
                      P.O. Box 691
                      <br />
                      Saint Regis, MT 59866
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-24 md:px-12 md:py-32 lg:px-16">
            <div className="md:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Send a message
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Tell us what&rsquo;s on your{' '}
                <em className="font-italic not-italic text-ochre-600">mind</em>.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-[1.65] text-stone-600">
                Press requests, event hosting, story tips, or policy questions &mdash; use the
                form or email us directly.
              </p>
            </div>

            <form
              className="md:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
              action="/api/contact"
              method="post"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="zip"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  ZIP code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="topic"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                >
                  <option>Press request</option>
                  <option>Policy question</option>
                  <option>Host an event</option>
                  <option>Story tip</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] leading-[1.6] text-ink-900 focus:outline-none focus:border-ochre-500 resize-vertical"
                />
              </div>
              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 border-[1.5px] border-ink-900 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900 w-fit"
              >
                Send message
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="md:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Social
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Follow the{' '}
                <em className="font-italic not-italic text-ochre-600">road</em>.
              </h2>
            </div>
            <ul className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="group flex items-center justify-between rounded-[4px] border border-bone-200 bg-white px-5 py-4 transition-colors hover:border-ochre-500"
                  >
                    <span className="font-display text-base font-semibold text-ink-900">
                      {social.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-stone-400 group-hover:text-ochre-600"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default ContactPage
