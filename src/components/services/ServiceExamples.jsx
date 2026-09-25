import Icon from '../Icon.jsx'

function FigureHeader({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
      <span className="flex min-w-0 items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-raised text-spark">
          <Icon name={icon} className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-snow">{title}</span>
          <span className="block truncate text-xs text-mist">{subtitle}</span>
        </span>
      </span>
      <span className="shrink-0 text-xs text-mist">Example</span>
    </div>
  )
}

function ResultCard({ icon, title, detail }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-3.5 py-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-spark/15 text-spark">
        <Icon name={icon} className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-snow">{title}</span>
        <span className="block text-xs text-mist">{detail}</span>
      </span>
    </div>
  )
}

// A night of messages on a timeline, each with what Novi did about it, then the morning summary.
export function NightInbox({ title, subtitle, items, summary }) {
  return (
    <figure className="m-0 flex flex-col rounded-2xl bg-ink p-5 sm:p-6">
      <FigureHeader icon="moon" title={title} subtitle={subtitle} />
      <ol className="mt-5 flex-1">
        {items.map((item) => (
          <li key={item.time} className="grid grid-cols-[3.25rem_1fr] gap-x-3">
            <span className="pt-2 text-xs text-mist tabular-nums">{item.time}</span>
            <div className="relative border-l border-white/10 pb-4 pl-5">
              <span aria-hidden="true" className="absolute top-3 -left-[3.5px] size-1.5 rounded-full bg-mist" />
              <p className="rounded-2xl rounded-bl-sm bg-snow px-3.5 py-2.5 text-sm leading-snug text-ink">{item.text}</p>
              <p
                className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${
                  item.tone === 'handoff' ? 'text-warn' : 'text-spark'
                }`}
              >
                <Icon name={item.tone === 'handoff' ? 'userCheck' : 'check'} className="size-3.5" strokeWidth={2.25} />
                {item.result}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-1 grid grid-cols-[3.25rem_1fr] items-center gap-x-3 border-t border-white/10 pt-4">
        <span className="text-xs text-mist tabular-nums">{summary.time}</span>
        <ResultCard icon="inbox" title={summary.title} detail={summary.detail} />
      </div>
    </figure>
  )
}

// Fixed bar heights for a still voice waveform (no animation).
const wave = [30, 55, 40, 75, 95, 60, 80, 45, 65, 100, 70, 50, 85, 40, 60, 90, 55, 35, 70, 45, 25, 50, 35, 20]

// A phone call: who is being called, the transcript and what changed afterwards.
export function CallExample({ title, subtitle, lines, results }) {
  return (
    <figure className="m-0 flex flex-col rounded-2xl bg-ink p-5 sm:p-6">
      <FigureHeader icon="phoneOutgoing" title={title} subtitle={subtitle} />
      <div className="mt-5 flex items-center gap-4 rounded-xl bg-ink-raised px-4 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-snow text-xs font-semibold text-ink">
          MK
        </span>
        <span className="min-w-0 shrink-0">
          <span className="block text-sm font-semibold text-snow">Maya K.</span>
          <span className="block text-xs text-mist">Appointment tomorrow, 10:30</span>
        </span>
        <span aria-hidden="true" className="ml-auto hidden h-7 flex-1 items-center justify-end gap-[3px] sm:flex">
          {wave.map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-spark/70" style={{ height: `${h}%` }} />
          ))}
        </span>
        <span className="ml-auto shrink-0 text-xs text-mist tabular-nums sm:ml-0">01:12</span>
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-end gap-2.5">
        {lines.map((line, i) =>
          line.from === 'agent' ? (
            <p
              key={i}
              className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-ink-raised px-3.5 py-2.5 text-sm leading-snug text-snow"
            >
              {line.text}
            </p>
          ) : (
            <p
              key={i}
              className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-snow px-3.5 py-2.5 text-sm leading-snug text-ink"
            >
              {line.text}
            </p>
          ),
        )}
      </div>
      <div className="mt-4 grid gap-2.5 border-t border-white/10 pt-4 sm:grid-cols-2">
        {results.map((result) => (
          <ResultCard key={result.title} {...result} />
        ))}
      </div>
    </figure>
  )
}
