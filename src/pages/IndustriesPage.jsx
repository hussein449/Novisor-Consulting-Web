import { Fragment } from 'react'
import { Link } from 'react-router'
import ChatExample from '../components/ChatExample.jsx'
import Icon from '../components/Icon.jsx'
import { PageHeader, Section } from '../components/ui.jsx'
import { industryPages } from '../data/industries.js'
import usePageTitle from '../hooks/usePageTitle.js'

function ListPanel({ title, items, onWhite }) {
  return (
    <div className={`row-span-4 grid grid-rows-subgrid gap-y-0 rounded-2xl border border-line p-6 sm:p-7 ${onWhite ? 'bg-cloud' : 'bg-white'}`}>
      <h3 className="pb-4 text-sm font-semibold text-ink">{title}</h3>
      {items.map((item, i) => (
        <div key={item.title} className={`py-4 ${i > 0 ? 'border-t border-line' : ''} ${i === items.length - 1 ? 'pb-0' : ''}`}>
          <p className="font-medium text-ink">{item.title}</p>
          <p className="mt-1 text-[15px] leading-relaxed text-body">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

function IndustrySection({ industry, index }) {
  const onWhite = index % 2 === 1
  return (
    <Section id={industry.id} tone={onWhite ? 'white' : undefined}>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-spark-deep">
            <Icon name={industry.icon} className="size-4" />
            {industry.name}
          </p>
          <h2 className="mt-3 text-3xl leading-[1.15] font-semibold tracking-[-0.025em] text-ink sm:text-[40px]">
            {industry.headline}
          </h2>
        </div>
        <div className="lg:pb-1">
          <p className="text-lg leading-relaxed text-body">{industry.intro}</p>
          {industry.proof.length > 0 && (
            <p className="mt-4 text-sm text-muted">
              Use case:{' '}
              {industry.proof.map((proof, i) => (
                <Fragment key={proof.label}>
                  {i > 0 && ', '}
                  <Link
                    to={proof.to}
                    className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {proof.label}
                  </Link>
                </Fragment>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <ListPanel title="Where it breaks today" items={industry.pains} onWhite={onWhite} />
        <ListPanel title="What we set up" items={industry.setup} onWhite={onWhite} />
        <ChatExample className="row-span-4" {...industry.example} />
      </div>
    </Section>
  )
}

export default function IndustriesPage() {
  usePageTitle('Industries')
  return (
    <>
      <PageHeader
        label="Industries"
        title="Where businesses lose customers, and what we set up."
        intro="Most of our work is with real estate agencies and clinics. We have also shipped systems for retail and pharma distribution."
      >
        <nav
          aria-label="Industries on this page"
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {industryPages.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              className="group flex items-center justify-between gap-3 bg-white px-5 py-4 transition-colors hover:bg-cloud"
            >
              <span className="flex items-center gap-3 text-[15px] font-medium text-ink">
                <Icon name={industry.icon} className="size-5 text-spark-deep" />
                {industry.short}
              </span>
              <Icon name="arrowDown" className="size-4 text-muted transition-colors group-hover:text-ink" />
            </a>
          ))}
        </nav>
      </PageHeader>

      {industryPages.map((industry, index) => (
        <IndustrySection key={industry.id} industry={industry} index={index} />
      ))}
    </>
  )
}
