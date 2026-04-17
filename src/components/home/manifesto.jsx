const Manifesto = () => {
  return (
    <section
      id="why"
      className="bg-paper text-ink-900 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
      >
        <span className="font-display font-black text-[200px] md:text-[280px] lg:text-[360px] leading-none tracking-[-0.04em] text-ink-900/[.045] whitespace-nowrap -translate-x-6">
          MONTANA FIRST <em className="font-italic not-italic text-ochre-500/[.18]">montana first</em>
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            — 01 · Why I&apos;m running
          </span>

          <blockquote className="mt-10 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.025em] text-ink-900">
            <em className="font-italic not-italic text-ochre-600">
              &ldquo;It&apos;s about us,
            </em>
            <br />
            <em className="font-italic not-italic text-ochre-600">not me.&rdquo;</em>
          </blockquote>

          <p className="mt-10 max-w-[56ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
            The fight ahead isn&apos;t left versus right, it is top versus bottom. It is time
            to reclaim our state, protect what is ours, and build a Montana that truly works
            for us all.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-[2px] w-16 bg-ochre-500" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              — From russellcleveland.org
            </span>
          </div>
        </div>

        <aside className="md:col-span-4 md:pt-20 flex flex-col gap-6">
          <div className="relative bg-ink-900 text-moonlight rounded-[28px] p-8 lg:p-10 overflow-hidden">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
              — The frame
            </span>
            <p className="mt-6 font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.015em]">
              Not left versus right.{' '}
              <em className="font-italic not-italic text-ochre-400">Top versus bottom.</em>
            </p>
            <p className="mt-6 text-sm leading-[1.65] text-moonlight/75">
              This campaign isn&apos;t about expensive ads or hollow endorsements. It&apos;s about
              real conversations driven by shared struggle and shared values.
            </p>
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border-[1.5px] border-ochre-500/25"
            />
          </div>

          <div className="bg-paper-2 border border-bone-200 rounded-[20px] p-6 flex flex-col gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              — The promise
            </span>
            <p className="font-display text-xl font-extrabold leading-tight text-ink-900">
              No Corporate PAC. No AIPAC.
            </p>
            <p className="text-sm leading-[1.55] text-stone-600">
              A truly grassroots campaign, refusing corporate PAC, AIPAC, and other special
              interest money.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Manifesto
