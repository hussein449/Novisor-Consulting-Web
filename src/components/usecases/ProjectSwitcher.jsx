import { useEffect, useRef } from 'react'
import ClientLogo from '../ClientLogo.jsx'
import { clientForCase } from '../../data/clients.js'

// Row of company logos that works as tabs: one project is shown at a time.
// Arrow keys, Home and End move between projects.
export default function ProjectSwitcher({ cases, activeId, onSelect }) {
  const listRef = useRef(null)
  const tabRefs = useRef({})
  const firstRun = useRef(true)

  // On narrow screens the row scrolls sideways: centre the selected logo without moving the page.
  // Jump straight there on load, glide on later changes.
  useEffect(() => {
    const list = listRef.current
    const tab = tabRefs.current[activeId]
    const behavior = firstRun.current ? 'instant' : 'smooth'
    firstRun.current = false
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior })
  }, [activeId])

  const onKeyDown = (event) => {
    const index = cases.findIndex((study) => study.id === activeId)
    const targets = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: cases.length - 1 }
    if (!(event.key in targets)) return
    event.preventDefault()
    const next = cases[(targets[event.key] + cases.length) % cases.length]
    onSelect(next.id)
    tabRefs.current[next.id]?.focus()
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Projects"
      onKeyDown={onKeyDown}
      className="relative -mx-5 flex overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {cases.map((study) => {
        const client = clientForCase(study.id)
        const selected = study.id === activeId
        return (
          <button
            key={study.id}
            ref={(el) => {
              tabRefs.current[study.id] = el
            }}
            type="button"
            role="tab"
            id={`tab-${study.id}`}
            aria-selected={selected}
            aria-controls={selected ? study.id : undefined}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(study.id)}
            className={`group relative flex h-[84px] min-w-[136px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 px-3 transition-colors after:absolute after:inset-x-4 after:-bottom-px after:h-0.5 after:rounded-full after:bg-ink after:transition-opacity lg:min-w-0 ${
              selected ? 'after:opacity-100' : 'after:opacity-0 hover:bg-cloud-deep/70'
            }`}
          >
            <span className="flex h-9 items-center">
              <ClientLogo
                client={client}
                size="small"
                className={`transition duration-300 ${selected ? '' : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
              />
            </span>
            <span className={`max-w-full truncate text-xs ${selected ? 'font-medium text-ink' : 'text-muted group-hover:text-body'}`}>
              {study.client}
            </span>
          </button>
        )
      })}
    </div>
  )
}
