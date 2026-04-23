import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'
import { EVENTS } from '@/constants/events'
import { CALENDAR_URL } from '@/lib/events'

export const metadata = {
  title: 'Events — Russ Cleveland for Congress',
  description:
    'Upcoming town halls, meet & greets, and community events across Montana. RSVP to reserve your spot.',
}

const EventsPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16 lg:py-40">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Events
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,10vw,9rem)]">
                Where Russ will{' '}
                <em className="font-italic not-italic text-ochre-600">be</em>.
              </h1>
              <p className="mt-10 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                In person. On the record. Town halls, meet &amp; greets, and community events
                across Montana.
              </p>
            </div>
            <aside className="tablet:col-span-4 tablet:col-start-9 flex flex-col items-start gap-4 justify-end">
              <MagneticButton href={CALENDAR_URL} variant="primary" size="lg" external>
                Subscribe on Google Calendar
              </MagneticButton>
              <MagneticButton
                href="mailto:connect@russellcleveland.org?subject=Host%20an%20event"
                variant="ghost"
                size="lg"
              >
                Host an event in your county
              </MagneticButton>
            </aside>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  — Upcoming
                </span>
                <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)] max-w-[22ch]">
                  Next on the{' '}
                  <em className="font-italic not-italic text-ochre-600">road</em>.
                </h2>
              </div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                {EVENTS.length} events scheduled
              </p>
            </div>

            <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/events/${event.id}`}
                    className="group flex h-full flex-col gap-4 rounded-[4px] border border-bone-200 bg-white p-8 lg:p-10 transition-colors hover:border-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500"
                  >
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                      — {event.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em] text-ink-900 max-w-[26ch]">
                      {event.name}
                    </h3>
                    <dl className="mt-2 flex flex-col gap-2 text-stone-600">
                      <div className="flex items-baseline gap-3">
                        <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 min-w-[48px]">
                          Date
                        </dt>
                        <dd className="font-body text-[15px] text-ink-900">{event.date}</dd>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 min-w-[48px]">
                          Time
                        </dt>
                        <dd className="font-body text-[15px] text-ink-900">{event.time}</dd>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 min-w-[48px]">
                          Where
                        </dt>
                        <dd className="font-body text-[15px] text-ink-900">{event.location}</dd>
                      </div>
                    </dl>
                    <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 group-hover:text-ochre-600">
                      RSVP & details
                      <span aria-hidden="true">→</span>
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

export default EventsPage
