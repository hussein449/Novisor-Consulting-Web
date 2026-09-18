import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import Icon from '../components/Icon.jsx'
import { PageHeader } from '../components/ui.jsx'
import CaseStudy from '../components/usecases/CaseStudy.jsx'
import ProjectSwitcher from '../components/usecases/ProjectSwitcher.jsx'
import { ChatbotAfter, ChatbotBefore } from '../components/illustrations/Chatbot.jsx'
import { CiteCheckAfter, CiteCheckBefore } from '../components/illustrations/CiteCheck.jsx'
import { ClassificationAfter, ClassificationBefore } from '../components/illustrations/Classification.jsx'
import { EuropharmAfter, EuropharmBefore } from '../components/illustrations/Europharm.jsx'
import { ExtractionAfter, ExtractionBefore } from '../components/illustrations/Extraction.jsx'
import { InventoryAfter, InventoryBefore } from '../components/illustrations/Inventory.jsx'
import { cases } from '../data/cases.js'
import usePageTitle from '../hooks/usePageTitle.js'

const illustrations = {
  classification: [ClassificationBefore, ClassificationAfter],
  extraction: [ExtractionBefore, ExtractionAfter],
  chatbot: [ChatbotBefore, ChatbotAfter],
  europharm: [EuropharmBefore, EuropharmAfter],
  inventory: [InventoryBefore, InventoryAfter],
  citecheck: [CiteCheckBefore, CiteCheckAfter],
}
const caseIds = cases.map((study) => study.id)

function PagerButton({ study, direction, onSelect }) {
  const next = direction === 'next'
  return (
    <button
      type="button"
      onClick={() => onSelect(study.id, { scroll: 'always' })}
      className={`group flex cursor-pointer flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink sm:p-6 ${
        next ? 'items-end text-right' : 'items-start text-left'
      }`}
    >
      <span className="text-sm text-muted">{next ? 'Next project' : 'Previous project'}</span>
      <span className="mt-1 flex items-center gap-2 text-lg font-semibold tracking-[-0.01em] text-ink">
        {!next && <Icon name="arrowRight" className="size-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />}
        {study.client}
        {next && <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />}
      </span>
    </button>
  )
}

export default function UseCasesPage() {
  usePageTitle('Use cases')
  const { hash } = useLocation()
  const hashId = hash.slice(1)
  const [activeId, setActiveId] = useState(() => (caseIds.includes(hashId) ? hashId : caseIds[0]))
  const barRef = useRef(null)
  const panelRef = useRef(null)

  // Links from other pages (e.g. /use-cases#zar-beauty) open that project.
  useEffect(() => {
    if (caseIds.includes(hashId)) setActiveId(hashId)
  }, [hashId])

  const select = useCallback((id, { scroll = 'ifHidden' } = {}) => {
    setActiveId(id)
    // Keep the URL shareable without triggering the router's scroll-to-hash.
    window.history.replaceState(window.history.state, '', `#${id}`)
    const bar = barRef.current
    const panel = panelRef.current
    if (!bar || !panel) return
    const barBottom = bar.getBoundingClientRect().bottom
    const panelTop = panel.getBoundingClientRect().top
    if (scroll === 'always' || panelTop < barBottom) {
      window.scrollTo({ top: window.scrollY + panelTop - barBottom, behavior: 'smooth' })
    }
  }, [])

  const index = caseIds.indexOf(activeId)
  const study = cases[index]
  const previous = cases[(index - 1 + cases.length) % cases.length]
  const next = cases[(index + 1) % cases.length]
  const [Before, After] = illustrations[study.illustration]

  return (
    <>
      <PageHeader
        label="Use cases"
        title="What we built, and what changed after."
        intro="Six projects for teams in Lebanon. Pick a company to see the problem, what we built and a before and after."
      />

      <div ref={barRef} className="sticky top-[72px] z-30 border-y border-line bg-cloud/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ProjectSwitcher cases={cases} activeId={activeId} onSelect={select} />
        </div>
      </div>

      <section
        ref={panelRef}
        id={study.id}
        role="tabpanel"
        aria-labelledby={`tab-${study.id}`}
        className="scroll-mt-[70px] px-5 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24"
      >
        <div key={study.id} className="mx-auto max-w-6xl animate-fade">
          <CaseStudy study={study} index={index} Before={Before} After={After} />

          <nav aria-label="More projects" className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            <PagerButton study={previous} direction="previous" onSelect={select} />
            <PagerButton study={next} direction="next" onSelect={select} />
          </nav>
        </div>
      </section>
    </>
  )
}
