import Link from 'next/link'

const DONATE_URL = 'https://secure.actblue.com/donate/clevelandq12026'

const DONATE_TIERS = [
  { amount: 27, label: '$27' },
  { amount: 50, label: '$50' },
  { amount: 100, label: '$100' },
  { amount: 500, label: '$500' },
]

const CtaSection = () => {
  return (
    <section id="donate" className="bg-ink-900 text-moonlight relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center overflow-hidden h-32 md:h-44 lg:h-56"
      >
        <span className="font-display font-black text-[140px] md:text-[220px] lg:text-[280px] leading-[0.88] tracking-[-0.04em] text-moonlight/[.05] whitespace-nowrap -translate-x-10 -translate-y-4">
          THE MONTANA WAY
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44 grid grid-cols-1 gap-12 tablet:grid-cols-12">
        <div className="tablet:col-span-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            — 05 · Join In
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(2.5rem,7vw,6.5rem)]">
            The time is{' '}
            <em className="font-italic not-italic text-ochre-400">now</em>.
          </h2>
          <p className="mt-8 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
            Join the Cleveland for Congress grassroots movement by donating, volunteering, and
            joining our mailing and events list.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400 block mb-4">
                — Chip in
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DONATE_TIERS.map((tier) => (
                  <a
                    key={tier.amount}
                    href={`${DONATE_URL}?amount=${tier.amount}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-[4px] border border-ink-700 bg-ink-800 px-4 py-6 transition-colors hover:border-ochre-400 hover:bg-ink-700"
                  >
                    <span className="font-display text-2xl font-extrabold text-moonlight tracking-[-0.01em] group-hover:text-ochre-400">
                      {tier.label}
                    </span>
                  </a>
                ))}
              </div>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-rust border-[1.5px] border-rust px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Custom amount
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <form
              id="join"
              className="lg:col-span-2 flex flex-col gap-3"
              action="/api/join"
              method="post"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                — Or join the movement
              </span>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@montana.example"
                className="rounded-[4px] border border-ink-700 bg-ink-800 px-4 py-[14px] font-body text-[15px] text-moonlight placeholder:text-moonlight/40 focus:outline-none focus:border-ochre-500"
              />
              <label htmlFor="zip" className="sr-only">
                Zip code
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{5}"
                placeholder="ZIP (59866)"
                className="rounded-[4px] border border-ink-700 bg-ink-800 px-4 py-[14px] font-body text-[15px] text-moonlight placeholder:text-moonlight/40 focus:outline-none focus:border-ochre-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
              >
                Sign me up
                <span aria-hidden="true">→</span>
              </button>
              <p className="font-mono text-[10px] leading-[1.6] text-moonlight/50">
                No spam. No selling. We&apos;ll text about events in your county.
              </p>
            </form>
          </div>
        </div>

        <aside
          id="contact"
          className="tablet:col-span-4 tablet:col-start-9 rounded-[28px] bg-ink-800 p-8 lg:p-10 border border-ink-700 flex flex-col gap-6 h-fit tablet:mt-20"
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
            — Mailing Address
          </span>
          <p className="font-display text-xl font-semibold leading-snug text-moonlight">
            Cleveland for Congress
            <br />
            P.O. Box 691
            <br />
            Saint Regis, MT 59866
          </p>
          <hr className="border-t border-ink-700" />
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              — Contact
            </span>
            <Link
              href="mailto:connect@russellcleveland.org"
              className="font-mono text-sm text-moonlight underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-400"
            >
              connect@russellcleveland.org
            </Link>
          </div>
          <hr className="border-t border-ink-700" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
            — FEC Filing
          </span>
          <p className="font-mono text-[11px] leading-[1.65] text-moonlight/75">
            Paid for by Cleveland for Congress · FEC ID C00902395. Not authorized by any
            candidate or candidate&apos;s committee other than Cleveland for Congress.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default CtaSection
