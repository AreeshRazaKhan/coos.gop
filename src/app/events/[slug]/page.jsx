import Link from 'next/link'
import { notFound } from 'next/navigation'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import { CALENDAR_URL, EVENTS, getEventBySlug } from '@/lib/events'

export const generateStaticParams = () => EVENTS.map((event) => ({ slug: event.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Event — Cleveland for Congress' }
  return {
    title: `${event.title} — ${event.month} ${event.day}, ${event.year}`,
    description: event.description,
  }
}

const EventDetailPage = async ({ params }) => {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const relatedEvents = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:px-16">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/70 hover:text-ochre-400"
            >
              <span aria-hidden="true">←</span>
              All events
            </Link>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 pb-20 md:px-12 md:pb-32 lg:px-16">
            <div className="md:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — {event.type}
              </span>

              <time
                dateTime={event.iso}
                className="mt-10 flex flex-wrap items-baseline gap-4"
              >
                <span className="font-display font-black leading-[0.88] tracking-[-0.04em] text-[clamp(5rem,14vw,12rem)] text-ochre-400">
                  {event.day}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display font-black text-3xl md:text-5xl leading-none tracking-[-0.02em] text-moonlight">
                    {event.month} {event.year}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-moonlight/60">
                    {event.time}
                    {event.endTime ? ` – ${event.endTime}` : ''}
                  </span>
                </span>
              </time>

              <h1 className="mt-12 font-display font-black leading-[0.96] tracking-[-0.03em] text-[clamp(2.5rem,7vw,6rem)] max-w-[20ch]">
                {event.title}
              </h1>

              <p className="mt-8 font-italic italic text-xl md:text-2xl text-moonlight/85">
                {event.place} &middot; {event.address}
              </p>

              <p className="mt-10 max-w-[58ch] font-display text-xl md:text-[22px] font-normal leading-[1.5] text-moonlight/90">
                {event.description}
              </p>
            </div>

            <aside className="md:col-span-4 md:col-start-9 md:sticky md:top-28 md:self-start">
              <div className="bg-ink-800 border border-ink-700 rounded-[28px] p-8 lg:p-10 flex flex-col gap-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  — RSVP
                </span>
                <p className="font-display text-lg font-semibold leading-[1.25] text-moonlight max-w-[26ch]">
                  Let us know you&rsquo;re coming so we can count chairs.
                </p>
                <form className="flex flex-col gap-3" action="/api/rsvp" method="post">
                  <input type="hidden" name="slug" value={event.slug} />
                  <label htmlFor="rsvp-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="rsvp-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Full name"
                    className="rounded-[4px] border border-ink-700 bg-ink-900 px-4 py-[14px] font-body text-[15px] text-moonlight placeholder:text-moonlight/40 focus:outline-none focus:border-ochre-500"
                  />
                  <label htmlFor="rsvp-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="rsvp-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="rounded-[4px] border border-ink-700 bg-ink-900 px-4 py-[14px] font-body text-[15px] text-moonlight placeholder:text-moonlight/40 focus:outline-none focus:border-ochre-500"
                  />
                  <label htmlFor="rsvp-guests" className="sr-only">
                    Number of guests
                  </label>
                  <input
                    id="rsvp-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    defaultValue="1"
                    className="rounded-[4px] border border-ink-700 bg-ink-900 px-4 py-[14px] font-body text-[15px] text-moonlight focus:outline-none focus:border-ochre-500"
                  />
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
                  >
                    Save my spot
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
                <hr className="border-t border-ink-700" />
                <Link
                  href={CALENDAR_URL}
                  className="inline-flex items-center justify-between gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight hover:text-ochre-400"
                >
                  Add to Google Calendar
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — What to expect
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                No theater.{' '}
                <em className="font-italic not-italic text-ochre-600">Just conversation.</em>
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-ochre-500">
                <h3 className="font-display text-xl font-extrabold text-ink-900 leading-tight">
                  Bring your questions
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-stone-600">
                  Healthcare, public lands, wages, corruption &mdash; Russ answers what you
                  actually want answered, not a stump speech.
                </p>
              </div>
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-sage">
                <h3 className="font-display text-xl font-extrabold text-ink-900 leading-tight">
                  Doors open early
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-stone-600">
                  Coffee, local snacks, and a sign-in sheet so the field team can follow up in
                  your county.
                </p>
              </div>
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-ochre-500">
                <h3 className="font-display text-xl font-extrabold text-ink-900 leading-tight">
                  Accessibility
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-stone-600">
                  Venues are wheelchair accessible. Need ASL or a ride? Email{' '}
                  <a
                    href="mailto:connect@russellcleveland.org"
                    className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
                  >
                    connect@russellcleveland.org
                  </a>{' '}
                  at least 48 hours ahead.
                </p>
              </div>
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-ink-900">
                <h3 className="font-display text-xl font-extrabold text-ink-900 leading-tight">
                  Family-friendly
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-stone-600">
                  Kids welcome. Russ is a dad of seven &mdash; chaos is expected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  — Also upcoming
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
                  More dates{' '}
                  <em className="font-italic not-italic text-ochre-600">this spring</em>.
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 hover:text-ochre-600"
              >
                All events
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((related) => (
                <Link
                  key={related.slug}
                  href={`/events/${related.slug}`}
                  className="group bg-white border border-bone-200 rounded-[4px] p-8 flex flex-col gap-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-ochre-500 hover:bg-paper-2"
                >
                  <time
                    dateTime={related.iso}
                    className="flex items-baseline gap-3"
                  >
                    <span className="font-display font-black text-4xl leading-none tracking-[-0.03em] text-ink-900 group-hover:text-ochre-600">
                      {related.day}
                    </span>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                      {related.month} {related.year}
                    </span>
                  </time>
                  <h3 className="font-display text-xl font-extrabold leading-tight tracking-[-0.015em] text-ink-900">
                    {related.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-[1.55]">
                    {related.place} &middot; {related.address}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default EventDetailPage
