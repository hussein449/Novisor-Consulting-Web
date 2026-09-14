import { Link } from 'react-router'
import Hero from '../components/Hero.jsx'
import Icon from '../components/Icon.jsx'
import { ArrowLink, Section, SectionHeader } from '../components/ui.jsx'
import { cases } from '../data/cases.js'
import { featuredCaseIds, services } from '../data/content.js'
import { industryPages } from '../data/industries.js'
import usePageTitle from '../hooks/usePageTitle.js'

function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        label="What we build"
        title="Four systems, all built on the data you already have."
        intro="Novi handles the conversations. Lead extraction and custom software keep the data behind those conversations accurate."
      />
      <div className="mt-12 grid sm:grid-cols-2 sm:gap-x-12">
        {services.map((service, i) => (
          <article key={service.id} className="border-t border-line py-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{service.name}</h3>
              <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <p className="mt-3 max-w-md text-base leading-relaxed text-body">{service.summary}</p>
          </article>
        ))}
      </div>
      <div className="border-t border-line pt-8">
        <ArrowLink to="/what-we-build">See what we build</ArrowLink>
      </div>
    </Section>
  )
}

function IndustriesOverview() {
  return (
    <Section tone="white">
      <SectionHeader
        label="Industries"
        title="For businesses that run on messages, bookings and stock."
        intro="Most of our work is with real estate agencies and clinics. We have also shipped systems for retail and pharma distribution."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {industryPages.map((industry) => (
          <Link
            key={industry.id}
            to={`/industries#${industry.id}`}
            className="group flex flex-col bg-white p-6 transition-colors hover:bg-cloud"
          >
            <Icon name={industry.icon} className="size-6 text-ink" />
            <h3 className="mt-8 text-lg font-semibold text-ink">{industry.short}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">{industry.summary}</p>
            <Icon name="arrowRight" className="mt-6 size-4 text-muted transition-colors group-hover:text-ink" />
          </Link>
        ))}
      </div>
    </Section>
  )
}

function FeaturedCases() {
  const featured = featuredCaseIds.map((id) => cases.find((c) => c.id === id))
  return (
    <Section>
      <SectionHeader
        label="Use cases"
        title="Built for real teams."
        intro="Three of our projects. Each one is written up in full, with the problem, what we built and a before and after."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {featured.map((study) => (
          <Link
            key={study.id}
            to={`/use-cases#${study.id}`}
            className="group row-span-4 grid grid-rows-subgrid gap-y-0 rounded-2xl border border-line bg-white p-7 transition-colors hover:border-ink"
          >
            <p className="text-sm text-muted">{study.category}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">{study.client}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-body">{study.summary}</p>
            <p className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 text-[15px] font-medium text-ink">
              {study.indexResult}
              <Icon name="arrowRight" className="size-4 shrink-0 text-muted transition-colors group-hover:text-ink" />
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <ArrowLink to="/use-cases">All use cases</ArrowLink>
      </div>
    </Section>
  )
}

export default function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesOverview />
      <FeaturedCases />
    </>
  )
}
