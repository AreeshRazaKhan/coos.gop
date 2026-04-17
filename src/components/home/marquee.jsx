const MARQUEE_CONTENT = (
  <>
    The Montana Way <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    <em className="font-italic italic">people-first</em> politics
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    no corporate PAC money
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
    Stevensville to D.C.
    <span className="text-ochre-500 px-4" aria-hidden="true">✦</span>
  </>
)

const Marquee = () => {
  return (
    <div
      className="overflow-hidden bg-ink-900 text-moonlight py-8 border-y border-ink-700"
      aria-label="Campaign themes"
    >
      <div className="marquee-track flex whitespace-nowrap font-display text-4xl md:text-6xl font-black tracking-[-0.02em]">
        <span className="flex shrink-0 items-center pr-12">{MARQUEE_CONTENT}</span>
        <span className="flex shrink-0 items-center pr-12" aria-hidden="true">
          {MARQUEE_CONTENT}
        </span>
      </div>
    </div>
  )
}

export default Marquee
