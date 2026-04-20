const MARQUEE_CONTENT = (
  <>
    The Montana Way <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    <em className="font-italic italic">Independent Spirit, Democratic Values</em>
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    Not Bought. Not Backing Down.
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    No Corporate PAC · No AIPAC
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
  </>
)

const Marquee = () => {
  return (
    <div
      className="overflow-hidden bg-ink-900 text-moonlight py-8 border-y border-ink-700"
      aria-label="Campaign themes"
    >
      <div className="marquee-track flex whitespace-nowrap font-display text-4xl tablet:text-5xl lg:text-6xl font-black tracking-[-0.02em]">
        <span className="flex shrink-0 items-center pr-12">{MARQUEE_CONTENT}</span>
        <span className="flex shrink-0 items-center pr-12" aria-hidden="true">
          {MARQUEE_CONTENT}
        </span>
      </div>
    </div>
  )
}

export default Marquee
