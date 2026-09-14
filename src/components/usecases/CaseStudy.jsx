import ClientLogo from '../ClientLogo.jsx'
import { Dot } from '../ui.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import { clientCountry, clientForCase } from '../../data/clients.js'

// One project: header with the company logo, problem and what we built, before/after, results.
export default function CaseStudy({ study, index, Before, After }) {
  const number = String(index + 1).padStart(2, '0')
  const client = clientForCase(study.id)

  return (
    <article>
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-spark-deep">
            Use case {number} · {study.category}
          </p>
          <h2 className="mt-3 text-3xl leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-[44px]">{study.client}</h2>
          {client && (
            <p className="mt-2 text-sm text-muted">
              {client.type} · {clientCountry}
            </p>
          )}
          <p className="mt-4 text-lg leading-relaxed text-body">{study.summary}</p>
        </div>
        {client && (
          <div className="flex h-32 items-center justify-center rounded-2xl border border-line bg-white px-8 sm:h-40">
            <ClientLogo client={client} />
          </div>
        )}
      </header>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-sm font-semibold text-ink">The problem</h3>
          <p className="mt-3 text-base leading-relaxed text-body">{study.problem}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">What we built</h3>
          <ul className="mt-3 space-y-2.5">
            {study.built.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-body">
                <Dot />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BeforeAfter className="mt-12" before={study.before} after={study.after} Before={Before} After={After} />

      <div className="mt-12">
        <h3 className="text-sm font-semibold text-ink">What changed</h3>
        <div className="mt-5 grid gap-8 sm:grid-cols-3">
          {study.results.map((result) => (
            <div key={result.title} className="border-t-2 border-ink pt-4">
              <p className="text-lg font-semibold tracking-[-0.01em] text-ink">{result.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
