import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import { CALENDAR_URL } from '@/lib/events'

export const metadata = {
  title: 'Events — Russ Cleveland for Congress',
  description:
    'Subscribe to the official Cleveland for Congress event calendar. Town halls and meet & greets across Montana MT-01.',
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
                In person. On the record. Subscribe to the official campaign calendar for
                meet &amp; greets and community events across Montana.
              </p>
            </div>
            <aside className="tablet:col-span-4 tablet:col-start-9 flex flex-col gap-4 justify-end">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 rounded-full bg-ink-900 border-[1.5px] border-ink-900 px-6 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900"
              >
                View event calendar
                <span aria-hidden="true">→</span>
              </a>
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

        <section className="bg-paper-2 text-ink-900">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="rounded-[28px] border border-bone-200 bg-paper p-10 lg:p-14 flex flex-col gap-6 items-start">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                — Google Calendar
              </span>
              <h2 className="font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)] max-w-[22ch]">
                Upcoming events live on the{' '}
                <em className="font-italic not-italic text-ochre-600">campaign calendar</em>.
              </h2>
              <p className="max-w-[58ch] font-display text-lg md:text-xl leading-[1.5] text-stone-600">
                Subscribe to see every meet &amp; greet, town hall, and community event as it&rsquo;s
                scheduled.
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
              >
                Subscribe on Google Calendar
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default EventsPage
