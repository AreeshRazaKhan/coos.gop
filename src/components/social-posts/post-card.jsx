import PropTypes from 'prop-types'

const ASPECT_CLASSES = {
  square: 'aspect-square',
  story: 'aspect-[9/16]',
}

const PostCard = ({ file, number, name, aspect }) => {
  const href = `/social-posts/${file}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
    >
      <span
        className={`relative block overflow-hidden rounded-[20px] border border-bone-200 bg-bone-100 transition-colors duration-300 group-hover:border-ochre-500 ${ASPECT_CLASSES[aspect]}`}
      >
        <iframe
          src={href}
          title={`${name} preview`}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
        />
      </span>
      <span className="mt-4 flex items-baseline gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
          {number}
        </span>
        <span className="font-display text-lg font-bold leading-tight text-ink-900 transition-colors group-hover:text-ochre-600">
          {name}
        </span>
        <span aria-hidden="true" className="ml-auto font-mono text-xs text-stone-400">
          ↗
        </span>
      </span>
    </a>
  )
}

PostCard.propTypes = {
  file: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  aspect: PropTypes.oneOf(['square', 'story']),
}

PostCard.defaultProps = {
  aspect: 'square',
}

export default PostCard
