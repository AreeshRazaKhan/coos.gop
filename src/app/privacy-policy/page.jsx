import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: "Privacy Policy — Russ Cleveland for Congress '26",
  description:
    'How Cleveland for Congress collects, uses, and safeguards personal information from visitors and supporters.',
}

const INFORMATION_WE_COLLECT = [
  {
    label: 'Contact Information',
    body: 'Name, email address, phone number, and mailing address you voluntarily provide through forms on our website.',
  },
  {
    label: 'Volunteer Preferences',
    body: "Information about how you'd like to support the campaign.",
  },
  {
    label: 'Donation Information',
    body: 'Records of donations made through third-party payment platforms (ActBlue). We do not directly process or store payment card information.',
  },
  {
    label: 'Usage Data',
    body: 'Non-personal information such as browser type, device type, pages visited, and time spent on our site, collected through standard analytics tools.',
  },
]

const HOW_WE_USE = [
  'To communicate with you about campaign news, events, and volunteer opportunities.',
  'To send you text messages and calls if you have opted in to receive them.',
  'To process and acknowledge donations.',
  'To comply with applicable campaign finance reporting requirements.',
  'To improve our website and campaign outreach efforts.',
]

const YOUR_RIGHTS = [
  'Request access to the personal information we hold about you.',
  'Request correction or deletion of your personal information.',
  'Opt out of receiving communications at any time by contacting us or replying STOP to text messages.',
]

const PrivacyPolicyPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-paper text-ink-900">
        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-32 tablet:grid-cols-12 lg:px-16 lg:py-36">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; Legal
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,8vw,6.5rem)]">
                Privacy{' '}
                <em className="font-italic not-italic text-ochre-600">Policy</em>.
              </h1>
              <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                Last Updated &middot; April 23, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="max-w-[72ch]">
              <p className="text-base md:text-[17px] leading-[1.75] text-ash">
                Cleveland for Congress (&ldquo;the Campaign,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
                privacy. This Privacy Policy describes how we collect, use, and safeguard
                your personal information when you visit our website or interact with our
                campaign.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; I
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Information we{' '}
                <em className="font-italic not-italic text-ochre-600">collect</em>.
              </h2>
            </header>
            <ul className="tablet:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {INFORMATION_WE_COLLECT.map((item) => (
                <li key={item.label} className="py-6 flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                    &mdash; {item.label}
                  </span>
                  <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; II
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                How we{' '}
                <em className="font-italic not-italic text-ochre-600">use</em> your
                information.
              </h2>
            </header>
            <ul className="tablet:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {HOW_WE_USE.map((item, i) => (
                <li key={i} className="py-6 flex items-start gap-6">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-600 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; III
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Text messaging &amp;{' '}
                <em className="font-italic not-italic text-ochre-600">TCPA consent</em>.
              </h2>
            </header>
            <div className="tablet:col-span-8">
              <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                By providing your phone number and checking the consent box on our forms,
                you expressly consent to receive recurring autodialed or prerecorded calls
                and text messages from Cleveland for Congress at the phone number you
                provided. Message and data rates may apply. Message frequency varies. You
                may opt out at any time by replying STOP to any message. Consent is not a
                condition of any purchase, donation, or volunteering.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; IV
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Information{' '}
                <em className="font-italic not-italic text-ochre-600">sharing</em>.
              </h2>
            </header>
            <div className="tablet:col-span-8 flex flex-col gap-6 max-w-[72ch]">
              <p className="text-base md:text-[17px] leading-[1.7] text-ash">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
              <p className="text-base md:text-[17px] leading-[1.7] text-ash">
                <strong className="font-semibold">
                  Text Messaging Opt-In Data:
                </strong>{' '}
                We will not share or sell your text messaging opt-in data, consent, or
                related personal information with any third parties, unless required by law.
              </p>
              <p className="text-base md:text-[17px] leading-[1.7] text-ash">
                We may share your information with trusted service providers who assist us
                in operating our website and conducting campaign activities, subject to
                confidentiality obligations. We may also disclose information as required
                by law, including campaign finance disclosure requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; V
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Data{' '}
                <em className="font-italic not-italic text-ochre-600">security</em>.
              </h2>
            </header>
            <div className="tablet:col-span-8">
              <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                We implement reasonable administrative, technical, and physical safeguards
                to protect your personal information. However, no method of transmission
                over the Internet or electronic storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; VI
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Your{' '}
                <em className="font-italic not-italic text-ochre-600">rights</em>.
              </h2>
            </header>
            <div className="tablet:col-span-8 flex flex-col gap-6">
              <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                You have the right to:
              </p>
              <ul className="flex flex-col divide-y divide-bone-200 border-y border-bone-200">
                {YOUR_RIGHTS.map((item, i) => (
                  <li key={i} className="py-6 flex items-start gap-6">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-600 w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[72ch]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; VII
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Contact{' '}
                <em className="font-italic not-italic text-ochre-600">us</em>.
              </h2>
            </header>
            <div className="tablet:col-span-8 flex flex-col gap-6 max-w-[72ch]">
              <p className="text-base md:text-[17px] leading-[1.7] text-ash">
                If you have questions about this Privacy Policy or your personal
                information, please contact us at:
              </p>
              <address className="not-italic flex flex-col gap-1 font-mono text-[13px] leading-[1.7] text-ink-900">
                <span className="font-display text-lg font-semibold leading-tight">
                  Cleveland for Congress
                </span>
                <span>P.O. Box 691</span>
                <span>Saint Regis, MT 59866</span>
                <a
                  href="mailto:connect@russellcleveland.org"
                  className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
                >
                  connect@russellcleveland.org
                </a>
              </address>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default PrivacyPolicyPage
