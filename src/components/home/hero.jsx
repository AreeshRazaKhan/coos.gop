import Image from 'next/image'
import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'

const DONATE_URL = 'https://secure.actblue.com/donate/clevelandq12026'

const Hero = () => {
  return (
    <section className="hero-gradient text-moonlight relative overflow-hidden">
      <SiteNav />

      <div className="relative grid grid-cols-1 gap-12 px-6 pt-10 pb-28 md:grid-cols-12 md:gap-10 md:px-12 md:pt-14 md:pb-36 lg:px-16 lg:pt-20 lg:pb-44">
        <div className="md:col-span-7 relative flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            — The Montana Way
          </span>

          <h1 className="mt-10 font-display font-black leading-[0.88] tracking-[-0.03em] text-[clamp(3rem,12.5vw,11.5rem)]">
            Independent Spirit,{' '}
            <em className="font-italic not-italic text-ochre-400">Democratic Values</em>.
          </h1>

          <p className="mt-10 max-w-[54ch] font-display text-[22px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-moonlight/90">
            Russ Cleveland is a father, coach, finance professional, and child care expert who
            grew up on a small farm in Stevensville, Montana. He is also a proud U.S. Navy veteran.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/join-the-movement"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400 hover:border-ochre-400"
            >
              Join the movement
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-moonlight/70 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-moonlight transition-colors hover:bg-moonlight hover:text-ink-900"
            >
              Donate
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-moonlight/60">
            No Corporate PAC <span className="text-ochre-400">·</span> No AIPAC{' '}
            <span className="text-ochre-400">·</span> FEC ID C00902395
          </p>

          <div className="mt-8 md:mt-10 md:absolute md:top-full md:left-0">
            <span className="sticker-ochre">No Corporate PAC · Ever</span>
          </div>
        </div>

        <div className="relative mt-6 md:mt-0 md:col-span-5 md:flex md:items-end">
          <div className="arch-mask relative w-full aspect-[4/5] bg-ink-700 overflow-hidden ring-1 ring-moonlight/10">
            <Image
              src="https://picsum.photos/seed/russ-cleveland-mt/800/1000"
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
            <div className="absolute inset-0 flex items-end p-8 md:p-10">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  — Saint Regis, Montana
                </span>
                <span className="mt-3 font-display text-3xl md:text-4xl font-black leading-tight text-moonlight tracking-[-0.02em]">
                  Russ Cleveland
                </span>
                <span className="mt-1 font-italic italic text-moonlight/80">
                  Navy Veteran · Father of seven
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 h-48 w-48 rounded-full border-[1.5px] border-ochre-500/30 z-10"
            />
          </div>

          <div className="absolute top-4 right-4 md:-top-2 md:-right-6 z-10">
            <span className="paper-stamp">Navy Veteran · Est. &apos;25</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
