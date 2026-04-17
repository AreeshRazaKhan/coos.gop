import Image from 'next/image'
import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

const SECTIONS = [
  {
    eyebrow: '— 01 · Loss',
    title: 'A mission driven by loss',
    body: "When Russ and his wife Kate lost their oldest daughter, Madison, to leukemia at the age of 13, they saw firsthand how broken the American healthcare system was. The pain of watching her suffer was matched only by the anger of watching politicians slash critical funding for medical research in the pursuit of more tax breaks for billionaires. That moment changed everything. Russ is running for Congress because no parent should ever have to watch their child fight a deadly disease in a system rigged against them.",
    accent: 'ochre',
  },
  {
    eyebrow: '— 02 · Roots',
    title: 'Roots in a purple Montana',
    body: 'Russ grew up on a farm in the Bitterroot Valley with a deep respect for hard work and community. Always an athlete, he went on to play football and study electrical engineering at Montana Tech, until his desire to serve his country led him to enlist in the U.S. Navy as an Aviation Electrician. Russ is proud to have deep family roots in a once purple Montana, with parents from Townsend, MT and grandparents and great grandparents from the Flathead Valley.',
    accent: 'sage',
  },
  {
    eyebrow: '— 03 · Service',
    title: 'Service to our country',
    body: 'Russ proudly served as an Aviation Electrician for the MH-53E squadron HM-14 out of Norfolk, Virginia. He graduated at the top of his class in technical training and served honorably until 2009 on active duty, and 2013 in the reserves. This experience taught him what it means to be accountable to something larger than himself, a value that has guided his life ever since.',
    accent: 'ink',
  },
  {
    eyebrow: '— 04 · Business',
    title: 'Entrepreneurship & business',
    body: 'In 2013, Russ married his best friend and soulmate, Dr. Kate Cleveland, and together they built a family and a business rooted in service to their community. After his military service, Russ spent nearly a decade in banking at a Fortune 500 company, working in lending and helping small businesses get started and grow. He later co-founded Rocky Mountain Kids, a startup child care company that quickly expanded to serve thousands of children across dozens of locations throughout the region. When the pandemic shut down schools across the state, Russ led the company in pivoting quickly to open remote learning centers, the first program of its kind in the nation. These centers provided safe, supervised spaces where children could continue their schooling while parents, especially essential workers, could keep showing up for their jobs. Through this work, Russ also helped the state launch Universal Pre-K programs, expanding access to early childhood education and supporting working families across the state.',
    accent: 'ochre',
  },
  {
    eyebrow: '— 05 · Home',
    title: 'Coming home to Montana',
    body: "After the loss of their eldest daughter in 2020, Russ and Kate knew they needed to come home. They returned to Montana the next year and, like many working-class families, quickly found that the place that raised Russ had priced their growing family out of most options. So, true to his blue collar roots, Russ rolled up his sleeves and made it work. He planted new roots in Saint Regis, MT and built their family\u2019s homestead and cattle ranch with his own hands, naming it Madison Ranch in honor of their daughter. Russ also spent his first three years back in Montana building multi-family affordable housing units in Saint Regis, aimed at meeting the needs of teachers and working class families in his community. Today, Russ and Kate coach at their local high school and raise their children with the same sense of purpose that has carried them through tragedy and triumph alike.",
    accent: 'sage',
  },
  {
    eyebrow: '— 06 · Why',
    title: 'Why Congress?',
    body: "Russ grew up in a purple Montana, at a time when Montanans were neighbors first, not political adversaries. Russ is committed to a campaign that isn\u2019t about right versus left, but instead top versus bottom. Russ\u2019s campaign is focused on fixing the things that negatively impact all Montanans: Healthcare, Affordability, and Corruption. This fight ahead is for the land we grew up on, the people who raised us, and the children who\u2019ll inherit what we leave behind. For Russ, this campaign is for Montana\u2019s rural towns as much as it is for the blue cities. It\u2019s for the hardworking people of this state, for this nation, and for the next generation.",
    accent: 'ink',
  },
]

export const metadata = {
  title: 'About Russ Cleveland — From Montana, For Montana',
  description:
    'Navy veteran. Father of seven. Entrepreneur. Raised on a Bitterroot farm. Why Russ Cleveland is running for Congress in Montana MT-01.',
}

const AboutPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-40">
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — About · MT-01 · 2026
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,9vw,8rem)]">
                From Montana,{' '}
                <em className="font-italic not-italic text-ochre-400">For Montana</em>.
              </h1>
              <p className="mt-10 max-w-[54ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Russ Cleveland is a Montanan through and through &mdash; a Navy veteran,
                entrepreneur, high school coach, husband and father of seven. He&rsquo;s running
                for the U.S. House to honor his late daughter&rsquo;s memory and to fight for a
                stronger, healthier and more affordable future for every Montana family.
              </p>
            </div>

            <div className="md:col-span-5 relative md:flex md:items-end">
              <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-700">
                <Image
                  src="https://picsum.photos/seed/russ-about-portrait/800/1000"
                  alt="Placeholder portrait of Russ Cleveland"
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
                      — Bitterroot Valley
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
              <div className="absolute top-4 right-4 md:-top-2 md:-right-4 z-10">
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
                <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
                  <aside className={`md:col-span-4 ${reversed ? 'md:order-2' : ''} md:sticky md:top-32 md:self-start`}>
                    <span className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
                      {section.eyebrow}
                    </span>
                    <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3.25rem)]">
                      {section.title}
                    </h2>
                  </aside>
                  <div className={`md:col-span-8 ${reversed ? 'md:order-1' : ''}`}>
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
                  — 07 · The pledge
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
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400"
                  >
                    Join the movement
                    <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href="https://secure.actblue.com/donate/clevelandq12026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-rust border-[1.5px] border-rust px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Chip in
                    <span aria-hidden="true">→</span>
                  </a>
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
