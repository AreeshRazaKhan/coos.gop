import Image from "next/image";

const Pillars = () => {
  return (
    <section
      id="platform"
      className="bg-paper-2 text-ink-900 px-6 py-16 md:px-12 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            02 · The Platform
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
            Liberty. Safety.{" "}
            <em className="font-italic not-italic text-ochre-600">
              Stewardship.
            </em>
          </h2>
          <p className="mt-6 font-display text-xl md:text-2xl font-normal leading-[1.35] text-stone-600 max-w-[64ch]">
            Coos County Republicans fights for lower taxes, safer streets, and
            local control of the lands and waters we depend on.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 tablet:grid-cols-6 tablet:gap-6 tablet:auto-rows-[minmax(320px,auto)]">
          <article className="tablet:col-span-4 tablet:row-span-2 relative overflow-hidden rounded-[28px] bg-ink-900 text-moonlight p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Pillar 01 / Liberty
              </span>
              <h3 className="mt-8 font-display font-extrabold leading-[1.04] tracking-[-0.02em] text-[clamp(2rem,4vw,3.5rem)] max-w-[20ch]">
                Lower taxes. Smaller government.{" "}
                <em className="font-italic not-italic text-ochre-400">
                  Always
                </em>
                .
              </h3>
            </div>
            <p className="mt-10 max-w-[48ch] text-base md:text-lg leading-[1.65] text-moonlight/80">
              Oregon families are taxed out of their homes while PERS bleeds the
              budget. We back leaders who cut spending, slash regulations, and
              keep dollars in Coos County.
            </p>
            <Image
              src="/coos-county-republicans-logo-white.webp"
              alt=""
              aria-hidden="true"
              width={4167}
              height={3505}
              className="pointer-events-none select-none absolute -bottom-16 -right-16 w-[400px] md:w-[520px] lg:w-[620px] h-auto opacity-[0.05]"
            />
          </article>

          <article className="tablet:col-span-2 relative overflow-hidden rounded-[28px] bg-ochre-500 text-paper p-10 flex flex-col justify-between min-h-[320px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/85">
              Coos County PAC
            </span>
            <div className="flex flex-col">
              <span className="font-display font-black leading-[0.9] tracking-[-0.04em] text-[clamp(5rem,10vw,7rem)]">
                300
              </span>
              <span className="mt-2 font-display text-xl md:text-2xl font-extrabold leading-[1.1] max-w-[16ch]">
                Oregon PAC. Locally accountable.{" "}
                <em className="font-italic not-italic text-ochre-400">
                  Always.
                </em>
              </span>
            </div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/85">
              Oregon SOS · 300
            </span>
          </article>

          <article className="tablet:col-span-2 relative overflow-hidden rounded-[28px] bg-paper border border-bone-200 text-ink-900 p-10 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                Pillar 02 / Safety
              </span>
              <h3 className="mt-6 font-display text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] max-w-[16ch]">
                Back the badge. End{" "}
                <em className="font-italic not-italic text-ochre-600">
                  catch and release
                </em>
                .
              </h3>
            </div>
            <p className="text-sm leading-[1.65] text-stone-600 max-w-[38ch]">
              Sheriffs are the highest local authority in Coos County. We
              support recruitment funding, proportional sentencing, and victims
              first. No more revolving door for repeat offenders.
            </p>
          </article>

          <article className="tablet:col-span-6 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sage to-sage-dark text-moonlight p-10 lg:p-14 flex flex-col tablet:flex-row tablet:items-end tablet:justify-between gap-10 min-h-[320px]">
            <div className="tablet:max-w-[62%]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/85">
                Pillar 03 / Stewardship
              </span>
              <h3 className="mt-8 font-display font-extrabold leading-[1.04] tracking-[-0.02em] text-[clamp(2rem,4.5vw,4rem)] max-w-[24ch]">
                Active stewardship. <br />
                Local control.{" "}
                <em className="font-italic not-italic text-ochre-400">
                  Period.
                </em>
              </h3>
            </div>
            <p className="tablet:max-w-[34ch] text-base md:text-lg leading-[1.65] text-moonlight/90">
              Federal lockouts and dam-breaching threats kill Coos County jobs.
              We fight for sustained timber harvests, private property rights,
              and returning federal lands to local hands where they belong.
            </p>
            <div
              aria-hidden="true"
              className="absolute -top-10 right-8 font-display text-[200px] md:text-[280px] font-black leading-none text-sage-dark/50 select-none pointer-events-none"
            >
              ✦
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
