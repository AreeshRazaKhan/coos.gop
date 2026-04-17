const CREDENTIALS = [
  'U.S. Navy Veteran',
  'Father of Seven',
  'Saint Regis, MT',
  'No Corporate PAC',
  'FEC ID C00902395',
]

const CredentialStrip = () => {
  return (
    <div className="bg-ink-800 border-y border-ink-700 text-moonlight">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 py-5 md:py-7">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-between gap-x-6 gap-y-3 md:gap-x-10 font-mono text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-moonlight/75">
          {CREDENTIALS.map((item, i) => (
            <li key={item} className="flex items-center gap-2 md:gap-3">
              {i === 0 ? null : (
                <span className="hidden md:inline text-ochre-500" aria-hidden="true">
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
