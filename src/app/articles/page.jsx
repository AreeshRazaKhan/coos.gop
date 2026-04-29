import Image from 'next/image'
import Link from 'next/link'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'
import { fetchGHLPosts } from '@/lib/ghl'

export const metadata = {
  title: 'Articles · Coos County Republicans',
  description:
    'Long-form posts from the committee. Liberty, public safety, stewardship, parental rights, and election integrity, on the record.',
}

export const revalidate = 60

const ArticlesPage = async () => {
  const articles = await fetchGHLPosts()
  const [feature, ...rest] = articles

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-36 tablet:grid-cols-12 lg:px-16 lg:py-40">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Articles
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,8vw,7rem)]">
                On the{' '}
                <em className="font-italic not-italic text-ochre-600">record</em>.
              </h1>
              <p className="mt-10 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                Long-form posts from the committee. Liberty, public safety, stewardship,
                parental rights, and election integrity, on the record.
              </p>
            </div>
            <aside className="tablet:col-span-4 tablet:col-start-9 flex flex-col items-start gap-4 justify-end">
              <MagneticButton href="/get-involved" variant="primary" size="lg">
                Join the fight
              </MagneticButton>
              <MagneticButton
                href="https://secure.anedot.com/friends-of-coos-county-republicans/donate"
                variant="ghost"
                size="lg"
                external
              >
                Chip in
              </MagneticButton>
            </aside>
          </div>
        </section>

        {articles.length === 0 ? (
          <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
            <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
              <div className="rounded-[4px] border border-bone-200 bg-white p-10 max-w-[60ch]">
                <p className="font-display text-lg leading-[1.5] text-stone-600">
                  No articles published yet. Check back soon, or subscribe to the committee
                  list to be notified when the next post drops.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
              <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                      Featured
                    </span>
                    <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)] max-w-[22ch]">
                      Latest from the{' '}
                      <em className="font-italic not-italic text-ochre-600">road</em>.
                    </h2>
                  </div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                    {articles.length} {articles.length === 1 ? 'post' : 'posts'}
                  </p>
                </div>

                <Link
                  href={`/articles/${feature.id}`}
                  className="group mt-14 grid grid-cols-1 gap-8 tablet:grid-cols-12 tablet:gap-12 rounded-[28px] border border-bone-200 bg-paper p-6 md:p-10 transition-colors hover:border-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
                >
                  <div className="tablet:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink-700">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                      priority
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent"
                    />
                  </div>
                  <div className="tablet:col-span-5 flex flex-col gap-5 justify-center">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                      {feature.category}
                    </span>
                    <h3 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink-900 max-w-[20ch]">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-base md:text-lg leading-[1.65] text-stone-600 max-w-[44ch]">
                        {feature.description}
                      </p>
                    )}
                    <dl className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                      <div>
                        <dt className="sr-only">Author</dt>
                        <dd>{feature.author}</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Date</dt>
                        <dd>{feature.publishedDate}</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Read time</dt>
                        <dd>{feature.readTime}</dd>
                      </div>
                    </dl>
                    <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 group-hover:text-ochre-600">
                      Read article
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            </section>

            {rest.length > 0 && (
              <section className="bg-paper text-ink-900">
                <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                        More posts
                      </span>
                      <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)] max-w-[22ch]">
                        Keep{' '}
                        <em className="font-italic not-italic text-ochre-600">reading</em>.
                      </h2>
                    </div>
                  </div>

                  <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((article) => (
                      <li key={article.id}>
                        <Link
                          href={`/articles/${article.id}`}
                          className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-bone-200 bg-white transition-colors hover:border-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500 before:z-10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-ink-700">
                            <Image
                              src={article.image}
                              alt={article.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-4 p-7 md:p-8">
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                              {article.category}
                            </span>
                            <h3 className="font-display text-xl md:text-[24px] font-extrabold leading-[1.15] tracking-[-0.015em] text-ink-900 max-w-[26ch]">
                              {article.title}
                            </h3>
                            {article.description && (
                              <p className="text-[15px] leading-[1.65] text-stone-600 max-w-[42ch]">
                                {article.description}
                              </p>
                            )}
                            <dl className="mt-auto flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 pt-4 border-t border-bone-200">
                              <div>
                                <dt className="sr-only">Date</dt>
                                <dd>{article.publishedDate}</dd>
                              </div>
                              <div>
                                <dt className="sr-only">Read time</dt>
                                <dd>{article.readTime}</dd>
                              </div>
                            </dl>
                            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 group-hover:text-ochre-600">
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
          </>
        )}
      </main>
      <SiteFooter />
    </>
  )
}

export default ArticlesPage
