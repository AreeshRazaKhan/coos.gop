import SiteFooter from '@/components/home/site-footer'
import IssueForm from '@/components/issues/issue-form'
import SiteHeader from '@/components/site-header'

const TOPICS = []

export const metadata = {
  title: 'Ask Russ — Submit a question to the candidate',
  description:
    "Submit a question to Russ Cleveland. Answers will be posted on the record as they are recorded.",
}

const AskPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
          >
            <span className="font-display font-black text-[200px] md:text-[340px] leading-none tracking-[-0.04em] text-moonlight/[.04] whitespace-nowrap -translate-x-6">
              ASK RUSS <em className="font-italic not-italic text-ochre-500/[.18]">on the record</em>
            </span>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16 lg:py-40">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                — Ask Russ
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,10vw,9rem)]">
                On the{' '}
                <em className="font-italic not-italic text-ochre-400">record</em>.
              </h1>
              <p className="mt-10 max-w-[54ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Ask Russ a question. Answers will be posted here on the record as they are
                recorded &mdash; nothing massaged, nothing poll-tested.
              </p>
            </div>
          </div>
        </section>

        {TOPICS.length > 0 && (
          <section className="bg-paper text-ink-900">
            <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
              <ol className="flex flex-col divide-y divide-bone-200 border-t border-bone-200">
                {TOPICS.map((item, i) => (
                  <li key={item.q} className="grid grid-cols-12 gap-4 tablet:gap-10 py-12 md:py-16">
                    <div className="col-span-12 tablet:col-span-3 flex flex-col gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                        {String(i + 1).padStart(2, '0')} &middot; {item.topic}
                      </span>
                    </div>
                    <details className="col-span-12 tablet:col-span-9 group">
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                        <h2 className="font-display text-2xl md:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] max-w-[44ch]">
                          {item.q}
                        </h2>
                        <span
                          aria-hidden="true"
                          className="shrink-0 mt-2 inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink-900 text-ink-900 transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-6 font-display text-lg md:text-[20px] font-normal leading-[1.55] text-ash max-w-[68ch]">
                        {item.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="bg-paper-2 text-ink-900 border-y border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-32 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                — Submit a question
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Got one we haven&rsquo;t{' '}
                <em className="font-italic not-italic text-ochre-600">answered</em>?
              </h2>
              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-[1.65] text-stone-600">
                Submit it here. Russ answers the most common new ones at town halls, and the
                rest show up on this page with full attribution.
              </p>
            </div>

            <IssueForm />
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400 max-w-[64ch]">
              Answers will be posted here as they are recorded &middot; Updated continuously
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default AskPage
