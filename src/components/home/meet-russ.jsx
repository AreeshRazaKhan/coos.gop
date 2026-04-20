import Image from 'next/image'

const BIO_FACTS = [
  { label: 'Service', value: 'U.S. Navy Veteran' },
  { label: 'Family', value: 'Father of seven' },
  { label: 'Home', value: 'Saint Regis, MT' },
  { label: 'Roles', value: 'Finance · Child care · Coach' },
  { label: 'Raised', value: 'Small farm in Stevensville' },
]

const MeetRuss = () => {
  return (
    <section
      id="meet-russ"
      className="bg-paper text-ink-900 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-16">
        <div className="relative tablet:col-span-5 tablet:order-2 max-w-[460px] tablet:max-w-none">
          <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-900">
            <Image
              src="https://picsum.photos/seed/russ-archive-navy/800/1000"
              alt="Placeholder archival portrait, U.S. Navy service"
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
                  U.S. Navy · HM-14
                </span>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border-[1.5px] border-ochre-500/25 z-10"
            />
          </div>

          <div className="absolute -top-2 -left-2 tablet:-top-4 tablet:-left-6">
            <span className="paper-stamp">Navy Veteran</span>
          </div>
        </div>

        <div className="tablet:col-span-7 tablet:order-1 flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            — 03 · Meet Russ
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.98] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
            From Montana,{' '}
            <em className="font-italic not-italic text-ochre-600">for Montana</em>.
          </h2>

          <p className="mt-8 max-w-[60ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
            Russ Cleveland is a father, coach, finance professional, and child care expert who
            grew up on a small farm in Stevensville, Montana. He is also a proud U.S. Navy
            veteran who deeply values the oath he once took to defend our constitution.
          </p>

          <p className="mt-6 max-w-[60ch] text-base md:text-lg leading-[1.65] text-stone-600">
            He has since dedicated a life in service to others both through career and community,
            driven most recently by the loss of his oldest daughter Madison to leukemia at the
            age of thirteen.
          </p>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 tablet:grid-cols-2 gap-x-10 gap-y-6 max-w-[58ch] border-t border-bone-200 pt-8">
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
