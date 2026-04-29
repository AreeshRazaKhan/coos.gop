import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: 'Terms of Services · Coos County Republican Central Committee',
  description:
    'Terms of Services governing your use of coos.gop, operated by Coos County Republican Central Committee.',
}

const USE_RESTRICTIONS = [
  'Use the Website in any manner that could damage, disable, overburden, or impair the Website or interfere with any other party’s use of the Website.',
  'Attempt to gain unauthorized access to any portion of the Website, other accounts, computer systems, or networks connected to the Website.',
  'Use any automated means, including bots, scrapers, or spiders, to access the Website or collect information from it without our prior written consent.',
  'Use the Website to transmit any material that is unlawful, threatening, abusive, harassing, defamatory, or otherwise objectionable.',
  'Reproduce, distribute, modify, or create derivative works of the Website content without our prior written consent.',
  'Misrepresent your identity or affiliation with any person or entity.',
  'Use the Website in any manner that violates any applicable federal, state, or local law or regulation.',
]

const VOLUNTEER_ACKNOWLEDGEMENTS = [
  'The information you provide is accurate and complete.',
  'We may use your information to contact you about volunteer opportunities, committee events, and committee updates.',
  'Your information will be handled in accordance with our Privacy Policy.',
]

const DONATION_ACKNOWLEDGEMENTS = [
  'All donations are processed entirely by the applicable third-party payment platform and are subject to that platform’s terms of service and privacy policy. The Committee does not directly process or store any payment card or bank account information.',
  'Donations to the Committee are subject to applicable Oregon campaign finance laws administered by the Oregon Secretary of State, including reporting requirements that may publicly disclose contributor names and addresses above statutory thresholds.',
  'You are making your donation voluntarily and in compliance with all applicable federal, state, and local campaign contribution laws and limits.',
  'Political donations are generally non-refundable. If you have questions or concerns about a donation, please contact us.',
]

const SMS_TYPES = [
  {
    label: 'Committee Communications',
    body: 'Committee updates, volunteer coordination, event notifications, get-out-the-vote reminders, and responses to inquiries.',
  },
  {
    label: 'Promotional Messages',
    body: 'Fundraising appeals, donation requests, and committee calls to action (requires separate opt-in consent).',
  },
]

const SMS_KEY_TERMS = [
  'Message frequency varies based on committee activity but typically ranges from 1 to 4 messages per week.',
  'Message and data rates may apply depending on your mobile carrier plan.',
  'You may opt out at any time by replying STOP to any message.',
  'For assistance, reply HELP or contact us at chris.castleman@coos.gop or call +1 541-982-6793.',
  'Consent to receive SMS messages is not a condition of any purchase, donation, or volunteering.',
  'Coos County Republican Central Committee does not sell or share mobile information or opt-in consent data with third parties for marketing or promotional purposes.',
]

const NumberedList = ({ items }) => (
  <ul className="flex flex-col divide-y divide-bone-200 border-y border-bone-200">
    {items.map((item, i) => (
      <li key={i} className="py-5 flex items-start gap-6">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-600 w-8 shrink-0">
          {String(i + 1).padStart(2, '0')}
        </span>
        <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[68ch]">
          {item}
        </p>
      </li>
    ))}
  </ul>
)

const Section = ({ romanNumeral, title, accent, children }) => (
  <section className="border-b border-bone-200">
    <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <span className="block font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
        {romanNumeral}
      </span>
      <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-12">
        <header className="tablet:col-span-4">
          <h2 className="font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
            {title ? `${title} ` : ''}
            <em className="font-italic not-italic text-ochre-600">{accent}</em>.
          </h2>
        </header>
        <div className="tablet:col-span-8 flex flex-col gap-6 max-w-[72ch]">{children}</div>
      </div>
    </div>
  </section>
)

const Para = ({ children }) => (
  <p className="text-base md:text-[17px] leading-[1.7] text-ash">{children}</p>
)

const TermsOfServicesPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-paper text-ink-900">
        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-24 tablet:grid-cols-12 lg:px-16 lg:py-28">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Legal
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.25rem,6vw,5rem)]">
                Terms of{' '}
                <em className="font-italic not-italic text-ochre-600">Services</em>.
              </h1>
              <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                Last Updated · April 30, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="max-w-[72ch]">
              <p className="text-base md:text-[17px] leading-[1.75] text-ash">
                These Terms of Services (&ldquo;Agreement&rdquo;) set forth the legally
                binding terms governing your access to and use of the Coos County Republican
                Central Committee website located at coos.gop (&ldquo;the
                Website&rdquo;), operated by Coos County Republican Central Committee
                (&ldquo;the Committee,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). By accessing or using the Website, you (&ldquo;you&rdquo;
                or &ldquo;User&rdquo;) agree to be bound by this Agreement. If you do not
                agree to these terms, please do not use the Website.
              </p>
            </div>
          </div>
        </section>

        <Section romanNumeral="I" title="About the" accent="Website">
          <Para>
            The Website is the official website of Coos County Republican Central Committee
           , the grassroots Republican party committee for Coos County, Oregon
            (Oregon PAC #300). The Website provides committee information, volunteer sign-up
            opportunities, donation instructions, and committee updates. The Website does not
            sell products or services, does not offer memberships or subscriptions, and does
            not process payments directly.
          </Para>
        </Section>

        <Section romanNumeral="II" title="Use of the" accent="Website">
          <Para>
            You agree to use the Website only for lawful purposes and in accordance with this
            Agreement. You agree not to:
          </Para>
          <NumberedList items={USE_RESTRICTIONS} />
        </Section>

        <Section romanNumeral="III" title="Volunteer" accent="Information">
          <Para>
            When you submit information through the &ldquo;Get Involved&rdquo; form or other
            forms on the Website, you are voluntarily providing your personal information to
            assist with the Committee. By submitting a volunteer form, you acknowledge that:
          </Para>
          <NumberedList items={VOLUNTEER_ACKNOWLEDGEMENTS} />
        </Section>

        <Section romanNumeral="IV" title="" accent="Donations">
          <Para>
            The Committee accepts donations through third-party payment platforms, including
            Anedot, as well as by check mailed to the Committee&rsquo;s mailing address. By
            making a donation, you acknowledge and agree that:
          </Para>
          <NumberedList items={DONATION_ACKNOWLEDGEMENTS} />
        </Section>

        <Section romanNumeral="V" title="SMS and Text Message" accent="Communications">
          <Para>
            Coos County Republican Central Committee offers an SMS messaging
            program for individuals who voluntarily opt in to receive text messages. End
            users provide consent by selecting an optional, unchecked SMS consent checkbox on
            the forms located at coos.gop. Providing a phone number alone does not constitute
            consent &mdash; you must actively select the SMS opt-in checkbox to receive text
            messages. Carriers are not liable for delayed or undelivered messages. You must
            be 18 years of age or older to use this SMS service.
          </Para>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass mt-2">
            Types of Messages
          </p>
          <ul className="flex flex-col divide-y divide-bone-200 border-y border-bone-200">
            {SMS_TYPES.map((item) => (
              <li key={item.label} className="py-5 flex flex-col gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                  {item.label}
                </span>
                <p className="text-base md:text-[17px] leading-[1.7] text-ash max-w-[68ch]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass mt-4">
            Key Terms
          </p>
          <NumberedList items={SMS_KEY_TERMS} />
          <Para>
            <strong className="font-semibold">Text Messaging Opt-In Data:</strong> We will
            not share or sell your text messaging opt-in data, consent, or related personal
            information with any third parties, unless required by law.
          </Para>
        </Section>

        <Section romanNumeral="VI" title="Intellectual" accent="Property">
          <Para>
            All content on the Website, including but not limited to text, graphics,
            photographs, logos, committee materials, and the overall design and layout of the
            Website (&ldquo;Committee Content&rdquo;), is the property of Coos County
            Republican Central Committee or its licensors and is protected by
            applicable copyright, trademark, and other intellectual property laws.
          </Para>
          <Para>
            You may share Committee Content on social media or other platforms for the
            purpose of supporting or discussing the Committee, provided that you do not alter
            the content or remove any attribution. Any other reproduction, distribution,
            modification, or use of Committee Content without our prior written consent is
            prohibited.
          </Para>
        </Section>

        <Section romanNumeral="VII" title="Google" accent="reCAPTCHA">
          <Para>
            This Website uses Google reCAPTCHA to protect forms from spam and abuse. By using
            our forms, you acknowledge that your use of reCAPTCHA is subject to
            Google&rsquo;s Privacy Policy and Terms of Service.
          </Para>
        </Section>

        <Section romanNumeral="VIII" title="" accent="Disclaimer">
          <Para>
            The Website is provided for informational and committee purposes only. Coos
            County Republican Central Committee makes no representations or
            warranties of any kind, express or implied, regarding the operation of the
            Website or the accuracy, completeness, or reliability of any information on the
            Website.
          </Para>
          <Para>
            THE WEBSITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT ANY WARRANTY OF ANY KIND, INCLUDING BUT NOT LIMITED TO
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. COOS COUNTY REPUBLICAN CENTRAL COMMITTEE DOES NOT
            WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS.
          </Para>
          <Para>
            The Committee makes no guarantees or predictions regarding the outcome of any
            election.
          </Para>
        </Section>

        <Section romanNumeral="IX" title="Limitation of" accent="Liability">
          <Para>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COOS COUNTY REPUBLICAN CENTRAL
            COMMITTEE, ITS OFFICERS, VOLUNTEERS, AGENTS, AND AFFILIATES SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE WEBSITE,
            EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </Para>
          <Para>
            IN NO EVENT SHALL COOS COUNTY REPUBLICAN CENTRAL COMMITTEE&rsquo;S
            TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE WEBSITE OR
            THIS AGREEMENT EXCEED ONE HUNDRED DOLLARS ($100.00).
          </Para>
        </Section>

        <Section romanNumeral="X" title="" accent="Indemnification">
          <Para>
            You agree to indemnify and hold harmless Coos County Republican Central Committee
           , its officers, volunteers, agents, and affiliates from any claims,
            liabilities, damages, losses, costs, or expenses (including reasonable
            attorneys&rsquo; fees) arising out of or related to: (a) your use of the Website;
            (b) your violation of this Agreement; (c) your violation of any applicable law or
            the rights of any third party; or (d) any content you submit or transmit through
            the Website.
          </Para>
        </Section>

        <Section romanNumeral="XI" title="Third-Party Links and" accent="Services">
          <Para>
            The Website may contain links to third-party websites or services, including but
            not limited to payment platforms (Anedot), social media platforms (Facebook, X),
            and government websites. These links are provided for your convenience only. Coos
            County Republican Central Committee does not control, endorse, or
            assume responsibility for the content, privacy policies, or practices of any
            third-party websites or services. Your use of third-party websites is at your
            own risk and subject to their respective terms and conditions.
          </Para>
        </Section>

        <Section romanNumeral="XII" title="Modifications to This" accent="Agreement">
          <Para>
            Coos County Republican Central Committee may modify this Agreement
            from time to time. When we make changes, we will update the &ldquo;Last
            Updated&rdquo; date at the top of this page. Your continued use of the Website
            after any modification constitutes your acceptance of the revised Agreement. We
            encourage you to review this Agreement periodically.
          </Para>
        </Section>

        <Section romanNumeral="XIII" title="Governing" accent="Law">
          <Para>
            This Agreement shall be governed by and construed in accordance with the laws of
            the State of Oregon, without regard to its conflict of law provisions.
          </Para>
        </Section>

        <Section romanNumeral="XIV" title="Dispute" accent="Resolution">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
            Informal Resolution
          </p>
          <Para>
            Any dispute arising under or in connection with this Agreement will initially be
            addressed through good-faith negotiation between the parties. If the dispute
            cannot be resolved informally within thirty (30) days, either party may proceed
            to binding arbitration as described below.
          </Para>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass mt-2">
            Binding Arbitration
          </p>
          <Para>
            Any claim, dispute, or controversy arising from or relating to this Agreement or
            the Website shall be resolved exclusively by binding arbitration administered by
            the American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial
            Arbitration Rules in effect at the time the claim is filed. The arbitration
            shall be conducted before a single arbitrator and shall take place in Coos
            County, Oregon. The arbitrator&rsquo;s decision shall be final and binding, and
            judgment may be entered in any court of competent jurisdiction.
          </Para>
          <Para>
            Claims shall be brought on an individual basis only. You agree to waive any right
            to participate in a class action, collective action, or representative
            proceeding.
          </Para>
          <Para>
            PLEASE READ THIS SECTION CAREFULLY. BY AGREEING TO ARBITRATION, YOU AND COOS
            COUNTY REPUBLICAN CENTRAL COMMITTEE ARE EACH WAIVING THE RIGHT TO A
            TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION.
          </Para>
          <Para>
            If either party prevails in arbitration, the non-prevailing party shall reimburse
            the prevailing party&rsquo;s AAA fees and reasonable attorneys&rsquo; fees
            incurred in the arbitration.
          </Para>
        </Section>

        <Section romanNumeral="XV" title="" accent="Severability">
          <Para>
            If any provision of this Agreement is held to be unenforceable by a court or
            tribunal of competent jurisdiction, that provision shall be enforced to the
            maximum extent permissible under applicable law, and the remaining provisions
            shall continue in full force and effect.
          </Para>
        </Section>

        <Section romanNumeral="XVI" title="" accent="Waiver">
          <Para>
            No failure by either party to exercise or enforce any right under this Agreement
            shall constitute a waiver of that right or of any subsequent breach.
          </Para>
        </Section>

        <Section romanNumeral="XVII" title="Entire" accent="Agreement">
          <Para>
            This Agreement, together with the Privacy Policy, represents the entire
            understanding between you and Coos County Republican Central Committee
            relating to the Website. This Agreement supersedes any prior or
            contemporaneous communications, whether oral or written, regarding the subject
            matter herein.
          </Para>
        </Section>

        <section>
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <span className="block font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              XVIII
            </span>
            <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-12">
              <header className="tablet:col-span-4">
                <h2 className="font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                  Contact{' '}
                  <em className="font-italic not-italic text-ochre-600">us</em>.
                </h2>
              </header>
              <div className="tablet:col-span-8 flex flex-col gap-6 max-w-[72ch]">
                <Para>
                  Questions about these Terms of Services? Reach the Committee at:
                </Para>
                <address className="not-italic flex flex-col gap-1 font-mono text-[13px] leading-[1.7] text-ink-900">
                  <span className="font-display text-lg font-semibold leading-tight">
                    Coos County Republican Central Committee
                  </span>
                  <span>PO Box 914</span>
                  <span>Coos Bay, OR 97420</span>
                  <a
                    href="mailto:chris.castleman@coos.gop"
                    className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
                  >
                    chris.castleman@coos.gop
                  </a>
                  <a
                    href="tel:+15419826793"
                    className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
                  >
                    +1 541-982-6793
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsOfServicesPage
