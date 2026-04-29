const CREDENTIALS = [
  'Republican Committee',
  'Locally Funded',
  'Volunteer Powered',
  'Constitution First',
  'Oregon PAC #300',
]

const CredentialStrip = () => {
  return (
    <div className="bg-ink-800 border-y border-ink-700 text-moonlight">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 py-5 md:py-7">
        <ul className="grid grid-cols-2 sm:grid-cols-3 tablet:flex tablet:flex-wrap tablet:items-center tablet:justify-between gap-x-6 gap-y-3 tablet:gap-x-10 font-mono text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/75">
          {CREDENTIALS.map((item, i) => (
            <li key={item} className="flex items-center gap-2 tablet:gap-3">
              {i === 0 ? null : (
                <span className="hidden tablet:inline text-ochre-500" aria-hidden="true">
                  ✦
                </span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CredentialStrip
