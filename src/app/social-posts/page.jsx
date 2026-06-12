import fs from 'node:fs'
import path from 'node:path'

import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import PostCard from '@/components/social-posts/post-card'

export const metadata = {
  title: 'Social Post Designs · Internal Creative Assets',
  description: 'Internal gallery of social media post designs.',
  robots: { index: false, follow: false },
}

const POSTS_DIR = path.join(process.cwd(), 'public', 'social-posts')

const readPosts = (prefix) => {
  let files = []
  try {
    files = fs.readdirSync(POSTS_DIR)
  } catch (error) {
    console.error('[SocialPostsPage]:', error)
    return []
  }

  return files
    .filter((file) => file.startsWith(prefix) && file.endsWith('.html'))
    .sort()
    .map((file) => {
      const html = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
      const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? file
      const number = file.match(/(\d+)/)?.[1] ?? '00'
      const name = title.split('·')[1]?.trim() ?? title
      return { file, number, name }
    })
}

const SocialPostsPage = () => {
  const feedPosts = readPosts('feed-')
  const storyPosts = readPosts('story-')

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
              SOCIAL{' '}
              <em className="font-italic not-italic text-ochre-500/[.18]">
                creative
              </em>
            </span>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-24 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Internal · Unlisted
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(2.5rem,8vw,6rem)]">
                Social post{' '}
                <em className="font-italic not-italic text-ochre-400">
                  designs
                </em>
                .
              </h1>
              <p className="mt-10 max-w-[54ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Live previews of the 20 standalone post creatives. Each card
                renders the actual HTML file — click any card to open it
                full-size in a new tab.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
            <div className="mb-14">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                01 · Feed Posts
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.5rem)]">
                Square{' '}
                <em className="font-italic not-italic text-ochre-600">feed</em>{' '}
                posts.
              </h2>
              <p className="mt-4 max-w-[64ch] text-base leading-[1.65] text-stone-600">
                1080 × 1080 — ten layouts for the main grid.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {feedPosts.map((post) => (
                <PostCard key={post.file} {...post} aspect="square" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-t border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
            <div className="mb-14">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                02 · Story Posts
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.5rem)]">
                Vertical{' '}
                <em className="font-italic not-italic text-ochre-600">
                  story
                </em>{' '}
                posts.
              </h2>
              <p className="mt-4 max-w-[64ch] text-base leading-[1.65] text-stone-600">
                1080 × 1920 — ten safe-zone-aware layouts for Stories and Reels
                covers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
              {storyPosts.map((post) => (
                <PostCard key={post.file} {...post} aspect="story" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default SocialPostsPage
