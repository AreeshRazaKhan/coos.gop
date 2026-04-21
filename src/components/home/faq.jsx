'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Do you support women\u2019s reproductive freedom?',
    a: 'Yes. In Montana our right to privacy is sacrosanct in the 1972 Montana State Constitution as amended recently on this issue. Decisions about our healthcare ought to stay between us, our families, and our doctors, not politicians. This is personal for me as a father raising daughters who deserve the same rights and bodily autonomy as anyone else. Real choice only exists when people have access to healthcare, contraception, childcare, and wages that let families decide without desperation, which is why I will fight for Medicare for All.',
  },
  {
    q: 'What do you want to see happen in Palestine?',
    a: 'Russ\u2019s stance on Palestine, like other areas of the world, remains straightforward. Protect human rights! That means reject genocide, reject war crimes, and reject the killing of innocent civilians. We must reaffirm our leadership as a moral and just country in the world by ending blank checks without accountability to allies like Israel, rejecting forever wars that cost lives overseas while draining resources from families here at home. Humanitarian aid should remain available to civilians, but U.S. military and financial support must be conditional on real diplomacy, accountability, and adherence to international law. Otherwise aid must stop, instead addressing issues long ignored in the U.S. like housing, healthcare, wages, and infrastructure needs.',
  },
  {
    q: 'What is your position on data centers?',
    a: 'The issue with Artificial Intelligence (AI) and data centers isn\u2019t technology, it\u2019s who controls the decisions and how is our privacy protected. Montanans should decide what gets built on our land, using OUR water and energy, not D.C. agencies or wealthy tech corporations looking to cash in. That\u2019s why I support ending an AI moratorium to pause development of data centers until guard rails are established that deliver good jobs, responsible infrastructure, and accountability to our Montana lands, waters, and communities.',
  },
  {
    q: 'Term limits? Banning stock trading?',
    a: 'Term limits and banning stock trading matter, but they only work if we tackle corruption and money in politics head-on. I\u2019ve signed a notarized pledge, alongside more than 100 candidates across the country, committing to real, enforceable ethics reform, including a full stock trading ban, a five-year lobbying moratorium, an enforceable judicial code of ethics, term limits, and ending Citizens United. This is a core pillar of my campaign, and we\u2019ll have a real opportunity to finally push this agenda forward together because of the nationwide coalition of other candidates I helped build, giving us real power and an actionable agenda on day one.',
  },
  {
    q: 'What will you do regarding LGBTQIA+ rights name one policy:',
    a: 'I support passing the Equality Act so LGBTQIA+ people cannot legally be fired, denied housing, or refused healthcare because of who they are. Discrimination makes affordability worse, and fixing access to housing, healthcare, and wages helps everyone. Equality isn\u2019t a special interest, it\u2019s how we build systems that actually work for Montana families.',
  },
  {
    q: 'Montana has a strong gun culture. How will you address rising concerns about gun violence? Do you see this as a federal or state issue?',
    a: 'It\u2019s both. I strongly support the Second Amendment. I\u2019m a Navy veteran, and I took an oath to defend the Constitution, including the right to own a firearm. Just like we are taught in the service, responsible gun use and ownership also require secure storage and accountability. However, rising gun violence is first and foremost a healthcare failure. We need Medicare for All that fully includes mental health, crisis care, vision, and dental, so people get help before they reach a breaking point. When firearms are properly secured and healthcare remains accessible to everyone without financial burden, communities are safer and responsible gun owners aren\u2019t punished.',
  },
  {
    q: 'Do you support the roadless rule?',
    a: 'Yes. I support the roadless rule because it protects Montana\u2019s water, wildlife, and outdoor economy from being sold off to special interests. This comes back to corruption and money in politics, when donors and corporations get a say, public lands lose. Ryan Zinke and the current administration talks like public-lands champions, but their record shows they side with donors and rollbacks, not long-term protection for Montanans or our wild places.',
  },
  {
    q: 'What differentiates you from the other candidates?',
    a: 'I offer a different kind of leadership. One grounded in real Montana life, not politics as usual. My campaign isn\u2019t guided or funded by D.C. consultants, lobbyists, or dark money groups, which means I\u2019m not boxed in or defined by anyone else\u2019s agenda. My experience spans military service in the U.S. Navy, finance, small business, agriculture, childcare, and healthcare. That lived experience shapes how I approach affordability, accountability, and getting real results for Montanans.',
  },
  {
    q: 'What will you do to address affordability, specifically housing and tenants rights for young people?',
    a: 'Housing affordability is being squeezed from both ends; rising housing costs and wages that haven\u2019t kept up because the system rewards the top at everyone else\u2019s expense. I\u2019ve worked in lending and helped build affordable housing in Montana, so I\u2019ve seen how bad policy and corporate-driven pay gaps push young people out. That\u2019s why my approach focuses on real affordability: building housing people can afford and tackling corruption-driven wage inequality, including a 50:1 pay cap, so no executive makes more than fifty times their lowest paid employee. This gives credit that is due back to the working class and ensures working Montanans can actually stay here.',
  },
  {
    q: 'What would you change, if anything, regarding immigration and ICE?',
    a: 'Today in our country, federal overreach is out of control. Our immigration system needs a full restructuring. I support ending ICE, as well as post 9/11 legislation that has fueled this federal overreach and fear. We must focus instead on improving an antiquated immigration application process to speed up the processing timeline, while still enforcing our immigration laws by directing resources to properly fund state and local law enforcement. That approach restores accountability, fixes broken processing, and allows enforcement to happen responsibly without violating civil rights or states\u2019 authority. We can achieve both firm border control and improve immigrant processing by electing leaders like Russ, who are focused on solutions, not racist slander and fear mongering.',
  },
  {
    q: 'How do we return to normal after the Trump administration?',
    a: 'Our goal should not be \u201cget back to normal\u201d because normal gave us corruption, endless wars, and a system rigged for the wealthy. The way forward is ending corruption, getting money out of politics, and returning power to the people so government works for families again. This race is about choosing whether we repeat the same mistakes or finally break from \u201cbought and paid for\u201d politics and finally build something better for both our current and our future generations.',
  },
  {
    q: 'What about your background prepares you to be an effective member of congress?',
    a: 'I didn\u2019t come up through politics, I came up through real life. I\u2019m a U.S. Navy veteran raised in western Montana. I\u2019ve built businesses, managing everything from Fortune 500\u2013scale budgets to small-business payroll, and tackling real challenges like childcare and affordable housing. After losing my daughter to leukemia, I saw firsthand how broken our healthcare system is, and that\u2019s why I\u2019m committed to delivering results, not excuses, for Montana families.',
  },
  {
    q: 'What will you do to address the climate crisis and ensure young people have a livable future?',
    a: 'The climate crisis keeps getting worse because polluters are still writing the rules, and politicians like Ryan Zinke keep choosing donors and corporations over Montana communities. Our state constitution guarantees Montanans the right to a clean and healthful environment, yet Federal agencies keep fast-tracking projects like the Sheep Creek mine by cutting out local input and putting our land, water, agriculture, and way of life at risk. Real solutions start with getting money out of politics and diversifying our energy sources so we build modern infrastructure and good-paying jobs young Montanans can build a future on right here at home.',
  },
  {
    q: 'Do you support federal action for student loan forgiveness?',
    a: 'Yes. Student debt is a major driver of the affordability crisis, and it\u2019s punishing people for trying to get an education while dragging down the economy. As a starter, student loans should be zero interest and existing debt needs real reduction, but forgiveness alone won\u2019t solve the problem if we don\u2019t fix how education is funded and how wages keep up. That\u2019s why I support reworking the pipeline so the last two years of high school count toward college or the trades, letting students graduate with real credentials and a path to a good-paying job, not lifelong debt.',
  },
  {
    q: 'How do federal trade policies affect Montana agriculture, and what would you change?',
    a: 'Federal trade policy hits Montana agriculture where it hurts. I see it on my own ranch in Saint Regis through higher input costs, expensive equipment, and unstable markets. When tariffs are used as a political weapon, family farmers and ranchers pay the price while D.C. insiders don\u2019t. We need fair trade policies that cut red tape, keep lobbyists out of the room, and let Montana producers compete without taxpayers cleaning up Washington\u2019s mistakes.',
  },
  {
    q: 'How will you help graduates stay in Montana?',
    a: 'Young people aren\u2019t leaving Montana because they want to. They\u2019re being pushed out by bad policies that hold wages down while housing, groceries, and childcare keep climbing. Keeping graduates here means fixing the full pipeline: reducing lifelong student debt, making sure workers see the raises instead of all the money going to executives (50:1 pay cap for executives), and lowering costs through affordable housing, Medicare for All, and Universal childcare. I\u2019ve worked on these problems in real life, not theory, and I\u2019m committed to making Montana a place where young people can build a future, not feel forced to leave.',
  },
  {
    q: 'What will you do to fix the housing crisis from a federal level?',
    a: 'We won\u2019t fix the housing crisis unless we deal with what\u2019s really driving it: wages that haven\u2019t kept up and a system rigged for corporations and Wall Street. At the federal level, I will fight to raise wages by closing extreme pay gaps, direct federal housing dollars toward workforce and affordable housing instead of luxury units, and stop corporate investors from treating residential homes like a Wall Street investment. This is about affordability and corruption. Housing should work for people who live and work here, not special interests cashing in.',
  },
  {
    q: 'Do you support the sale of public lands?',
    a: 'No. Selling public lands creates permanent damage and hands Montana\u2019s incredible lands, water, wildlife, and air over to corporations that don\u2019t live with the consequences. These sell-offs benefit special interests while taxpayers and local communities are left with pollution, cleanup costs, and lost access that hurts hunting, fishing, agriculture, and tourism. This is about corruption and accountability. Public lands aren\u2019t bargaining chips for corporations, they\u2019re part of who we are as Montanans, and I\u2019ll fight to keep them that way.',
  },
  {
    q: 'Do you support school choice?',
    a: 'No. I support strong public education, as guaranteed in the 1972 Montana State Constitution. I\u2019m a product of Montana public schools, and my kids attend public school today, so I know what these schools mean to our communities. Montana already has some of the lowest teacher pay in the country, and diverting public dollars to vouchers only makes it harder to recruit teachers and keep classrooms staffed, especially in rural areas. Our state constitution guarantees every Montana kid a free, quality public education, and I\u2019ll fight to make sure our tax dollars strengthen public schools, not subsidize private interests, so that every child gets an equal opportunity at a bright future thanks to quality public education.',
  },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre-500"
      >
        <span className="font-display text-lg md:text-xl font-semibold leading-[1.3] text-moonlight">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out ${
            open
              ? 'rotate-45 border-ochre-500 text-ochre-400'
              : 'border-moonlight/30 text-moonlight/80'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1.5V10.5M1.5 6H10.5"
              stroke="currentColor"
              strokeWidth="1.5"
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
          <div className="pb-8 pr-12">
            <p className="max-w-[64ch] text-base md:text-[17px] leading-[1.7] text-moonlight/80">
              {a}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-ink-900 text-moonlight px-6 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-16">
        <header className="tablet:col-span-5">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            &mdash; 07 &middot; On the record
          </span>
          <h2 className="mt-10 font-display text-[clamp(2.2rem,6vw,5rem)] font-black leading-[0.96] tracking-[-0.025em] text-moonlight">
            Frequently asked{' '}
            <em className="font-italic not-italic text-ochre-400">questions</em>.
          </h2>
          <p className="mt-8 max-w-[44ch] font-display text-lg md:text-xl font-normal leading-[1.4] text-moonlight/75">
            Straight answers, no hedging. Where Russ stands on the issues Montanans ask about
            most.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-[2px] w-16 bg-ochre-500" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
              {FAQ_ITEMS.length} answers
            </span>
          </div>
        </header>

        <div className="tablet:col-span-7">
          <ul className="divide-y divide-moonlight/15 border-y border-moonlight/15">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQ
