'use client'

import PropTypes from 'prop-types'

const HEADER_OFFSET = 128

const TableOfContents = ({ sections }) => {
  const handleClick = (event, id) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    if (history.pushState) {
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className="relative z-20 rounded-[20px] border border-bone-200 bg-paper p-6 shadow-[0_2px_18px_rgba(14,27,44,0.06)] tablet:sticky tablet:top-32 tablet:self-start"
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
        In this article
      </span>
      <p className="mt-2 font-display text-lg font-extrabold leading-snug tracking-[-0.015em] text-ink-900">
        Table of contents
      </p>
      <ol className="mt-5 flex flex-col gap-3 border-t border-bone-200 pt-5">
        {sections.map((section, i) => (
          <li key={section.id} className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-600 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <a
              href={`#${section.id}`}
              onClick={(event) => handleClick(event, section.id)}
              className="font-display text-[15px] font-medium leading-[1.4] text-ink-900 underline decoration-bone-200 underline-offset-4 hover:decoration-ochre-500 hover:text-ochre-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

TableOfContents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TableOfContents
