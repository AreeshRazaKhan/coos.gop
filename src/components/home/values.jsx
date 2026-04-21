'use client'

import { useState } from 'react'

const VALUES = [
  {
    title: 'Healthcare for All',
    paragraphs: [
      'I believe healthcare is a human right. Too many Montanans skip the doctor because they are forced to choose between paying for healthcare and keeping a roof over their heads. In a country this wealthy, that is a moral failure. I will fight for an improved version Medicare for All, lowering drug prices, fighting for strong rural clinics, and funding research programs that lead the world again in finding cures and preventing disease. Social Security and Medicare are promises America made to its workers, and I will fight to defend them so Montanans can retire with dignity instead of worrying about rising costs. As a veteran, I believe we honor those who have served by not only giving them the care and respect they deserve, but by strengthening the VA to protect, restore, and expand veterans benefits, ensuring every veteran has a future they can afford.',
    ],
  },
  {
    title: 'A Fair Economy',
    paragraphs: [
      'I believe in workers\u2019 rights and in the dignity of every person who works to earn a living. I will fight to defend the right to collectively bargain and restore those rights to government employees who have been under attack. Without strong unions, working families cannot thrive. Fair wages, safe working conditions, and the right to stand together built the American middle class, and those values must guide us again. I believe no one who works hard should be struggling to make ends meet, and that every Montanan deserves the chance to get ahead and thrive.',
      'I believe the heart of Montana is in our small businesses, farms, ranches, and trades, and in the people who work tirelessly to keep our communities alive. A strong economy means giving local businesses and local workers what they need to grow, build, and stay rooted in the towns that depend on them. Montana should lead again by building and innovating here at home, by valuing real work and local workers, and by making this state a place where people can afford a good life. Technology should serve Montana, not the other way around, and that growth only matters if it protects our resources and lowers the cost of living for the people who already call this place home.',
    ],
  },
  {
    title: 'Protect Montana',
    paragraphs: [
      'I believe water is life. It runs through our valleys, our history, and our blood. When you mess with Montana\u2019s water, you mess with Montanans. I will fight to protect every river, every lake, and every stream because nobody steals our water. I believe our public lands are sacred. They are the homelands that Tribal Nations have been stewards of since time immemorial and the places where generations of Montanans hunt, fish, work, and raise their kids. I will not let this land be fenced off, sold off, or carved up by people who do not live here or who do not share the same values as those who do.',
      'This is the Last Best Place, and we are going to keep it that way. I believe Montana deserves a future built by us. Our Montana State Constitution guarantees clean water, clean air, and healthy land, and I will defend that promise with everything I have at the federal level. I believe in clean energy that aims to preserve this place for generations to come, good paying jobs that encourage families to stay here, and a future where Montana stays Montana.',
    ],
  },
  {
    title: 'Freedom, Equality & Justice',
    paragraphs: [
      'Every Montanan is entitled to the same rights, full stop. No one should ever be treated as less than. Personal freedom is sacred, and I will defend every person\u2019s right to live safe, free, and with dignity, no exceptions.',
      'I believe Tribal sovereignty is sacred. I will work side by side with our Native leaders to guarantee sustainable partnerships and a seat at the table. Too long have there been empty words and broken promises. I support stable funding for all natives, and real partnership in federal decision-making and I will work tirelessly to end the epidemic of missing and murdered Indigenous lives.',
      'I believe strongly in a humane immigration system that treats people with compassion, keeps families together, strengthens our communities, and makes this country safer and more united. I aim to protect human rights for every person, no matter who they are or where they come from.',
    ],
  },
  {
    title: 'Peace and Democracy',
    paragraphs: [
      'I do not believe our country\u2019s billionaires and corporations should be able to buy our democracy. Elections belong to the people, and I will fight to end Citizens United, ban dark money, and bring the framework of The Montana Plan to the national stage. My campaign will not take a dime of corporate PAC money or dark money, this is a truly grassroots campaign powered by PEOPLE. Together, we\u2019ll prove that we don\u2019t need corporate money to win, just the power of the people. I believe every Montanan owns their vote and their personal information, and I will defend our Constitution so elections stay free, fair, and in the hands of the people. I will stand up to Big Tech, billionaires, and politicians who think they can buy our data and our democracy.',
      'I believe strong schools build strong communities, which is why I will work to implement universal childcare, including Universal Pre-K, ensuring every family has a fair shot. Teachers deserve a living wage, schools deserve the resources to give every child a strong future, and Montana families should not have to drain their savings to afford childcare. I believe strongly in peace over profit, and it is time to end the vicious cycle of pouring billions of dollars into foreign wars and turning a blind eye to genocide while Americans struggle to make ends meet here at home. A strong defense means readiness, accountability, and prioritizing taking care of Americans first.',
    ],
  },
]

const ValueItem = ({ title, paragraphs }) => {
  const [open, setOpen] = useState(false)
  return (
    <li className="border-t border-ink-900/15 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-7 md:py-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre-500"
      >
        <span className="font-display text-xl md:text-2xl lg:text-[28px] font-black uppercase leading-none tracking-[-0.015em] text-ink-900">
          {title}
        </span>
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ease-out ${
            open ? 'rotate-45 text-ochre-600' : 'text-ink-900'
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 2V16M2 9H16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-10 pr-12 flex flex-col gap-5">
            {paragraphs.map((p, j) => (
              <p
                key={j}
                className="max-w-[72ch] text-base md:text-[17px] leading-[1.7] text-ash"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

const Values = () => {
  return (
    <section
      id="values"
      className="bg-paper text-ink-900 px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[32ch]">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              &mdash; 04 &middot; Platform
            </span>
            <h2 className="mt-8 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-[1.05] tracking-[-0.015em] text-ochre-600">
              Values that drive Russell&rsquo;s campaign:
            </h2>
          </div>
          <p className="max-w-[44ch] font-display text-lg leading-[1.4] text-stone-600">
            Five pillars. Each one a promise backed by policy, not slogans.
          </p>
        </div>

        <ul className="mt-14 border-y border-ink-900/25">
          {VALUES.map((item, i) => (
            <ValueItem key={i} title={item.title} paragraphs={item.paragraphs} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Values
