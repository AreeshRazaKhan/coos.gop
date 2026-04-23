import MagneticButton from '@/components/ui/magnetic-button'
import { CALENDAR_URL } from '@/lib/events'

const Events = () => {
  return (
    <section
      id="events"
      className="bg-paper-2 text-ink-900 border-y border-bone-200 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-12 tablet:gap-12">
          <div className="tablet:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              — 05 · Events
            </span>
            <h2 className="mt-8 font-display font-black leading-[0.98] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
              View the{' '}
              <em className="font-italic not-italic text-ochre-600">event calendar</em>.
            </h2>
          </div>
          <p className="tablet:col-span-5 tablet:pt-14 font-display text-xl md:text-2xl font-normal leading-[1.35] text-stone-600 max-w-[48ch]">
            Real conversations, in person. Subscribe to the campaign calendar for meet &amp; greets,
            town halls, and community events across Montana.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 tablet:grid-cols-12">
          <article className="tablet:col-span-8 relative overflow-hidden rounded-[28px] bg-ink-900 text-moonlight p-10 lg:p-14 flex flex-col justify-between min-h-[360px]">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — Google Calendar
              </span>
              <h3 className="mt-8 font-display text-4xl md:text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] max-w-[22ch]">
                Where Russ will be &mdash; on the record, on the road.
              </h3>
              <p className="mt-6 max-w-[54ch] text-base leading-[1.65] text-moonlight/80">
                Subscribe to the official campaign calendar to see upcoming events in your county.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={CALENDAR_URL} variant="ochre" size="lg" external>
                View event calendar
              </MagneticButton>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full border-[1.5px] border-ochre-500/20 pointer-events-none"
            />
          </article>

          <aside className="tablet:col-span-4 rounded-[28px] bg-paper border border-bone-200 p-8 flex flex-col gap-4 justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              — Can&apos;t make it?
            </span>
            <p className="font-display text-lg font-semibold leading-[1.25] text-ink-900 max-w-[24ch]">
              Host a living-room event in{' '}
              <em className="font-italic not-italic text-ochre-600">your county</em>.
            </p>
            <div className="mt-2 w-fit">
              <MagneticButton
                href="mailto:connect@russellcleveland.org?subject=Host%20an%20event"
                variant="ghost"
                size="md"
              >
                Start one
              </MagneticButton>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Events
