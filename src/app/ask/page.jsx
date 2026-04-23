import SiteFooter from '@/components/home/site-footer'
import IssueForm from '@/components/issues/issue-form'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: 'Ask Russ — Submit a question to the candidate',
  description:
    'Submit a question to Russ Cleveland. Every question reaches the team directly.',
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
                Ask Russ a question. Every one reaches the team directly &mdash; nothing
                massaged, nothing poll-tested.
              </p>
            </div>
          </div>
        </section>

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
                Submit it here. Russ reads them directly and answers the most common ones
                at town halls across Montana.
              </p>
            </div>

            <IssueForm />
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}

export default AskPage
