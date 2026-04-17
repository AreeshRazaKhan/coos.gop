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
            — Montana · MT-01 · 2026
          </span>

          <h1 className="mt-10 font-display font-black leading-[0.88] tracking-[-0.03em] text-[clamp(3rem,12.5vw,11.5rem)]">
            Not left versus right —{' '}
            <em className="font-italic not-italic text-ochre-400">top versus bottom</em>.
          </h1>

          <p className="mt-10 max-w-[44ch] font-display text-[28px] font-normal leading-[1.3] tracking-[-0.015em] text-moonlight/90">
            A Navy veteran, a Stevensville father of seven, and a neighbor who&apos;s had it with
            corporate money running Congress. It&apos;s time to put Montana first.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rust border-[1.5px] border-rust px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
            >
              Chip in
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400 hover:border-ochre-400"
            >
              Join the movement
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-moonlight/60">
            $0 corporate PAC money <span className="text-ochre-400">·</span> FEC ID C00902395{' '}
            <span className="text-ochre-400">·</span> Grassroots only
          </p>

          <div className="mt-8 md:mt-10 md:absolute md:top-full md:left-0">
            <span className="sticker-ochre">No Corporate PAC · Ever</span>
          </div>
        </div>

        <div className="relative mt-6 md:mt-0 md:col-span-5 md:flex md:items-end">
          <div className="arch-mask relative w-full aspect-[4/5] bg-ink-700 overflow-hidden ring-1 ring-moonlight/10">
            <Image
              src="https://picsum.photos/seed/russ-cleveland-mt/800/1000"
              alt="Placeholder portrait of Russ Cleveland in Stevensville, Montana"
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
                  — Stevensville, Montana
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
