import Icon from '../Icon.jsx'
import useSequence from '../../hooks/useSequence.js'
import { StatusDot, WindowBar } from './parts.jsx'

const RAW_ROWS = [
  { name: '3-bed apartment', source: 'Site A', price: '$240,000' },
  { name: 'Studio', source: 'Site A', price: '$95,000' },
  { name: '3-bed apartment', source: 'Site B', price: '$255,000', duplicate: true },
  { name: 'Villa', source: 'Site C', price: '—', missing: true },
  { name: '3-bed apartment', source: 'Site C', price: '$232,000', duplicate: true },
]
// 0–4 rows pasted one by one · 5 duplicates flagged
const BEFORE_TIMING = [800, 800, 800, 800, 1000, 0]

export function ExtractionBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const shown = RAW_ROWS.slice(0, Math.min(step + 1, RAW_ROWS.length))
  const flagged = step === BEFORE_TIMING.length - 1
  const pasting = step < RAW_ROWS.length - 1

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <WindowBar
        icon="table"
        title="listings_copy_FINAL_v3.xlsx"
        right={<span className="shrink-0 text-[11px] font-medium text-muted">Updated by hand</span>}
      />
      <div className="flex-1 px-4 pt-3">
        <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-line pb-2 text-[11px] font-medium text-muted">
          <span>Property</span>
          <span>Source</span>
          <span className="text-right">Price</span>
        </div>
        {shown.map((row, i) => (
          <div
            key={i}
            className={`grid animate-rise grid-cols-[1.5fr_1fr_1fr] items-center border-b border-line py-2.5 text-[12.5px] transition-colors duration-500 ${
              flagged && row.duplicate ? 'bg-alert/8' : ''
            }`}
          >
            <span className="flex min-w-0 items-center gap-1.5 truncate pl-1 font-medium text-ink">
              {row.name}
              {flagged && row.duplicate && (
                <span className="animate-pop rounded bg-alert px-1 text-[9.5px] font-semibold text-white">DUP</span>
              )}
            </span>
            <span className="text-body">{row.source}</span>
            <span className={`pr-1 text-right tabular-nums ${row.missing ? 'text-muted' : 'text-ink'}`}>{row.price}</span>
          </div>
        ))}
        {pasting && (
          <div className="flex items-center gap-2 py-2.5 pl-1 text-[12px] text-muted">
            <span className="h-4 w-px bg-ink" />
            Pasting from the next site
          </div>
        )}
      </div>
      <div
        className={`flex items-center gap-2 border-t border-line px-4 py-3 text-[12px] font-medium transition-colors duration-500 ${
          flagged ? 'text-alert-deep' : 'text-muted'
        }`}
      >
        <Icon name="alert" className="size-4" />
        {flagged ? 'Same property, three different prices' : 'Checking three sites by hand'}
      </div>
    </div>
  )
}

const SOURCES = ['Site A', 'Site B', 'Site C']
const CLEAN_ROWS = [
  { name: '3-bed apartment', merged: '3 sources merged', price: 'from $232,000' },
  { name: 'Studio', merged: '2 sources merged', price: '$95,000' },
  { name: 'Villa', merged: '1 source', price: 'On request' },
]
// 0 collecting · 1–3 clean rows arrive · 4 done
const AFTER_TIMING = [1300, 600, 600, 700, 0]

function Track({ flowing, delay = 0, className = 'h-6' }) {
  return (
    <span className={`relative mx-auto block w-px bg-white/12 ${className}`}>
      {flowing && (
        <span
          className="absolute left-1/2 size-1.5 -translate-x-1/2 animate-flow rounded-full bg-spark"
          style={{ animationDelay: `${delay}ms` }}
        />
      )}
    </span>
  )
}

export function ExtractionAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const done = step === AFTER_TIMING.length - 1
  const flowing = playing && !done

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-soft p-4">
      <div className="grid grid-cols-3 gap-2">
        {SOURCES.map((source, i) => (
          <div key={source} className="flex flex-col">
            <span className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-2 py-2 text-[12px] text-fog">
              <Icon name="globe" className="size-3.5 text-mist" />
              {source}
            </span>
            <Track flowing={flowing} delay={i * 300} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center rounded-lg border border-white/12 bg-ink-raised px-3 py-2.5 text-[12px] font-medium text-snow">
        Collect · Clean · De-duplicate
      </div>
      <Track flowing={flowing} className="h-4" />

      <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-white/10 bg-ink">
        <div className="flex items-center justify-between gap-2 border-b border-white/8 px-3.5 py-2.5">
          <span className="text-[12.5px] font-semibold text-snow">Clean listings</span>
          {done ? <StatusDot label="Updated just now" /> : <span className="text-[11px] text-mist">Collecting</span>}
        </div>
        {CLEAN_ROWS.map((row, i) =>
          step >= i + 1 ? (
            <div
              key={row.name}
              className="grid animate-rise grid-cols-[1.3fr_1fr] items-center gap-2 border-b border-white/5 px-3.5 py-2 last:border-0"
            >
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-medium text-snow">{row.name}</span>
                <span className="block truncate text-[10.5px] text-mist">{row.merged}</span>
              </span>
              <span className="text-right text-[12.5px] text-fog tabular-nums">{row.price}</span>
            </div>
          ) : (
            <div key={row.name} className="flex flex-col gap-1.5 border-b border-white/5 px-3.5 py-[13px] last:border-0">
              <span className="block h-1.5 w-2/5 rounded-full bg-white/8" />
              <span className="block h-1.5 w-1/4 rounded-full bg-white/5" />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
