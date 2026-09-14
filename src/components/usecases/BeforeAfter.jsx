import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from '../Icon.jsx'
import useInView from '../../hooks/useInView.js'

// One frame, two halves. When it scrolls into view, "Before" plays once, then "After".
// Both then rest on their finished state until the visitor presses Replay.
export default function BeforeAfter({ before, after, Before, After, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.35, once: true })
  const [phase, setPhase] = useState('idle') // idle → before → after → done
  const [run, setRun] = useState(0)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const current = phase === 'idle' && inView ? 'before' : phase

  const handleBeforeDone = useCallback(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setPhase('after'), 700)
  }, [])
  const handleAfterDone = useCallback(() => setPhase('done'), [])

  const replay = () => {
    clearTimeout(timer.current)
    setRun((r) => r + 1)
    setPhase('before')
  }

  const halves = [
    { key: 'before', label: 'Before', copy: before, Illustration: Before, onDone: handleBeforeDone, dark: false },
    { key: 'after', label: 'After', copy: after, Illustration: After, onDone: handleAfterDone, dark: true },
  ]

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl border border-line bg-white ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 sm:px-6">
        <p className="text-sm font-medium text-ink">Before and after</p>
        <button
          type="button"
          onClick={replay}
          disabled={current !== 'done'}
          className="relative inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium text-body transition-colors before:absolute before:-inset-2 before:content-[''] enabled:cursor-pointer enabled:hover:text-ink disabled:opacity-40"
        >
          <Icon name="replay" className="size-4" />
          Replay
        </button>
      </div>

      <div className="grid lg:grid-cols-2">
        {halves.map(({ key, label, copy, Illustration, onDone, dark }) => (
          <figure
            key={key}
            className={`row-span-3 m-0 grid grid-rows-subgrid gap-y-0 p-5 sm:p-6 ${
              dark ? 'bg-ink' : 'border-b border-line bg-cloud lg:border-r lg:border-b-0'
            }`}
          >
            <div className="pb-5">
              <p className={`flex items-center gap-2 text-sm font-medium ${dark ? 'text-spark' : 'text-muted'}`}>
                <span className={`size-1.5 rounded-full ${dark ? 'bg-spark' : 'bg-muted'}`} />
                {label}
              </p>
              <p className={`mt-1.5 text-lg leading-snug font-semibold tracking-[-0.01em] ${dark ? 'text-snow' : 'text-ink'}`}>
                {copy.title}
              </p>
            </div>
            {/* Decorative mock-up; the title and caption describe it for screen readers */}
            <div className="h-[340px]" aria-hidden="true">
              <Illustration key={run} playing={current === key} onDone={onDone} />
            </div>
            <figcaption className={`pt-5 text-[15px] leading-relaxed ${dark ? 'text-mist' : 'text-body'}`}>
              {copy.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
