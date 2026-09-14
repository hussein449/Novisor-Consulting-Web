import Icon from '../components/Icon.jsx'
import LogoMarquee from '../components/LogoMarquee.jsx'
import { ArrowLink, PageHeader, Section, SectionHeader } from '../components/ui.jsx'
import { focus, principles, team } from '../data/about.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function AboutPage() {
  usePageTitle('About us')
  return (
    <>
      <PageHeader
        label="About us"
        title="Engineers and professors building for business."
        intro="Novisor is a team of experienced engineers and professors working on practical AI and software solutions for businesses and enterprises."
      />

      <Section id="team">
        <SectionHeader
          label="Who we are"
          title="Two kinds of expertise in one team."
          intro="Engineering gets a system built and running. Domain expertise makes sure it solves the right problem, in the right way."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-12">
          {team.map((group) => (
            <div key={group.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{group.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-body">{group.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="focus" tone="white">
        <SectionHeader
          label="What we work on"
          title="Solutions for businesses and enterprises."
          intro="From a single AI assistant at a clinic's front desk to software that connects every department of a company."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {focus.map((item) => (
            <article
              key={item.title}
              className="row-span-4 grid grid-rows-subgrid gap-y-0 rounded-2xl border border-line bg-cloud p-7"
            >
              <Icon name={item.icon} className="size-6 text-spark-deep" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{item.text}</p>
              <div className="mt-6 border-t border-line pt-5">
                <ArrowLink to={item.link.to} className="text-sm">
                  {item.link.label}
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="principles">
        <SectionHeader
          label="How we work"
          title="Principles we build by."
          intro="The same rules apply whether the project is a chatbot for a small team or a system an entire company depends on."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {principles.map((principle, i) => (
            <li key={principle.title} className="border-t-2 border-ink pt-5">
              <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">{principle.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{principle.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section id="worked-with" className="border-t border-line bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label="Worked with"
            title="Teams we have built for."
            intro="Businesses and organisations across Lebanon, from an online beauty shop to a medical supplier. Each project is written up on our use cases page."
          />
        </div>
        <div className="mx-auto mt-12 max-w-[1440px]">
          <LogoMarquee />
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
          <ArrowLink to="/use-cases">Read the use cases</ArrowLink>
        </div>
      </section>
    </>
  )
}
