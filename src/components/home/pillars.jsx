const Pillars = () => {
  return (
    <section
      id="platform"
      className="bg-paper-2 text-ink-900 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            — 02 · The Platform
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
            Three things.{' '}
            <em className="font-italic not-italic text-ochre-600">That&apos;s the job.</em>
          </h2>
          <p className="mt-6 font-display text-xl md:text-2xl font-normal leading-[1.35] text-stone-600 max-w-[64ch]">
            Healthcare we can afford. Wages that keep up. An end to the corruption that keeps
            them broken.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 md:auto-rows-[minmax(320px,auto)]">
          <article className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-[28px] bg-ink-900 text-moonlight p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Pillar 01 / Healthcare
              </span>
              <h3 className="mt-8 font-display font-extrabold leading-[1.04] tracking-[-0.02em] text-[clamp(2rem,4vw,3.5rem)] max-w-[20ch]">
                Madison&apos;s fight is{' '}
                <em className="font-italic not-italic text-ochre-400">every family&apos;s fight</em>.
              </h3>
            </div>
            <p className="mt-10 max-w-[44ch] text-base md:text-lg leading-[1.65] text-moonlight/80">
              Our daughter Madison was thirteen when leukemia took her. We know the bills, the
              denials, the 2 a.m. phone calls. No family in Ravalli County should lose a home to
              keep someone they love alive.
            </p>
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full border-[1.5px] border-ochre-500/20"
            />
          </article>

          <article className="md:col-span-2 relative overflow-hidden rounded-[28px] bg-ochre-500 text-ink-900 p-10 flex flex-col justify-between min-h-[320px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900/80">
              — No Corporate PAC
            </span>
            <div className="flex flex-col">
              <span className="font-display font-black leading-[0.9] tracking-[-0.04em] text-[clamp(5rem,10vw,7rem)]">
                $0
              </span>
              <span className="mt-2 font-display text-xl md:text-2xl font-extrabold leading-[1.1] max-w-[16ch]">
                from corporate PACs. <em className="font-italic not-italic">Ever.</em>
              </span>
            </div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-900/70">
              FEC ID C00902395
            </span>
          </article>

          <article className="md:col-span-2 relative overflow-hidden rounded-[28px] bg-paper border border-bone-200 text-ink-900 p-10 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                Pillar 02 / Affordability
              </span>
              <h3 className="mt-6 font-display text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] max-w-[14ch]">
                Wages up. Rent, groceries, gas{' '}
                <em className="font-italic not-italic text-ochre-600">down</em>.
              </h3>
            </div>
            <p className="text-sm leading-[1.65] text-stone-600 max-w-[34ch]">
              Real raises for real work. Housing you can afford on Montana wages — not Denver
              speculation.
            </p>
          </article>

          <article className="md:col-span-6 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sage to-sage-dark text-moonlight p-10 lg:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10 min-h-[320px]">
            <div className="md:max-w-[62%]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/80">
                Pillar 03 / End Corruption
              </span>
              <h3 className="mt-8 font-display font-extrabold leading-[1.04] tracking-[-0.02em] text-[clamp(2rem,4.5vw,4rem)] max-w-[22ch]">
                No PACs. No lobbyists.{' '}
                <em className="font-italic not-italic text-paper">Just you.</em>
              </h3>
            </div>
            <p className="md:max-w-[30ch] text-base md:text-lg leading-[1.65] text-moonlight/85">
              Every dollar accepted comes from a person with a name — not a shell and a suit.
              Published quarterly. Full receipts.
            </p>
            <div
              aria-hidden="true"
              className="absolute -top-10 right-8 font-display text-[200px] md:text-[280px] font-black leading-none text-sage-dark/50 select-none pointer-events-none"
            >
              $
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Pillars
