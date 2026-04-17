import Image from 'next/image'

const BIO_FACTS = [
  { label: 'Service', value: 'U.S. Navy Veteran' },
  { label: 'Family', value: '07 Children' },
  { label: 'Home', value: 'Stevensville, MT' },
  { label: 'Roles', value: 'Finance · Child care · Coach' },
  { label: 'Raised', value: 'Small family farm, Stevensville' },
]

const MeetRuss = () => {
  return (
    <section
      id="meet-russ"
      className="bg-paper text-ink-900 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:order-2 relative">
          <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-900">
            <Image
              src="https://picsum.photos/seed/russ-archive-navy-1993/800/1000"
              alt="Placeholder archival portrait, 1993 Navy service"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  'linear-gradient(135deg, rgba(14,27,44,0.85), rgba(200,115,43,0.35))',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(200,115,43,0.05) 0 10px, transparent 10px 20px)',
              }}
            />
            <div className="absolute inset-0 flex items-end p-8 z-10">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  — Archival · Duotone
                </span>
                <span className="mt-2 block font-display text-2xl font-black leading-tight text-moonlight tracking-[-0.015em]">
                  Russ, 1993 · Navy
                </span>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border-[1.5px] border-ochre-500/25 z-10"
            />
          </div>

          <div className="absolute -top-2 -left-2 md:-top-4 md:-left-6">
            <span className="paper-stamp">Veteran-Owned Campaign</span>
          </div>
        </div>

        <div className="md:col-span-7 md:order-1 flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            — 03 · Meet Russ
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.98] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
            Grown in the Bitterroot.{' '}
            <em className="font-italic not-italic text-ochre-600">Built for the fight.</em>
          </h2>

          <p className="mt-8 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
            Russ grew up on a small farm in Stevensville, Montana. He served in the U.S. Navy,
            built a career as a finance professional, and is raising seven children in the
            Bitterroot Valley.
          </p>

          <p className="mt-6 max-w-[58ch] text-base md:text-lg leading-[1.65] text-stone-600">
            He is a coach, a child care expert, and an entrepreneur. His Navy oath was to the
            Constitution of the United States.
          </p>

          <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
            Facts summarized from russellcleveland.org · Full bio link forthcoming
          </p>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[58ch] border-t border-bone-200 pt-8">
            {BIO_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                  — {fact.label}
                </dt>
                <dd className="font-display text-lg font-semibold leading-tight text-ink-900 tracking-[-0.01em]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default MeetRuss
