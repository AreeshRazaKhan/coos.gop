import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import { CALENDAR_URL, EVENTS } from '@/lib/events'

export const metadata = {
  title: 'Events — Russ Cleveland for Congress',
  description:
    'Town halls, meet & greets, and county fairs across Montana MT-01. Come find Russ in your county.',
}

const EventsPage = () => {
  const [featured, ...upcoming] = EVENTS

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-40">
            <div className="md:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Events · Spring 2026
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,10vw,9rem)]">
                Where Russ will{' '}
                <em className="font-italic not-italic text-ochre-600">be</em>.
              </h1>
              <p className="mt-10 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                In person. On the record. Twenty-three counties before primary day. Come say
                hello, bring a question, bring a neighbor.
              </p>
            </div>
            <aside className="md:col-span-4 md:col-start-9 flex flex-col gap-4 justify-end">
              <Link
                href={CALENDAR_URL}
                className="inline-flex items-center justify-between gap-3 rounded-full bg-ink-900 border-[1.5px] border-ink-900 px-6 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900"
              >
                Subscribe to calendar
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="mailto:connect@russellcleveland.org?subject=Host%20an%20event"
                className="inline-flex items-center justify-between gap-3 rounded-full border-[1.5px] border-ink-900 px-6 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper"
              >
                Host an event in your county
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-28 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <article className="md:col-span-8 relative overflow-hidden rounded-[28px] bg-ink-900 text-moonlight p-10 lg:p-14 flex flex-col justify-between min-h-[360px]">
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                      — {featured.type}
                    </span>
                    <span className="sticker-ochre shrink-0">Next Up</span>
                  </div>

                  <time
                    dateTime={featured.iso}
                    className="mt-8 flex items-baseline gap-4"
                  >
                    <span className="font-display font-black leading-[0.88] tracking-[-0.04em] text-[clamp(4rem,8vw,6rem)] text-ochre-400">
                      {featured.day}
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-moonlight/70">
                      {featured.month} {featured.year}
                      <span className="block mt-1 text-moonlight/50">{featured.time}</span>
                    </span>
                  </time>

                  <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] max-w-[18ch]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 font-italic italic text-moonlight/85">{featured.place}</p>
                  <p className="mt-6 max-w-[54ch] text-base leading-[1.65] text-moonlight/80">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/events/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
                  >
                    RSVP &amp; details
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full border-[1.5px] border-ochre-500/20 pointer-events-none"
                />
              </article>

              <aside className="md:col-span-4 rounded-[28px] bg-sage text-moonlight p-8 lg:p-10 flex flex-col justify-between gap-8 md:gap-6 min-h-[320px] relative overflow-hidden">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/80">
                    — On the road
                  </span>
                  <div className="mt-6">
                    <span className="font-display font-black leading-[0.9] tracking-[-0.04em] text-[clamp(5rem,10vw,7rem)] text-paper">
                      23
                    </span>
                    <p className="mt-2 font-display text-lg md:text-xl font-extrabold leading-tight max-w-[18ch]">
                      counties visited before primary day.
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base leading-[1.65] text-moonlight/85 max-w-[34ch]">
                  Every fair, every union hall, every diner. No coast-only fundraisers, no
                  D.C. consultants writing the schedule.
                </p>
                <div className="border-t border-paper/15 pt-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-moonlight/70">
                    Can&apos;t make it?
                  </span>
                  <a
                    href="mailto:connect@russellcleveland.org?subject=Host%20an%20event"
                    className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-paper hover:text-ochre-400"
                  >
                    Host one
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — All upcoming
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                The full{' '}
                <em className="font-italic not-italic text-ochre-600">spring schedule</em>.
              </h2>
            </div>

            <ol className="mt-14 border-t border-bone-200">
              {upcoming.map((event) => (
                <li
                  key={event.iso}
                  className="group grid grid-cols-12 gap-4 md:gap-6 items-baseline py-10 border-b border-bone-200"
                >
                  <time
                    dateTime={event.iso}
                    className="col-span-3 md:col-span-2 flex flex-col"
                  >
                    <span className="font-display font-black leading-[0.88] tracking-[-0.04em] text-[clamp(2.5rem,5vw,4rem)] text-ink-900 group-hover:text-ochre-600 transition-colors">
                      {event.day}
                    </span>
                    <span className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                      {event.month} {event.year}
                    </span>
                  </time>
                  <div className="col-span-7 md:col-span-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400 self-center">
                    <span className="text-brass">{event.type}</span>
                    <span className="block mt-1 text-stone-600">{event.time}</span>
                  </div>
                  <div className="col-span-12 md:col-span-6 self-center">
                    <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em]">
                      <Link
                        href={`/events/${event.slug}`}
                        className="hover:text-ochre-600 transition-colors"
                      >
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm md:text-base leading-[1.55] text-stone-600">
                      {event.place} &middot; {event.address}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 flex md:justify-end self-center">
                    <Link
                      href={`/events/${event.slug}`}
                      aria-label={`Details for ${event.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink-900 text-ink-900 transition-all group-hover:bg-ink-900 group-hover:text-paper"
                    >
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-12 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              Placeholder schedule · Replace with live calendar before launch
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default EventsPage
