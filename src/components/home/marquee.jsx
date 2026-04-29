const MARQUEE_CONTENT = (
  <>
    Take Back Coos County <span className="text-ochre-400 px-4" aria-hidden="true">✦</span>
    <em className="font-italic italic">Constitution. Community. Coos County.</em>
    <span className="text-ochre-400 px-4" aria-hidden="true">✦</span>
    Restore Liberty. Limit Government.
    <span className="text-ochre-400 px-4" aria-hidden="true">✦</span>
    One Vote. One Voice.
    <span className="text-ochre-400 px-4" aria-hidden="true">✦</span>
  </>
)

const Marquee = () => {
  return (
    <div
      className="overflow-hidden bg-ochre-500 text-paper py-8 border-y border-ochre-600"
      aria-label="Committee themes"
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
