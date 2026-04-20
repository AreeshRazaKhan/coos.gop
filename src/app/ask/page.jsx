import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

const TOPICS = [
  {
    topic: 'Healthcare',
    q: 'What\u2019s your background preparing you for Congress?',
    a: "I didn\u2019t come up through politics, I came up through real life. I\u2019m a U.S. Navy veteran raised in western Montana. I\u2019ve built businesses, managing everything from Fortune 500\u2013scale budgets to small-business payroll, and tackling real challenges like childcare and affordable housing. After losing my daughter to leukemia, I saw firsthand how broken our healthcare system is, and that\u2019s why I\u2019m committed to delivering results, not excuses, for Montana families.",
  },
  {
    topic: 'Corruption',
    q: 'What about term limits and banning stock trading?',
    a: "Term limits and banning stock trading matter, but they only work if we tackle corruption and money in politics head-on. I\u2019ve signed a notarized pledge, alongside more than 100 candidates across the country, committing to real, enforceable ethics reform, including a full stock trading ban, a five-year lobbying moratorium, an enforceable judicial code of ethics, term limits, and ending Citizens United. This is a core pillar of my campaign, and we\u2019ll have a real opportunity to finally push this agenda forward together because of the nationwide coalition of other candidates I helped build, giving us real power and an actionable agenda on day one.",
  },
  {
    topic: 'Affordability',
    q: 'How will you address affordability \u2014 housing and tenants\u2019 rights?',
    a: "Housing affordability is being squeezed from both ends; rising housing costs and wages that haven\u2019t kept up because the system rewards the top at everyone else\u2019s expense. I\u2019ve worked in lending and helped build affordable housing in Montana, so I\u2019ve seen how bad policy and corporate-driven pay gaps push young people out. That\u2019s why my approach focuses on real affordability: building housing people can afford and tackling corruption-driven wage inequality, including a 50:1 pay cap, so no executive makes more than fifty times their lowest paid employee. This gives credit that is due back to the working class and ensures working Montanans can actually stay here.",
  },
  {
    topic: 'Rights',
    q: 'Do you support women\u2019s reproductive freedom?',
    a: "Yes. In Montana our right to privacy is sacrosanct in the 1972 Montana State Constitution as amended recently on this issue. Decisions about our healthcare ought to stay between us, our families, and our doctors, not politicians.",
  },
  {
    topic: 'Rights',
    q: 'What will you do regarding LGBTQIA+ rights?',
    a: "I support passing the Equality Act so LGBTQIA+ people cannot legally be fired, denied housing, or refused healthcare because of who they are.",
  },
  {
    topic: 'Second Amendment',
    q: 'Montana gun culture and gun violence \u2014 federal or state issue?',
    a: "It\u2019s both. I strongly support the Second Amendment. I\u2019m a Navy veteran, and I took an oath to defend the Constitution, including the right to own a firearm. Just like we are taught in the service, responsible gun use and ownership also require secure storage and accountability. However, rising gun violence is first and foremost a healthcare failure. We need Medicare for All that fully includes mental health, crisis care, vision, and dental, so people get help before they reach a breaking point. When firearms are properly secured and healthcare remains accessible to everyone without financial burden, communities are safer and responsible gun owners aren\u2019t punished.",
  },
  {
    topic: 'Public Lands',
    q: 'Do you support the roadless rule?',
    a: "Yes. I support the roadless rule because it protects Montana\u2019s water, wildlife, and outdoor economy from being sold off to special interests. This comes back to corruption and money in politics, when donors and corporations get a say, public lands lose. Ryan Zinke and the current administration talks like public-lands champions, but their record shows they side with donors and rollbacks, not long-term protection for Montanans or our wild places.",
  },
  {
    topic: 'Public Lands',
    q: 'Do you support the sale of public lands?',
    a: "No. Selling public lands creates permanent damage and hands Montana\u2019s incredible lands over to corporations.",
  },
  {
    topic: 'Immigration',
    q: 'Immigration and ICE?',
    a: "Today in our country, federal overreach is out of control. Our immigration system needs a full restructuring. I support ending ICE, as well as post 9/11 legislation that has fueled this federal overreach and fear. We must focus instead on improving an antiquated immigration application process to speed up the processing timeline, while still enforcing our immigration laws by directing resources to properly fund state and local law enforcement. That approach restores accountability, fixes broken processing, and allows enforcement to happen responsibly without violating civil rights or states\u2019 authority. We can achieve both firm border control and improve immigrant processing by electing leaders like Russ, who are focused on solutions, not racist slander and fear mongering.",
  },
  {
    topic: 'Foreign Policy',
    q: 'What do you want to see happen in Palestine?',
    a: "Protect human rights! That means reject genocide, reject war crimes, and reject the killing of innocent civilians.",
  },
  {
    topic: 'Montana First',
    q: 'What is your position on data centers and AI?',
    a: "The issue with Artificial Intelligence (AI) and data centers isn\u2019t technology, it\u2019s who controls the decisions and how is our privacy protected. I support ending an AI moratorium to pause development of data centers until guard rails are established that protect Montanans' privacy, water, and energy.",
  },
  {
    topic: 'Leadership',
    q: 'What differentiates you from other candidates?',
    a: "I offer a different kind of leadership. One grounded in real Montana life, not politics as usual. My campaign isn\u2019t guided or funded by D.C. consultants, lobbyists, or dark money groups, which means I\u2019m not boxed in or defined by anyone else\u2019s agenda. My experience spans military service in the U.S. Navy, finance, small business, agriculture, childcare, and healthcare. That lived experience shapes how I approach affordability, accountability, and getting real results for Montanans.",
  },
  {
    topic: 'Climate',
    q: 'Climate crisis and a livable future for young people?',
    a: "The climate crisis keeps getting worse because polluters are still writing the rules, and politicians like Ryan Zinke keep choosing donors and corporations over Montana communities. Our state constitution guarantees Montanans the right to a clean and healthful environment, yet Federal agencies keep fast-tracking projects like the Sheep Creek mine by cutting out local input and putting our land, water, agriculture, and way of life at risk. Real solutions start with getting money out of politics and diversifying our energy sources so we build modern infrastructure and good-paying jobs young Montanans can build a future on right here at home.",
  },
  {
    topic: 'Education',
    q: 'Do you support federal action for student loan forgiveness?',
    a: "Yes. Student debt is a major driver of the affordability crisis, and it\u2019s punishing people for trying to get an education while dragging down the economy. As a starter, student loans should be zero interest and existing debt needs real reduction, but forgiveness alone won\u2019t solve the problem if we don\u2019t fix how education is funded and how wages keep up. That\u2019s why I support reworking the pipeline so the last two years of high school count toward college or the trades, letting students graduate with real credentials and a path to a good-paying job, not lifelong debt.",
  },
  {
    topic: 'Education',
    q: 'Do you support school choice?',
    a: "No. I support strong public education, as guaranteed in the 1972 Montana State Constitution.",
  },
  {
    topic: 'Agriculture',
    q: 'Federal trade policies\u2019 effect on Montana agriculture?',
    a: "Federal trade policy hits Montana agriculture where it hurts. I see it on my own ranch in Saint Regis through higher input costs, expensive equipment, and unstable markets. When tariffs are used as a political weapon, family farmers and ranchers pay the price while D.C. insiders don\u2019t. We need fair trade policies that cut red tape, keep lobbyists out of the room, and let Montana producers compete without taxpayers cleaning up Washington\u2019s mistakes.",
  },
  {
    topic: 'Young Montanans',
    q: 'How will you help graduates stay in Montana?',
    a: "Young people aren\u2019t leaving Montana because they want to. They\u2019re being pushed out by bad policies that hold wages down while housing, groceries, and childcare keep climbing. Keeping graduates here means fixing the full pipeline: reducing lifelong student debt, making sure workers see the raises instead of all the money going to executives (50:1 pay cap for executives), and lowering costs through affordable housing, Medicare for All, and Universal childcare. I\u2019ve worked on these problems in real life, not theory, and I\u2019m committed to making Montana a place where young people can build a future, not feel forced to leave.",
  },
  {
    topic: 'Affordability',
    q: 'How will you fix the housing crisis from the federal level?',
    a: "We won\u2019t fix the housing crisis unless we deal with what\u2019s really driving it: wages that haven\u2019t kept up and a system rigged for corporations and Wall Street. At the federal level, I will fight to raise wages by closing extreme pay gaps, direct federal housing dollars toward workforce and affordable housing instead of luxury units, and stop corporate investors from treating residential homes like a Wall Street investment. This is about affordability and corruption. Housing should work for people who live and work here, not special interests cashing in.",
  },
  {
    topic: 'Democracy',
    q: 'Should we return to normal after the Trump administration?',
    a: "Our goal should not be \u201cget back to normal\u201d because normal gave us corruption, endless wars, and a system rigged for the wealthy. The way forward is ending corruption, getting money out of politics, and returning power to the people so government works for families again. This race is about choosing whether we repeat the same mistakes or finally break from \u201cbought and paid for\u201d politics and finally build something better for both our current and our future generations.",
  },
]

export const metadata = {
  title: 'Ask Russ — Answers from the candidate',
  description:
    "Russ Cleveland\u2019s answers on healthcare, public lands, housing, corruption, immigration, climate, and more \u2014 on the record.",
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
                Real questions from Montanans. Real answers from Russ &mdash; verbatim. Nothing
                massaged, nothing poll-tested. If you don&rsquo;t see your question, submit it
                below.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <ol className="flex flex-col divide-y divide-bone-200 border-t border-bone-200">
              {TOPICS.map((item, i) => (
                <li key={item.q} className="grid grid-cols-12 gap-4 tablet:gap-10 py-12 md:py-16">
                  <div className="col-span-12 tablet:col-span-3 flex flex-col gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                      {String(i + 1).padStart(2, '0')} · {item.topic}
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

            <form
              className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
              action="/api/ask"
              method="post"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ask-name"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Your name
                </label>
                <input
                  id="ask-name"
                  name="fullName"
                  type="text"
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ask-county"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  County
                </label>
                <input
                  id="ask-county"
                  name="county"
                  type="text"
                  placeholder="Ravalli, Missoula, Mineral&hellip;"
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="ask-email"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Email (so we can follow up)
                </label>
                <input
                  id="ask-email"
                  name="email"
                  type="email"
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] text-ink-900 focus:outline-none focus:border-ochre-500"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="ask-question"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
                >
                  Your question
                </label>
                <textarea
                  id="ask-question"
                  name="question"
                  rows={6}
                  required
                  className="bg-paper border border-bone-200 rounded-[4px] px-4 py-[14px] font-body text-[15px] leading-[1.6] text-ink-900 focus:outline-none focus:border-ochre-500 resize-vertical"
                />
              </div>
              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 border-[1.5px] border-ink-900 px-8 py-4 font-body font-semibold text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ochre-500 hover:border-ochre-500 hover:text-ink-900 w-fit"
              >
                Submit question
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400 max-w-[64ch]">
              Answers above are transcribed verbatim from the candidate&rsquo;s platform FAQ at
              russellcleveland.org &middot; Updated continuously as new answers are recorded
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default AskPage
