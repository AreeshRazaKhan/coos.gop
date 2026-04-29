import Link from 'next/link'
import { notFound } from 'next/navigation'

import EventDetail from '@/components/events/event-detail'
import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import { fetchGHLEvent } from '@/lib/ghl'

export const revalidate = 60

const formatDate = (date) =>
  date && date.month && date.day && date.year
    ? `${date.month} ${date.day}, ${date.year}`
    : ''

export const generateMetadata = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) {
    return { title: 'Event not found · Coos County Republicans' }
  }
  return {
    title: `${event.title} · Coos County Republicans`,
    description:
      event.description || `${event.title} on ${formatDate(event.date)} in ${event.location}.`,
  }
}

const EventDetailPage = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-paper text-ink-900">
        <div className="mx-auto max-w-[1440px] px-6 pt-16 md:px-12 lg:px-16">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 hover:text-ochre-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
          >
            <span aria-hidden="true">←</span>
            All events
          </Link>
        </div>
        <EventDetail event={event} />
      </main>
      <SiteFooter />
    </>
  )
}

export default EventDetailPage
