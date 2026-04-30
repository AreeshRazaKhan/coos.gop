import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'
import { fetchGHLPost, fetchGHLPosts } from '@/lib/ghl'

export const revalidate = 60

export const generateMetadata = async ({ params }) => {
  const { id } = await params
  const article = await fetchGHLPost(id)
  if (!article) {
    return { title: 'Article not found · Coos County Republicans' }
  }
  return {
    title: `${article.title} · Coos County Republicans`,
    description:
      article.description ||
      `${article.title} — published ${article.publishedDate} by ${article.author}.`,
  }
}

const ArticleDetailPage = async ({ params }) => {
  const { id } = await params
  const article = await fetchGHLPost(id)
  if (!article) notFound()

  const all = await fetchGHLPosts()
  const related = all.filter((item) => item.id !== article.id).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-paper text-ink-900">
        <div className="mx-auto max-w-[1440px] px-6 pt-16 md:px-12 lg:px-16">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 hover:text-ochre-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
          >
            <span aria-hidden="true">←</span>
            All articles
          </Link>
        </div>

        <article className="mx-auto max-w-[1440px] px-6 pt-12 pb-20 md:px-12 md:pt-16 md:pb-28 lg:px-16">
          <header className="grid grid-cols-1 gap-10 tablet:grid-cols-12 tablet:gap-12">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                {article.category}
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.03em] text-[clamp(2.25rem,6vw,4.5rem)] text-ink-900">
                {article.title}
              </h1>
              {article.description && (
                <p className="mt-8 max-w-[60ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                  {article.description}
                </p>
              )}
            </div>
            <aside className="tablet:col-span-4 tablet:pt-20 flex flex-col gap-6">
              <dl className="grid grid-cols-1 gap-5 border-t border-bone-200 pt-8">
                <div className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                    Author
                  </dt>
                  <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
                    {article.author}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                    Published
                  </dt>
                  <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
                    {article.publishedDate}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                    Read time
                  </dt>
                  <dd className="font-display text-lg font-semibold leading-tight text-ink-900">
                    {article.readTime}
                  </dd>
                </div>
              </dl>
            </aside>
          </header>

          <figure className="mt-14 mb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-ink-700">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                priority
                className="object-cover"
              />
            </div>
            {article.imageAlt && (
              <figcaption className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                {article.imageAlt}
              </figcaption>
            )}
          </figure>

          <div className="grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-16">
            <div className="tablet:col-span-8 flex flex-col gap-8">
              {article.body ? (
                article.bodyIsHtml ? (
                  <div
                    className="article-body max-w-[68ch] font-body text-[17px] md:text-[18px] leading-[1.75] text-ash"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
                ) : (
                  <div className="max-w-[68ch] font-body text-[17px] md:text-[18px] leading-[1.75] text-ash flex flex-col gap-5">
                    {article.body
                      .split(/\n{2,}/)
                      .map((para) => para.trim())
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={i} className="whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                  </div>
                )
              ) : (
                <p className="max-w-[68ch] font-body text-[17px] leading-[1.75] text-stone-600 italic">
                  This post does not have a description yet. Add one in the GHL blog editor and
                  it will appear here within sixty seconds.
                </p>
              )}
            </div>

            <aside className="tablet:col-span-4">
              <div className="rounded-[28px] bg-ink-900 p-8 lg:p-10 text-moonlight">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  Join In
                </span>
                <h2 className="mt-6 font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em]">
                  Bring this fight{' '}
                  <em className="font-italic not-italic text-ochre-400">home</em>.
                </h2>
                <p className="mt-4 max-w-[44ch] text-sm md:text-base leading-[1.65] text-moonlight/75">
                  Volunteer, host a precinct meeting, or chip in a dollar to keep this
                  committee locally funded.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <MagneticButton href="/get-involved" variant="ochre" size="md">
                    Join the fight
                  </MagneticButton>
                  <MagneticButton
                    href="https://secure.anedot.com/coos-county-republican-party-/donate"
                    variant="ghost-light"
                    size="md"
                    external
                  >
                    Chip in
                  </MagneticButton>
                </div>
              </div>

              <div className="mt-6 rounded-[20px] border border-bone-200 bg-paper-2 p-8 lg:p-10 flex flex-col">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                  Stay close
                </span>
                <p className="mt-3 font-display text-xl md:text-2xl font-extrabold leading-snug tracking-[-0.015em] text-ink-900">
                  Get articles in your inbox.
                </p>
                <p className="mt-3 max-w-[44ch] text-sm md:text-base leading-[1.55] text-stone-600">
                  Subscribe to the committee list for new posts, event invites, and
                  on-the-record updates.
                </p>
                <div className="mt-6">
                  <MagneticButton href="/get-involved#signup" variant="primary" size="md">
                    Subscribe
                  </MagneticButton>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-paper-2 border-y border-bone-200">
            <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                    Keep reading
                  </span>
                  <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                    More from the{' '}
                    <em className="font-italic not-italic text-ochre-600">campaign</em>.
                  </h2>
                </div>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 hover:text-ochre-600"
                >
                  All articles
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/articles/${item.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-bone-200 bg-white transition-colors hover:border-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500 before:z-10"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-ink-700">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl font-extrabold leading-[1.15] tracking-[-0.015em] text-ink-900 max-w-[26ch]">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm leading-[1.55] text-stone-600 max-w-[40ch]">
                            {item.description}
                          </p>
                        )}
                        <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 group-hover:text-ochre-600">
                          Read article
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}

export default ArticleDetailPage
