import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'

export const metadata = {
  title: 'Elections · Coos County Republicans',
  description:
    'Important dates and candidate roster for the May 2026 Primary in Coos County, Oregon.',
}

export const dynamic = 'force-dynamic'

const TIMELINE_EVENTS = [
  {
    iso: '2026-03-10',
    date: 'March 10, 2026',
    title: 'Last day to file',
  },
  {
    iso: '2026-03-13',
    date: 'March 13, 2026',
    title: 'Last day to withdraw',
  },
  {
    iso: '2026-03-14',
    date: 'March 14, 2026',
    title: 'Governor Debate in Coos Bay',
    cta: { label: 'RSVP', href: 'https://www.facebook.com/events/1454880579319714' },
  },
  {
    iso: '2026-04-28',
    date: 'April 28, 2026',
    title: 'Last day to register to vote or change party affiliation',
  },
  {
    iso: '2026-04-29',
    date: 'April 29, 2026',
    title: 'Ballots are mailed',
  },
  {
    iso: '2026-05-19',
    date: 'May 19, 2026',
    title: 'Primary Election',
  },
]

const getNextIndex = (events) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const idx = events.findIndex((event) => new Date(`${event.iso}T00:00:00`) >= today)
  return idx
}

const RACES = [
  {
    office: 'State Representative · District 9',
    note: 'Candidates attending forum on Saturday March 14th at 5PM.',
    candidates: [
      { name: 'Claire Lynn', href: 'https://www.clairefororegon.com' },
      { name: 'Troy Cribbins', href: 'https://troycribbins.com' },
    ],
  },
  {
    office: 'U.S. House Representative · Oregon CD-4',
    note: 'Candidates attending forum on Saturday March 14th at 5PM.',
    candidates: [
      { name: 'Monique DeSpain', href: 'https://moniqueforcongress.com/' },
    ],
  },
  {
    office: 'U.S. Senator · Oregon',
    note: 'Candidates attending forum on Saturday March 14th at 5PM.',
    candidates: [
      { name: 'Jo Rae Perkins', href: 'https://joraeperkins.com' },
    ],
  },
  {
    office: 'County Commissioner, Position 2',
    description:
      'County Commissioners (4 year term) are responsible for a wide range of duties, primarily focused on local governance and administration. They act as the legislative body for the county, establishing laws and policies, overseeing the county budget, and managing county affairs. They also play a crucial role in community development, public health, and infrastructure, ensuring the smooth operation of county services and advocating for the county’s interests.',
    statute: { label: 'See ORS 203.240', href: 'https://oregon.public.law/statutes/ors_203.240' },
    candidates: [
      {
        name: 'John Sweet',
        tag: 'Incumbent',
        href: 'https://www.facebook.com/johnsweetcooscounty',
      },
      { name: 'Brandi Martindale', href: 'https://www.brandiforcoos.com' },
    ],
  },
  {
    office: 'County Commissioner, Position 3',
    description:
      'County Commissioners (4 year term) are responsible for a wide range of duties, primarily focused on local governance and administration. They act as the legislative body for the county, establishing laws and policies, overseeing the county budget, and managing county affairs. They also play a crucial role in community development, public health, and infrastructure, ensuring the smooth operation of county services and advocating for the county’s interests.',
    statute: { label: 'See ORS 203.240', href: 'https://oregon.public.law/statutes/ors_203.240' },
    candidates: [
      {
        name: 'Richard Coleman',
        href: 'https://www.facebook.com/profile.php?id=61575001173061',
      },
      { name: 'Rick Osborn', href: 'https://osborn4coos.com' },
    ],
  },
  {
    office: 'Sheriff',
    description:
      'A county Sheriff is the chief law enforcement officer, with a broad range of responsibilities including law enforcement, criminal investigation, search and rescue, and jail operations within their county. They also handle legal processes, mental patient transportation, and provide police protection to unincorporated areas.',
    statute: { label: 'See ORS 206.010', href: 'https://oregon.public.law/statutes/ors_206.010' },
    candidates: [
      { name: 'Mike Kinnaird', href: 'https://www.co.coos.or.us/media/62306' },
      {
        name: 'Gabe Fabrizio',
        tag: 'Incumbent',
        href: 'https://www.co.coos.or.us/media/61946',
      },
    ],
  },
  {
    office: 'Clerk',
    description:
      'A county Clerk’s responsibilities typically include managing elections, maintaining public records, and handling property tax appeals. They are also responsible for recording documents like deeds and marriage licenses, and they serve as the chief election official for their county. Additionally, they may be involved in issuing marriage licenses, recording military discharges, and providing access to archived records.',
    statute: { label: 'See ORS 205.110', href: 'https://oregon.public.law/statutes/ors_205.110' },
    candidates: [
      {
        name: 'Julie Brecke',
        tag: 'Incumbent',
        href: 'https://www.co.coos.or.us/media/61941',
      },
      { name: 'Marty Kuhrt', href: 'https://kuhrt4clerk.org' },
      { name: 'Pam Lewis', href: 'https://lewis4clerk.org' },
    ],
  },
  {
    office: 'Precinct Committee Person (PCP)',
    description:
      'To make a real impact, start by engaging with your County Republican Party. It’s the first level of Oregon’s political leadership structure. And consider becoming a Precinct Committeeperson. Real change happens at the local level, in your neighborhoods, precincts, and counties. County Republican Parties are where volunteers organize events, register voters, support candidates, and connect directly with their communities.',
    note: 'You can file at the county elections office or online at the Oregon Secretary of State.',
    candidates: [
      {
        name: 'File online with Oregon SOS',
        href: 'https://sos.oregon.gov/elections/Pages/candidate-filing-precinct-committeeperson-sel-105.aspx',
      },
      {
        name: 'View current PCP candidates (Coos County)',
        href: 'https://www.co.coos.or.us/media/62376',
      },
    ],
  },
  {
    office: 'City Councilor (November)',
    description:
      'City Councilors are primarily responsible for representing their constituents’ interests, setting city policy, and overseeing the city’s operations. This includes identifying community needs, establishing goals, adopting ordinances and resolutions, approving the city budget, and representing the city in regional affairs. They also play a role in contract review, land use appeals, and may serve as the Urban Renewal Agency Board.',
    note: 'Every city in the county will have city council positions available. Exact counts for each city are confirmed toward the end of September.',
    candidates: [],
  },
]

const ElectionsPage = () => {
  const nextIndex = getNextIndex(TIMELINE_EVENTS)
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
          >
            <span className="font-display font-black text-[200px] md:text-[340px] leading-none tracking-[-0.04em] text-ochre-500/[.08] whitespace-nowrap -translate-x-6">
              MAY 2026
            </span>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16 lg:py-40">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Next Election · May 2026
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,10vw,9rem)]">
                On the{' '}
                <em className="font-italic not-italic text-ochre-400">ballot</em>.
              </h1>
              <p className="mt-10 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Important dates and the Coos County Republican candidate roster for the May
                2026 Primary. Vote the full ballot all the way down. Local races shape this
                county more than headlines from Salem or Washington ever will.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ochre-500 text-paper relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 gap-12 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-paper/80">
                Timeline
              </span>
              <h2 className="mt-6 font-display font-black leading-[1.02] tracking-[-0.025em] text-[clamp(2.5rem,6vw,5rem)]">
                Important{' '}
                <em className="font-italic not-italic text-ochre-400">dates</em>.
              </h2>
              <p className="mt-6 max-w-[36ch] font-display text-lg leading-[1.5] text-paper/85">
                Key deadlines and events between filing and the May 19 Primary. Mark them on the
                calendar.
              </p>
            </div>

            <ol className="tablet:col-span-8 relative flex flex-col gap-12">
              <span
                aria-hidden="true"
                className="absolute top-3 bottom-3 left-[9px] w-[2px] bg-paper/30"
              />
              {TIMELINE_EVENTS.map((event, i) => {
                const status =
                  nextIndex === -1
                    ? 'past'
                    : i < nextIndex
                      ? 'past'
                      : i === nextIndex
                        ? 'next'
                        : 'future'
                const dotClass =
                  status === 'next'
                    ? 'bg-ochre-400 ring-ochre-500 shadow-[0_0_0_6px_rgba(192,152,40,0.28)]'
                    : status === 'past'
                      ? 'bg-paper/25 ring-ochre-500/50'
                      : 'bg-paper ring-ochre-500'
                const dateClass =
                  status === 'past' ? 'text-paper/55' : 'text-paper/80'
                const titleSize =
                  status === 'next'
                    ? 'text-2xl md:text-[28px] font-extrabold'
                    : 'text-xl md:text-[22px] font-semibold'
                const titleColor = status === 'past' ? 'text-paper/55' : 'text-paper'
                return (
                  <li
                    key={event.date}
                    className="relative flex items-start gap-6 md:gap-8"
                    aria-current={status === 'next' ? 'step' : undefined}
                  >
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mt-2 h-5 w-5 shrink-0 rounded-full ring-4 transition-colors ${dotClass}`}
                    />
                    <div className="flex flex-col gap-2 min-w-0">
                      <span
                        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${dateClass}`}
                      >
                        {event.date}
                        {status === 'next' && (
                          <span className="ml-2 text-ochre-400">· Next</span>
                        )}
                      </span>
                      <p
                        className={`font-display leading-[1.2] tracking-[-0.015em] ${titleColor} ${titleSize}`}
                      >
                        {event.title}
                        {event.cta && status !== 'past' && (
                          <>
                            {' '}
                            <Link
                              href={event.cta.href}
                              className="font-italic italic font-bold text-ochre-400 underline decoration-ochre-400/70 underline-offset-4 hover:text-paper hover:decoration-paper"
                            >
                              {event.cta.label}
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-16">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  Candidates
                </span>
                <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                  Vote the{' '}
                  <em className="font-italic not-italic text-ochre-600">full ballot</em>.
                </h2>
                <p className="mt-6 max-w-[58ch] text-base md:text-lg leading-[1.65] text-stone-600">
                  Republican candidates filed for offices on the May 2026 ballot in Coos County
                  and the surrounding district. Click through to candidate sites for platforms,
                  events, and ways to support them directly.
                </p>
              </div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400 shrink-0">
                {RACES.length} races
              </p>
            </div>

            <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {RACES.map((race) => (
                <li key={race.office}>
                  <article className="relative h-full bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 flex flex-col gap-5 before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                      Race
                    </span>
                    <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em] text-ink-900 max-w-[26ch]">
                      {race.office}
                    </h3>
                    {race.description && (
                      <p className="text-base leading-[1.6] text-stone-600 max-w-[52ch]">
                        {race.description}
                        {race.statute && (
                          <>
                            {' '}
                            <Link
                              href={race.statute.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ochre-600 underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-500"
                            >
                              {race.statute.label}
                            </Link>
                          </>
                        )}
                      </p>
                    )}
                    {race.note && (
                      <p className="text-sm italic font-italic leading-[1.55] text-stone-600/90 max-w-[52ch]">
                        {race.note}
                      </p>
                    )}
                    {race.candidates.length > 0 && (
                      <ul className="mt-2 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
                        {race.candidates.map((candidate) => (
                          <li
                            key={candidate.name}
                            className="py-3 flex items-baseline justify-between gap-4"
                          >
                            <span className="font-display text-lg font-semibold leading-tight text-ink-900">
                              {candidate.href ? (
                                <Link
                                  href={candidate.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600 hover:decoration-ochre-500"
                                >
                                  {candidate.name}
                                </Link>
                              ) : (
                                candidate.name
                              )}
                            </span>
                            {candidate.tag && (
                              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ochre-600 shrink-0">
                                {candidate.tag}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink-900 text-moonlight">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16 flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-8">
            <p className="font-display text-2xl md:text-[32px] font-extrabold leading-[1.15] max-w-[40ch] tracking-[-0.015em]">
              Want to run for office or volunteer for a candidate?{' '}
              <em className="font-italic not-italic text-ochre-400">Talk to us.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="/get-involved" variant="ochre" size="lg">
                Join the fight
              </MagneticButton>
              <MagneticButton href="/contact" variant="ghost-light" size="lg">
                Contact the committee
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default ElectionsPage
