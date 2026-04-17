import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

const WAYS_TO_HELP = [
  {
    title: 'Door-knock your block',
    body: 'The strongest data we have is a neighbor looking another neighbor in the eye. Two hours on a Saturday covers more ground than a week of ads.',
    accent: 'ochre',
  },
  {
    title: 'Host a living-room event',
    body: "Five chairs, a pot of coffee, and four of your neighbors is a perfect campaign stop. We\u2019ll bring the candidate \u2014 you bring the room.",
    accent: 'sage',
  },
  {
    title: 'Text bank from anywhere',
    body: 'Help us reach Montanans in every county without leaving your kitchen table. Training takes about fifteen minutes.',
    accent: 'ink',
  },
  {
    title: 'Write a letter to the editor',
    body: 'Local papers still carry weight in MT-01. We\u2019ll help you draft it and send it to the right desk.',
    accent: 'ochre',
  },
]

const DONOR_RULES = [
  'You are a U.S. citizen or lawfully admitted permanent resident (green card holder).',
  'The contribution is made from your own personal funds and is not being provided by another person or entity.',
  'You are at least 18 years old.',
  'You are not a federal contractor.',
  'You are not using corporate, business, or foreign national funds.',
  'If you are an American living abroad, you are making this contribution while physically located in the United States.',
]

const ACCENT_MAP = {
  ochre: 'before:bg-ochre-500',
  sage: 'before:bg-sage',
  ink: 'before:bg-ink-900',
}

export const metadata = {
  title: 'Join the Movement — Cleveland for Congress',
  description:
    'Door-knock, host, text bank, or write. Join the Cleveland for Congress grassroots movement in Montana MT-01.',
}

const VolunteerPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
          >
            <span className="font-display font-black text-[220px] md:text-[360px] leading-none tracking-[-0.04em] text-ochre-500/[.07] whitespace-nowrap -translate-x-6">
              THE TIME IS NOW
            </span>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-40">
            <div className="md:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — Join the movement
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(3.5rem,12vw,10rem)]">
                The time is{' '}
                <em className="font-italic not-italic text-ochre-400">now</em>.
              </h1>
              <p className="mt-10 max-w-[54ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Join the Cleveland for Congress grassroots movement by donating, volunteering
                and then joining our mailing and events list.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="md:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Sign up
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Pick one thing.{' '}
                <em className="font-italic not-italic text-ochre-600">Do it Saturday.</em>
              </h2>
              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-[1.65] text-stone-600">
                Tell us where you are and how you want to help. A field organizer from your
                county will be in touch within two days.
              </p>
            </div>

            <form
              className="md:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
              action="/api/volunteer"
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
                  htmlFor="phone"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
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
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>

              <fieldset className="md:col-span-2 flex flex-col gap-3">
                <legend className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
                  I can help with
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {['Door-knock', 'Text bank', 'Host an event', 'Sign waving', 'Write letters', 'Phone bank'].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 rounded-[4px] border border-bone-200 bg-paper px-4 py-3 font-body text-[14px] text-ink-900 hover:border-ochre-500 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="help"
                          value={item}
                          className="accent-ochre-500"
                        />
                        {item}
                      </label>
                    ),
                  )}
                </div>
              </fieldset>

              <label className="md:col-span-2 flex items-start gap-3 font-mono text-[11px] leading-[1.6] text-stone-600">
                <input type="checkbox" name="sms" required className="mt-1 accent-ochre-500" />
                <span>
                  By submitting your phone number, you are consenting to receive texts from
                  Cleveland For Congress. You can revoke your consent to receive texts at any
                  time by replying &ldquo;stop&rdquo; to the text.
                </span>
              </label>

              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400 w-fit"
              >
                Sign me up
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Pick your lane
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Four ways to{' '}
                <em className="font-italic not-italic text-ochre-600">show up</em>.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {WAYS_TO_HELP.map((way) => (
                <article
                  key={way.title}
                  className={`relative bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 ${ACCENT_MAP[way.accent]}`}
                >
                  <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.1] tracking-[-0.015em] text-ink-900">
                    {way.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.65] text-stone-600 max-w-[42ch]">
                    {way.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Donor disclosure
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                By sending a contribution,{' '}
                <em className="font-italic not-italic text-ochre-600">you confirm that</em>:
              </h2>
            </div>
            <ol className="md:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {DONOR_RULES.map((rule, i) => (
                <li key={rule} className="py-5 flex items-start gap-6">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-600 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base md:text-lg leading-[1.65] text-stone-600 max-w-[72ch]">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ink-900 text-moonlight">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="font-display text-2xl md:text-[32px] font-extrabold leading-[1.15] max-w-[34ch] tracking-[-0.015em]">
              Already in?{' '}
              <em className="font-italic not-italic text-ochre-400">Chip in a dollar.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://secure.actblue.com/donate/clevelandq12026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rust border-[1.5px] border-rust px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Donate
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-moonlight/70 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-moonlight transition-colors hover:bg-moonlight hover:text-ink-900"
              >
                See events
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default VolunteerPage
