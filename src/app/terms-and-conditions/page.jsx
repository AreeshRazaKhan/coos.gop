import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: 'Terms & Conditions · Coos County Republicans',
  description:
    'Terms and conditions for text messaging and communications from Coos County Republicans.',
}

const OPTING_IN_ITEMS = [
  'You authorize Sender to use auto-dialer or non-auto-dialer technology to call or text the wireless or landline phone number you provided when opting in. You acknowledge and agree that the calls and text messages may be made or sent by Sender or by third parties on Sender’s behalf for purposes including but not limited to providing campaign updates, event invitations, fundraising appeals, volunteer opportunities, voter registration reminders, and other related campaign communications. You acknowledge that consenting to receive such calls or messages is not required to make a donation, volunteer, or otherwise support Sender, and you do not have to opt in as a condition of any contribution or participation.',
  'You confirm that you are the subscriber to the relevant phone number, or that you are the customary user of that number on a family or business plan, and that you are authorized to opt in on behalf of that number.',
  'You consent to the use of an electronic record to document your opt-in.',
  'You agree that, in addition to the main messages Sender may provide, you may receive one or more welcome messages or administrative messages, such as a request to confirm your opt-in or a periodic check on your contact preferences.',
]

const OPTING_OUT_ITEMS = [
  'Message and data rates may apply. You must have a wireless device of your own that is capable of two-way messaging, you must be using a participating wireless carrier, and you must be a wireless service subscriber with text messaging service. Not all cellular phone providers carry the necessary service to participate. Check your phone capabilities and your carrier’s specific text messaging instructions and pricing before opting in.',
  'Unless otherwise noted, Sender may send multiple recurring messages, and message frequency may vary. Frequency typically increases around election deadlines, fundraising drives, candidate forums, and major events. Sender reserves the right to terminate, suspend, or modify the text message service at any time without notice. You may opt out of receiving messages at any time by replying STOP to any message you receive. Your opt-out request will generate a confirmation text acknowledging that you have been removed from the list.',
  'You consent to the handling of your information as described in our Privacy Policy at www.coos.gop/privacy-policy. For help with any message, reply HELP or email party@coos.gop.',
  'You may text STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to opt out of all messages from Sender at any time. You may also opt out by emailing party@coos.gop with a clear request to be removed. After opting out, you may receive a final confirmation text acknowledging your opt-out and confirming that no further messages will be sent. You may opt back in at any time by texting START or by re-submitting any opt-in form on the Platform. These Terms & Conditions still will apply to your use of any other Sender services even if you have withdrawn the consent described above for text messaging specifically.',
  'To request a free paper or email copy of this opt-in agreement, to update our records with your current contact information, or to receive help with any messages you have received, please contact Sender at party@coos.gop. Minimum technology requirements may apply for electronic records.',
  'You may not use or engage with the Platform if you are under thirteen years of age. If you are between thirteen and the age of majority in your jurisdiction, you may use the Platform only with the involvement of a parent or legal guardian who has reviewed and accepted these Terms & Conditions on your behalf. By using the Platform, you represent that you are old enough and otherwise legally permitted by your jurisdiction’s applicable laws, rules, and regulations to use and engage with the Platform, to consent to the collection and use of your information as described, and to enter into these Terms & Conditions on your own behalf or with appropriate parental or guardian involvement.',
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
                Legal
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,8vw,6.5rem)]">
                Terms &amp;{' '}
                <em className="font-italic not-italic text-ochre-600">Conditions</em>.
              </h1>
              <p className="mt-8 max-w-[60ch] font-display text-lg md:text-xl font-normal leading-[1.45] text-stone-600">
                Coos County Republicans · 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <aside className="max-w-[72ch] rounded-[4px] border border-bone-200 bg-white p-8 lg:p-10 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500">
              <p className="font-display text-lg md:text-xl leading-[1.5] text-ink-900 max-w-[68ch] font-semibold">
                PRIVACY POLICY: No mobile information will be shared by us with third parties or
                affiliates for marketing or promotional purposes. All categories above exclude
                text messaging originator opt-in data and consent. This information will not be
                shared with any third parties under any circumstances. SMS opt-in is never sold,
                traded, or transferred.
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
                from Coos County Republicans through the messaging platform of www.coos.gop
                (&ldquo;Platform&rdquo;), you accept these Terms &amp; Conditions
                (&ldquo;Opt-In&rdquo;) and the linked Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16">
            <header className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                01
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
                02
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
              <p>&copy; 2026 Coos County Republicans. All Rights Reserved.</p>
              <p>
                Paid for by Coos County Republican Central Committee · Oregon PAC #300
              </p>
              <p className="mt-2">PO Box 914</p>
              <p>Coos Bay, OR 97420</p>
              <p>party@coos.gop</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsAndConditionsPage
