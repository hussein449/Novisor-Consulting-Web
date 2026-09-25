import { Link } from 'react-router'
import Icon from '../components/Icon.jsx'
import { LogoMark } from '../components/Logo.jsx'
import { CallExample, NightInbox } from '../components/services/ServiceExamples.jsx'
import { ArrowLink, ButtonLink, Dot, PageHeader, Section, SectionHeader } from '../components/ui.jsx'
import { afterHours, consulting, faqs, flow, moreServices, voiceAgents } from '../data/servicesPage.js'
import usePageTitle from '../hooks/usePageTitle.js'

const focus = [
  { id: afterHours.id, icon: 'moon', title: afterHours.label, text: 'Chat and WhatsApp answered from your data, day or night.' },
  { id: voiceAgents.id, icon: 'phone', title: voiceAgents.label, text: 'Phone calls that confirm, book and reschedule appointments.' },
]

function FocusLinks() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {focus.map((item, i) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center gap-5 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-ink text-spark">
            <Icon name={item.icon} className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-baseline gap-2">
              <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-lg font-semibold text-ink">{item.title}</span>
            </span>
            <span className="mt-1 block text-[15px] leading-relaxed text-body">{item.text}</span>
          </span>
          <Icon name="arrowDown" className="size-4 shrink-0 text-muted transition-colors group-hover:text-ink" />
        </a>
      ))}
    </div>
  )
}

function FocusIntro({ service, index }) {
  return (
    <>
      <p className="text-sm font-medium text-spark-deep">
        <span className="text-muted tabular-nums">{String(index).padStart(2, '0')}</span> · {service.label}
      </p>
      <h2 className="mt-3 text-3xl leading-[1.15] font-semibold tracking-[-0.025em] text-ink sm:text-[40px]">{service.title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-body">{service.intro}</p>
    </>
  )
}

function AfterHoursSection() {
  return (
    <Section id={afterHours.id}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <FocusIntro service={afterHours} index={1} />
          <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            {afterHours.covers.map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} className="size-5 text-spark-deep" />
                <p className="mt-3 font-semibold text-ink">{item.title}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <NightInbox {...afterHours.example} />
      </div>

      <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {afterHours.steps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-ink pt-5">
            <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            <p className="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">{step.title}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function VoiceSection() {
  return (
    <Section id={voiceAgents.id} tone="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <FocusIntro service={voiceAgents} index={2} />
          <ul className="mt-10 grid gap-x-10 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
            {voiceAgents.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <Dot />
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <CallExample {...voiceAgents.example} />
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {voiceAgents.uses.map((use) => (
          <article key={use.title} className="rounded-2xl border border-line bg-cloud p-7">
            <span className="flex size-10 items-center justify-center rounded-lg bg-white text-spark-deep ring-1 ring-line">
              <Icon name={use.icon} className="size-5" />
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-ink">{use.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{use.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function FlowColumn({ title, items }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl border border-line bg-white p-6">
      <p className="text-sm text-muted">{title}</p>
      <ul className="mt-4 divide-y divide-line">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-3 py-3 text-[15px] font-medium text-ink">
            <Icon name={item.icon} className="size-5 text-spark-deep" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-line-strong">
      <span className="h-6 w-px bg-line-strong lg:h-px lg:w-8" />
      <Icon name="arrowRight" className="size-4 rotate-90 lg:rotate-0" strokeWidth={2} />
    </div>
  )
}

function FlowSection() {
  return (
    <Section id="together">
      <SectionHeader
        label="How it fits together"
        title="One assistant, in chat and on the phone."
        intro="Both services share the same knowledge, the same calendar and the same dashboard, so a customer gets the same answer however they reach you."
      />
      <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
        <FlowColumn title="Customers reach you on" items={flow.channels} />
        <Connector />
        <div className="flex flex-col items-center justify-center rounded-2xl bg-ink p-8 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-ink-raised">
            <LogoMark tone="light" className="h-6 w-[27px]" />
          </span>
          <p className="mt-4 text-xl font-semibold text-snow">Novi</p>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-mist">
            Your information, your calendar and your rules for when a person takes over.
          </p>
        </div>
        <Connector />
        <FlowColumn title="Your team gets" items={flow.outcomes} />
      </div>
    </Section>
  )
}

function MoreServicesSection() {
  return (
    <Section id="more" tone="white">
      <SectionHeader
        label="More services"
        title="Everything else we build."
        intro="Beyond the assistant, we plan AI projects with you and build the systems around them, from lead lists to internal software."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        <article className="grid gap-10 bg-ink p-7 sm:col-span-2 sm:p-10 lg:col-span-3 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="flex size-10 items-center justify-center rounded-lg bg-ink-raised text-spark">
              <Icon name="compass" className="size-5" />
            </span>
            <p className="mt-8 text-sm font-medium text-spark">{consulting.label}</p>
            <h3 className="mt-2 text-2xl leading-snug font-semibold tracking-[-0.02em] text-snow sm:text-[28px]">
              {consulting.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-fog">{consulting.text}</p>
          </div>
          <ol className="grid content-center gap-x-8 gap-y-7 sm:grid-cols-2">
            {consulting.steps.map((step, i) => (
              <li key={step.title} className="border-t border-white/15 pt-4">
                <span className="text-sm text-mist tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-1.5 text-lg font-semibold text-snow">{step.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </article>
        {moreServices.map((service) => (
          <article key={service.title} className="flex flex-col bg-white p-7">
            <Icon name={service.icon} className="size-6 text-ink" />
            <h3 className="mt-8 text-lg font-semibold text-ink">{service.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">{service.text}</p>
            <p className="mt-6 text-sm text-muted">
              {service.link ? (
                <>
                  Use case:{' '}
                  <Link
                    to={service.link.to}
                    className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {service.link.label}
                  </Link>
                </>
              ) : (
                'Built to order'
              )}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function FaqSection() {
  return (
    <Section id="questions">
      <SectionHeader
        label="Questions"
        title="What teams usually ask first."
        intro="If yours isn't here, send it over. We reply with a straight answer about what's worth building."
      />
      <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.q} className="border-t border-line py-7">
            <dt className="text-lg font-semibold tracking-[-0.01em] text-ink">{faq.q}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-body">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
        <ButtonLink to="/contact">Start a conversation</ButtonLink>
        <ArrowLink to="/use-cases">See our use cases</ArrowLink>
      </div>
    </Section>
  )
}

export default function ServicesPage() {
  usePageTitle('Services')
  return (
    <>
      <PageHeader
        label="Services"
        title="Answered after hours. Confirmed by phone."
        intro="Two services that stop customers slipping away when your team is closed or busy: AI replies on chat and WhatsApp, and AI voice agents that confirm and book appointments."
      >
        <FocusLinks />
      </PageHeader>
      <AfterHoursSection />
      <VoiceSection />
      <FlowSection />
      <MoreServicesSection />
      <FaqSection />
    </>
  )
}
