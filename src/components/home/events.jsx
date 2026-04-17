import Link from 'next/link'

import { CALENDAR_URL, EVENTS } from '@/lib/events'

const Events = () => {
  const [featured, ...upcoming] = EVENTS

  return (
    <section
      id="events"
      className="bg-paper-2 text-ink-900 border-y border-bone-200 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              — 05 · Upcoming
            </span>
            <h2 className="mt-8 font-display font-black leading-[0.98] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
              Show up.{' '}
              <em className="font-italic not-italic text-ochre-600">Bring a neighbor</em>.
            </h2>
          </div>
          <p className="md:col-span-5 md:pt-14 font-display text-xl md:text-2xl font-normal leading-[1.35] text-stone-600 max-w-[48ch]">
            Where Russ will be — in person, answering questions. Twenty-three counties this
            spring, on the record and on the road.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6">
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

              <h3 className="mt-6 font-display text-4xl md:text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] max-w-[18ch]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-[44ch] text-base leading-[1.65] text-moonlight/80">
                {featured.place}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/events/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
              >
                RSVP
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={CALENDAR_URL}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-moonlight/70 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-moonlight transition-colors hover:bg-moonlight hover:text-ink-900"
              >
                Add to calendar
              </Link>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full border-[1.5px] border-ochre-500/20 pointer-events-none"
            />
          </article>

          <aside className="md:col-span-4 flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[28px] bg-sage text-moonlight p-8 lg:p-10 min-h-[200px] flex flex-col justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/80">
                — On the road
              </span>
              <div>
                <span className="font-display font-black leading-[0.9] tracking-[-0.04em] text-[clamp(4rem,8vw,6rem)] text-paper">
                  23
                </span>
                <p className="mt-2 font-display text-lg font-extrabold leading-tight max-w-[18ch]">
                  counties visited before primary day.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-paper border border-bone-200 p-8 flex flex-col gap-4">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                — Can&apos;t make it?
              </span>
              <p className="font-display text-lg font-semibold leading-[1.25] text-ink-900 max-w-[24ch]">
                Host a living-room event in{' '}
                <em className="font-italic not-italic text-ochre-600">your county</em>.
              </p>
              <Link
                href="mailto:connect@russellcleveland.org?subject=Host%20an%20event"
                className="mt-2 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink-900 px-6 py-3 font-body font-semibold text-[11px] uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper w-fit"
              >
                Start one
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>

        <ol className="mt-16 border-t border-bone-200">
          {upcoming.map((event) => (
            <li
              key={event.iso}
              className="group grid grid-cols-12 gap-4 md:gap-6 items-baseline py-8 md:py-10 border-b border-bone-200"
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
                <h4 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em]">
                  {event.title}
                </h4>
                <p className="mt-1 text-sm md:text-base leading-[1.55] text-stone-600">
                  {event.place}
                </p>
              </div>

              <div className="col-span-12 md:col-span-1 flex md:justify-end self-center">
                <Link
                  href={`/events/${event.slug}`}
                  aria-label={`RSVP to ${event.title}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink-900 text-ink-900 transition-all group-hover:bg-ink-900 group-hover:text-paper"
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
            Placeholder schedule · Replace with live calendar before launch
          </p>
          <Link
            href={CALENDAR_URL}
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 border-[1.5px] border-ink-900 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900 w-fit"
          >
            Subscribe to the calendar
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Events
