'use client'

import { useState } from 'react'

const VALUES = [
  {
    title: 'Lower Taxes, Smaller Government',
    paragraphs: [
      'Working families across Coos County are being priced out of their own homes by an Oregon tax code that keeps growing. Property taxes climb every year. PERS, the public pension system, swallows education and infrastructure dollars before a single classroom or road gets funded. Job-killing regulations land hardest on the small businesses, ranchers, loggers, fishermen, and tradespeople that built this county. We fight for real PERS reform that puts taxpayers ahead of bureaucrats. We back leaders who cut property tax burdens, pull back the regulatory state, and let Coos County keep more of what it earns. Smaller government is not an abstract slogan. It means letting the family-owned mill, the fishing operation, the contractor, and the rancher work without permission slips from Salem. We support candidates who will vote no on new taxes, vote yes on spending caps, and treat every dollar as borrowed from the next generation.',
    ],
  },
  {
    title: 'Public Safety First',
    paragraphs: [
      'The sheriff is the highest constitutional authority inside Coos County, and we treat that office accordingly. We back recruitment and retention funding so deputies stay on the road instead of leaving for better-paying departments out of state. We support tough, proportional sentencing for the repeat offenders driving most of the property crime, drug trafficking, and violence in our communities. Catch and release is not justice. It is an open invitation for the same offender to hit the same neighborhood again next week. We push for prosecution of fentanyl dealers, organized retail theft, and crimes against children at the maximum level the law allows.',
      'Victims come first. Coos County Republicans supports candidates who fund victim advocacy, who insist on truth in sentencing, and who hold prosecutors accountable when they refuse to file charges. We oppose every effort to defund local law enforcement, decriminalize hard drugs, or cut funding for jails and the treatment programs that actually work. The deputies, troopers, dispatchers, and corrections officers protecting Coos County deserve a county government that has their back, not endless second-guessing from Salem activists who have never patrolled a rural road at two in the morning. Public safety is the foundation of every other freedom we talk about. Without it, property rights, parental rights, and economic liberty all collapse. We will not let that happen in this county on our watch.',
    ],
  },
  {
    title: 'Coos County First',
    paragraphs: [
      'Coos County’s economy was built on timber, fishing, farming, and trades. Federal land lockouts and aggressive environmental rulemaking have closed mills, idled boats, and pushed working families out of jobs that supported entire towns for generations. We fight for active forest stewardship, sustained-yield timber harvests, salvage logging after wildfire, and returning as much federally controlled land as legally possible to local management where decisions are made by people who actually live with the consequences. We oppose dam breaching on the Columbia and Snake systems. We defend private property rights against every regulatory taking, water rights challenge, and zoning overreach Salem can dream up.',
      'This is still a working county and we intend to keep it that way. Clean water, healthy fisheries, and productive forests are not at odds with logging, ranching, or commercial fishing. They depend on each other. Coos County Republicans supports candidates who treat working lands as the real conservation strategy and who reject the false choice between jobs and the environment. We oppose blanket designations, top-down land grabs, and federal agencies that treat Coos County as an experiment instead of a community. Stewardship is what people who live here have always done. Outsiders trying to manage our forests, beaches, rivers, and harbors from a thousand miles away should respect that, not try to overwrite it.',
    ],
  },
  {
    title: 'Parental Rights in Education',
    paragraphs: [
      'Parents, not state agencies and not activist administrators, are the primary authority in their children’s education. Coos County Republicans supports candidates who codify parental notification, parental consent, and parental access to curriculum at every grade level. School boards work for the families they serve. When they forget that, voters should replace them, and we help organize that work.',
      'We fight for back-to-basics academic standards. Reading, writing, math, science, civics, and American history taught honestly and rigorously. We support school choice including open enrollment, education savings accounts, charter expansion, and homeschool protections. Every Coos County child deserves a path that fits their family, not a one-size-fits-all assignment from a Salem bureaucrat.',
      'Classrooms should not be political battlegrounds. We oppose ideological indoctrination, gender ideology in elementary grades, and the erosion of girls’ sports, locker rooms, and bathrooms. We back district policies that put student safety, age-appropriate content, and academic outcomes above adult agendas. Schools exist to teach, not to socially engineer the next generation.',
    ],
  },
  {
    title: 'Election Integrity Now',
    paragraphs: [
      'Election integrity is not a slogan. It is the foundation that makes every other freedom possible. Coos County Republicans supports paper ballots that can be hand-counted and audited, the option of same-day in-person voting at the precinct, and proof of citizenship before any voter is added to the rolls. We back rigorous signature verification, transparent chain of custody for ballots, and observers from both parties at every step from envelope opening through certification. Mass vote-by-mail without those safeguards is a system the public is right to question. We push for reforms at the county clerk level where they can be implemented immediately, and at the state level through legislators who actually intend to vote for them. Until elections are secure, every other policy fight is built on sand.',
      'We also believe Republicans win Coos County by showing up. That means recruiting principled candidates for school board, city council, county commissioner, state legislature, and federal office. It means knocking doors, training poll watchers, raising local money, and building a permanent ground game between elections instead of after the filing deadline. Coos County Republicans exists to give that ground game structure. We are unapologetic about wanting Republicans to win at every level in this county. Democracy works when both sides compete on a level field. We are organizing to make sure that field stays level here, that votes are counted accurately, and that Coos County’s voice is heard in Coquille, in Salem, and in Washington.',
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
                className="w-full text-base md:text-[17px] leading-[1.7] text-ash"
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
          <div className="max-w-[60ch] md:flex-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              04 · Platform
            </span>
            <h2 className="mt-8 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-[1.05] tracking-[-0.015em] text-ochre-600">
              The values that drive Coos Republicans:
            </h2>
          </div>
          <p className="max-w-[44ch] font-display text-lg leading-[1.4] text-stone-600">
            Five fights. Each one a promise backed by policy, not slogans or hashtags.
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
