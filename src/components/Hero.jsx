import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { LogoMark } from './Logo.jsx'
import TypingDots from './TypingDots.jsx'
import { ArrowLink } from './ui.jsx'
import { services } from '../data/content.js'
import { site } from '../data/site.js'
import useTypewriter from '../hooks/useTypewriter.js'

const HEADLINE = "Hi. What's slowing your team down?"

export default function Hero() {
  const typed = useTypewriter(HEADLINE)
  const [active, setActive] = useState(0)
  const [typing, setTyping] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const pick = (index) => {
    if (index === active) return
    setActive(index)
    setTyping(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setTyping(false), 550)
  }

  const current = services[active]

  return (
    <section className="px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-[28px] border-[3px] border-ink bg-white px-6 py-10 sm:px-12 sm:py-14">
          <h1 className="text-[40px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-6xl lg:text-[68px]">
            <span className="sr-only">{HEADLINE}</span>
            <span aria-hidden="true">
              {HEADLINE.slice(0, typed)}
              {/* Zero-width caret: an inline border cancelled by a negative margin, so nothing reflows */}
              <span
                className={`-mr-[3px] border-l-[3px] border-spark ${typed >= HEADLINE.length ? 'animate-caret-out' : ''}`}
              />
              <span className="text-transparent">{HEADLINE.slice(typed)}</span>
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
            I&apos;m {site.assistant}, the AI front desk {site.name} builds for sales and support. Pick what sounds familiar
            and I&apos;ll show you what we&apos;d set up.
          </p>
          {/* Tail drawn like the one in the logo */}
          <svg
            viewBox="0 0 90 70"
            aria-hidden="true"
            className="absolute -bottom-[35px] left-10 h-[35px] w-[45px] sm:left-14"
          >
            <path d="M8 3 L8 62 L76 3" fill="#FFFFFF" stroke="#0E1428" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="mt-11 flex items-center gap-3 pl-[27px] sm:pl-[43px]">
          <span className="flex size-10 items-center justify-center rounded-full bg-ink">
            <LogoMark tone="light" className="h-4 w-5" />
          </span>
          <p className="text-sm">
            <span className="font-semibold text-ink">{site.assistant}</span>
            <span className="text-muted"> · AI front desk by {site.name}</span>
          </p>
        </div>

        <div className="mt-10 grid gap-2.5 sm:grid-cols-2" role="group" aria-label="Choose what sounds familiar">
          {services.map((service, index) => {
            const selected = index === active
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => pick(index)}
                aria-pressed={selected}
                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-[15px] transition-colors ${
                  selected ? 'border-ink bg-ink text-snow' : 'border-line-strong bg-white text-ink hover:border-ink'
                }`}
              >
                <Icon name={service.icon} className={`size-5 shrink-0 ${selected ? 'text-spark' : 'text-muted'}`} />
                {service.chip}
              </button>
            )
          })}
        </div>

        <div className="mt-2.5 rounded-xl bg-ink p-6" aria-live="polite">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="font-semibold text-snow">{site.assistant}</span>
            <span className="text-mist">{current.name}</span>
          </div>
          <div className="mt-3 min-h-[92px] sm:min-h-[60px]">
            {typing ? (
              <TypingDots className="h-7" />
            ) : (
              <div key={active} className="flex animate-fade flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                <p className="text-[17px] leading-relaxed text-fog">{current.reply}</p>
                <ArrowLink to={current.link.to} tone="light" className="shrink-0 text-sm">
                  {current.link.label}
                </ArrowLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
