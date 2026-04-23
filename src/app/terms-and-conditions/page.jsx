import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: "Terms & Conditions — Russ Cleveland for Congress '26",
  description:
    'Terms and conditions for text messaging and communications from the Cleveland for Congress campaign.',
}

const OPTING_IN_ITEMS = [
  "You authorize Sender to use auto dialer or non-auto dialer technology to send text messages to the cell phone number associated with your Opt-In (i.e., the number listed on the Opt-In form or instructions, or, if none, the number from which you send the Opt-In, or, if none, the number on file for the account associated with your Opt-In). You also authorize Sender to include marketing content in any such messages. You do not have to Opt-In or agree to Opt-In as a condition of purchase of any of Sender's offerings.",
  'You confirm that you are the subscriber to the relevant phone number or that you are the customary user of that number on a family or business plan and that you are authorized to Opt-In.',
  'You consent to the use of an electronic record to document your Opt-In.',
  'You agree that, in addition to the main messages that Sender may provide, you may receive one or more welcome messages or administrative messages, such as (in some cases) a request to confirm your Opt-In.',
]

const OPTING_OUT_ITEMS = [
  'Message and data rates may apply. You must have a wireless device of your own, capable of two-way messaging, be using a participating wireless carrier, and be a wireless service subscriber with text messaging service. Not all cellular phone providers carry the necessary service to participate. Check your phone capabilities for specific text messaging instructions.',
  'Unless otherwise noted, Sender may send multiple, recurring messages and frequency may vary. Sender may terminate any messaging services or your participation in it at any time with or without notice, including, for example, before you have received any or all messages that you otherwise would have received, but these Terms & Conditions still will apply. Your opt-out request will generate a confirmation text.',
  'You consent to the handling of your information as described in our Privacy Policy [LINK]. To contact Sender customer service, at [CONTACT].',
  'You may text STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to opt-out of messages or for additional help, text HELP. You also understand and agree that any other method of opting out, including, but not limited to, texting words other than those set forth above or verbally requesting one of our employees to remove you from our list, is not a reasonable means of opting out. You may receive an additional mobile message confirming your decision to opt out. These Terms & Conditions still will apply if you withdraw the consent mentioned above.',
  'To request a free paper or email copy of the Opt-In, or to update our records with your contact information, or receive help with any messages, please contact us at [CONTACT]. Minimum technology requirements may apply for electronic records.',
  "You may not use or engage with the Platform if you are under thirteen (13) years of age. If you use or engage with the Platform and are between the ages of thirteen (13) and eighteen (18) years of age, you must have your parent's or legal guardian's permission to do so. By using or engaging with the Platform, you acknowledge and agree that you are not under the age of thirteen (13) years, are between the ages of thirteen (13) and eighteen (18) and have your parent's or legal guardian's permission to use or engage with the Platform, or are of adult age in your jurisdiction. By using or engaging with the Platform, you also acknowledge and agree that you are permitted by your jurisdiction's applicable laws, rules, and regulations to use and/or engage with the Platform.",
]

const TermsAndConditionsPage = () => {
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
                Terms &amp;{' '}
                <em className="font-italic not-italic text-ochre-600">Conditions</em>.
              </h1>
              <p className="mt-8 max-w-[60ch] font-display text-lg md:text-xl font-normal leading-[1.45] text-stone-600">
                Russ Cleveland for Congress &rsquo;26.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <aside className="max-w-[72ch] rounded-[4px] border border-bone-200 bg-white p-8 lg:p-10 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500">
              <p className="font-display text-lg md:text-xl leading-[1.5] text-ink-900 max-w-[68ch] font-semibold">
                PRIVACY POLICY: No mobile information will be shared by us with third
                parties/affiliates for marketing/promotional purposes. All the above
                categories exclude text messaging originator opt-in data and consent;
                this information will not be shared with any third parties.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="max-w-[72ch]">
              <p className="text-base md:text-[17px] leading-[1.75] text-ink-900 font-semibold">
                By requesting, joining, agreeing to, enrolling in, signing up for,
                acknowledging, or otherwise consenting to receive one or more text messages
                from Cleveland for U.S. Congress through messaging platform of
                www.russcleveland.org (&ldquo;Platform&rdquo;), you accept these Terms
                &amp; Conditions (&ldquo;Opt-In&rdquo;).
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                &mdash; 01
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Opting{' '}
                <em className="font-italic not-italic text-ochre-600">In</em>.
              </h2>
            </header>
            <ul className="tablet:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {OPTING_IN_ITEMS.map((item, i) => (
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
                &mdash; 02
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                About the Text Message Services and{' '}
                <em className="font-italic not-italic text-ochre-600">Opting Out</em>.
              </h2>
            </header>
            <ul className="tablet:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {OPTING_OUT_ITEMS.map((item, i) => (
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

        <section>
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="max-w-[72ch] flex flex-col gap-2 font-mono text-[12px] leading-[1.7] text-stone-600">
              <p>&copy; 2026 Cleveland for Congress &rsquo;26. All Rights Reserved</p>
              <p>Paid for by Cleveland for Congress, ID C00902395</p>
              <p className="mt-2">P.O. Box 691</p>
              <p>Saint Regis, MT 59866</p>
              <p>connect@russellcleveland.org</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsAndConditionsPage
