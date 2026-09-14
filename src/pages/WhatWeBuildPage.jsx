import { Fragment } from 'react'
import { Link } from 'react-router'
import ChatExample from '../components/ChatExample.jsx'
import Icon from '../components/Icon.jsx'
import { ArrowLink, Dot, PageHeader, Section, SectionHeader } from '../components/ui.jsx'
import { noviCapabilities, noviExample, otherServices, process } from '../data/services.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function WhatWeBuildPage() {
  usePageTitle('What we build')
  return (
    <>
      <PageHeader
        label="What we build"
        title="Novi, lead systems and custom software."
        intro="Novi handles the conversations with your customers. The systems around it collect, clean and track the data those conversations depend on."
      />

      <Section id="novi">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-medium text-spark-deep">Novi</p>
            <h2 className="mt-3 text-3xl leading-[1.15] font-semibold tracking-[-0.025em] text-ink sm:text-[40px]">
              An AI front desk for sales and support.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Novi answers questions from your own knowledge base, qualifies and classifies leads, and books meetings. When it
              isn&apos;t sure, it hands the conversation to a person with the full history.
            </p>
            <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
              {noviCapabilities.map((capability) => (
                <div key={capability.title}>
                  <Icon name={capability.icon} className="size-5 text-spark-deep" />
                  <p className="mt-3 font-semibold text-ink">{capability.title}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-body">{capability.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <ArrowLink to="/use-cases#myoffice">Novi for leads at myOffice.lb</ArrowLink>
              <ArrowLink to="/use-cases#zar-beauty">Novi for support at ZAR Beauty</ArrowLink>
            </div>
          </div>
          <ChatExample {...noviExample} />
        </div>
      </Section>

      <Section id="services" tone="white">
        <SectionHeader
          label="Around Novi"
          title="The systems that keep the answers accurate."
          intro="An assistant is only as good as the data behind it. We also build the systems that collect that data, clean it and keep it current."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {otherServices.map((service) => (
            <article
              key={service.title}
              className="row-span-4 grid grid-rows-subgrid gap-y-0 rounded-2xl border border-line bg-cloud p-7"
            >
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{service.text}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink">
                    <Dot />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Use case:{' '}
                {service.examples.map((example, i) => (
                  <Fragment key={example.label}>
                    {i > 0 && ', '}
                    <Link
                      to={example.to}
                      className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {example.label}
                    </Link>
                  </Fragment>
                ))}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process">
        <SectionHeader
          label="How we work"
          title="Built with the people who will use it."
          intro="We define the scope with the people doing the work, demo early and keep reworking until the team actually uses what we built."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {process.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-5">
              <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">{step.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
