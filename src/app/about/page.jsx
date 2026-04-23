import Image from 'next/image'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'

const SECTIONS = [
  {
    eyebrow: '— 01 · Loss',
    title: 'A mission driven by loss',
    body: 'Russ lost his oldest daughter, Madison, to leukemia at the age of thirteen. That loss drives this campaign. No parent should ever have to watch their child fight a deadly disease in a system rigged against them.',
    accent: 'ochre',
  },
  {
    eyebrow: '— 02 · Roots',
    title: 'From a small farm in Stevensville',
    body: 'Russ grew up on a small farm in Stevensville, Montana, with a deep respect for hard work and community. He is a father of seven, a coach, a finance professional, and a child care expert.',
    accent: 'sage',
  },
  {
    eyebrow: '— 03 · Service',
    title: 'Service to our country',
    body: 'Russ is a proud U.S. Navy veteran who deeply values the oath he once took to defend our constitution. That experience taught him what it means to be accountable to something larger than himself, a value that has guided his life ever since.',
    accent: 'ink',
  },
  {
    eyebrow: '— 04 · Why',
    title: 'Why Congress?',
    body: 'Russ is committed to a campaign that isn\u2019t about right versus left, but instead top versus bottom. His campaign is focused on fixing the things that negatively impact all Montanans: Healthcare, Affordability, and Corruption. This fight ahead is for the land we grew up on, the people who raised us, and the children who\u2019ll inherit what we leave behind. For Russ, this campaign is for Montana\u2019s rural towns as much as it is for the blue cities.',
    accent: 'ochre',
  },
]

export const metadata = {
  title: 'About Russ Cleveland — From Montana, For Montana',
  description:
    'Navy veteran. Father of seven. Finance professional and child care expert. Raised on a small farm in Stevensville, Montana. Why Russ Cleveland is running for Congress in MT-01.',
}

const AboutPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16 lg:py-40">
            <div className="tablet:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — About · MT-01 · 2026
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,9vw,8rem)]">
                From Montana,{' '}
                <em className="font-italic not-italic text-ochre-400">For Montana</em>.
              </h1>
              <p className="mt-10 max-w-[60ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Russ Cleveland is a father, coach, finance professional, and child care expert
                who grew up on a small farm in Stevensville, Montana. He is also a proud U.S.
                Navy veteran who deeply values the oath he once took to defend our constitution.
              </p>
            </div>

            <div className="relative tablet:col-span-5 tablet:flex tablet:items-end max-w-[460px] tablet:max-w-none">
              <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-700">
                <Image
                  src="/russ-portrait.webp"
                  alt="Portrait of Russ Cleveland"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                      — Stevensville, MT
                    </span>
                    <span className="mt-2 block font-display text-3xl font-black leading-tight text-moonlight tracking-[-0.02em]">
                      Russ Cleveland
                    </span>
                    <span className="mt-1 font-italic italic text-moonlight/75">
                      Candidate · U.S. House, MT-01
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 tablet:-top-2 tablet:-right-4 z-10">
                <span className="paper-stamp">Navy Veteran · Est. &apos;25</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-paper">
          {SECTIONS.map((section, i) => {
            const bg = i % 2 === 0 ? 'bg-paper' : 'bg-paper-2'
            const reversed = i % 2 === 1
            const eyebrowColor =
              section.accent === 'ochre'
                ? 'text-ochre-600'
                : section.accent === 'sage'
                  ? 'text-sage-dark'
                  : 'text-brass'
            return (
              <section
                key={section.title}
                className={`${bg} text-ink-900 border-b border-bone-200`}
              >
                <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16 lg:py-32">
                  <aside className={`tablet:col-span-4 ${reversed ? 'tablet:order-2' : ''} tablet:sticky tablet:top-32 tablet:self-start`}>
                    <span className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
                      {section.eyebrow}
                    </span>
                    <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3.25rem)]">
                      {section.title}
                    </h2>
                  </aside>
                  <div className={`tablet:col-span-8 ${reversed ? 'tablet:order-1' : ''}`}>
                    <p className="font-display text-lg md:text-[22px] font-normal leading-[1.55] text-ash max-w-[68ch]">
                      {section.body}
                    </p>
                  </div>
                </div>
              </section>
            )
          })}

          <section className="bg-ink-900 text-moonlight relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
            >
              <span className="font-display font-black text-[220px] md:text-[360px] leading-none tracking-[-0.04em] text-ochre-500/[.08] whitespace-nowrap -translate-x-10">
                NOT BOUGHT.
              </span>
            </div>
            <div className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40 lg:px-16">
              <div className="max-w-[72ch]">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  — 05 · The pledge
                </span>
                <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(3rem,8vw,7rem)]">
                  Not bought.{' '}
                  <em className="font-italic not-italic text-ochre-400">Not backing down.</em>
                </h2>
                <p className="mt-10 font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85 max-w-[54ch]">
                  Russ is the best choice for Montana because he is &ldquo;NOT BOUGHT. NOT
                  BACKING DOWN.&rdquo;
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <MagneticButton href="/volunteer" variant="ochre" size="lg">
                    Join the movement
                  </MagneticButton>
                  <MagneticButton
                    href="https://secure.actblue.com/donate/clevelandq12026"
                    variant="rust"
                    size="lg"
                    external
                  >
                    Chip in
                  </MagneticButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export default AboutPage
