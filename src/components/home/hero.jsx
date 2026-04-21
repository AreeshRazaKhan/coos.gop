import Image from 'next/image'
import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'

const DONATE_URL = 'https://secure.actblue.com/donate/clevelandq12026'

const Hero = () => {
  return (
    <section className="hero-gradient text-moonlight relative overflow-hidden tablet:min-h-screen tablet:flex tablet:flex-col tablet:justify-center">
      <SiteNav />

      <div className="relative w-full mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 pt-6 pb-16 md:gap-12 md:px-12 md:py-10 tablet:grid-cols-12 tablet:gap-14 lg:px-16 lg:gap-16 lg:py-14">
        <div className="tablet:col-span-7 relative flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            — The Montana Way
          </span>

          <h1 className="mt-6 font-display font-black leading-[0.92] tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,5rem)]">
            Independent Spirit,{' '}
            <em className="font-italic not-italic text-ochre-400">Democratic Values</em>.
          </h1>

          <p className="mt-6 max-w-[54ch] font-display text-[16px] md:text-[18px] font-normal leading-[1.45] tracking-[-0.01em] text-moonlight/90">
            Russ Cleveland is a father, coach, finance professional, and child care expert who
            grew up on a small farm in Stevensville, Montana. He is also a proud U.S. Navy veteran.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/join-the-movement"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-500 border-[1.5px] border-ochre-500 px-6 py-3 font-body font-semibold text-xs uppercase tracking-[0.14em] text-ink-900 transition-colors hover:bg-ochre-400 hover:border-ochre-400"
            >
              Join the movement
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-moonlight/70 px-6 py-3 font-body font-semibold text-xs uppercase tracking-[0.14em] text-moonlight transition-colors hover:bg-moonlight hover:text-ink-900"
            >
              Donate
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-moonlight/60">
            No Corporate PAC <span className="text-ochre-400">·</span> No AIPAC{' '}
            <span className="text-ochre-400">·</span> FEC ID C00902395
          </p>
        </div>

        <div className="relative mt-2 tablet:mt-0 tablet:col-span-5 tablet:flex tablet:items-center">
          <div className="arch-mask relative w-full max-w-[380px] tablet:max-w-none tablet:ml-auto tablet:w-[82%] aspect-[4/5] bg-ink-700 overflow-hidden ring-1 ring-moonlight/10">
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
            <div className="absolute inset-0 flex items-end p-8 tablet:p-10">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  — Stevensville, Montana
                </span>
                <span className="mt-3 font-display text-3xl tablet:text-4xl font-black leading-tight text-moonlight tracking-[-0.02em]">
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

          <div className="absolute top-4 right-4 tablet:-top-2 tablet:-right-6 z-10">
            <span className="paper-stamp">Navy Veteran · Est. &apos;25</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
