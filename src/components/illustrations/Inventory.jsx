import Icon from '../Icon.jsx'
import useSequence from '../../hooks/useSequence.js'
import { StatusDot, WindowBar } from './parts.jsx'

const COUNT_ROWS = [
  { item: 'USB-C cables', system: 50, counted: 42 },
  { item: 'Wi-Fi routers', system: 12, counted: 12 },
  { item: 'Headphones', system: 30, counted: 26 },
]
// 0 counting · 1–3 rows counted · 4 write-off
const BEFORE_TIMING = [900, 900, 900, 900, 0]

export function InventoryBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const writeOff = step >= 4

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <WindowBar icon="table" title="Manual stock count" right={<span className="text-[11px] font-medium text-muted">Audit day</span>} />
      <div className="flex-1 px-4 pt-3">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] border-b border-line pb-2 text-[11px] font-medium text-muted">
          <span>Item</span>
          <span className="text-right">System</span>
          <span className="text-right">Counted</span>
          <span className="text-right">Diff</span>
        </div>
        {COUNT_ROWS.map((row, i) => {
          const counted = step >= i + 1
          const diff = row.counted - row.system
          return (
            <div key={row.item} className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] items-center border-b border-line py-3 text-[12.5px]">
              <span className="truncate font-medium text-ink">{row.item}</span>
              <span className="text-right text-body tabular-nums">{row.system}</span>
              <span className="text-right tabular-nums">
                {counted ? <span className="animate-fade text-ink">{row.counted}</span> : <span className="text-muted">…</span>}
              </span>
              <span className="text-right tabular-nums">
                {counted &&
                  (diff === 0 ? (
                    <span className="animate-fade text-muted">0</span>
                  ) : (
                    <span className="animate-fade font-semibold text-alert-deep">{diff}</span>
                  ))}
              </span>
            </div>
          )
        })}
        <p className="mt-4 text-[12px] leading-relaxed text-muted">
          No record of receiving, transfers or damage. The count is all there is.
        </p>
      </div>
      <div
        className={`flex items-center gap-2 border-t border-line px-4 py-3 text-[12px] font-medium transition-colors duration-500 ${
          writeOff ? 'text-alert-deep' : 'text-muted'
        }`}
      >
        <Icon name="alert" className="size-4" />
        {writeOff ? '12 units missing · written off, cause unknown' : 'Counting shelves by hand'}
      </div>
    </div>
  )
}

const MOVEMENTS = [
  { label: 'Received from supplier', by: 'Warehouse', change: +20, icon: 'box' },
  { label: 'Sold at the counter', by: 'Shop floor', change: -20, icon: 'bag' },
  { label: 'Adjusted: damaged in transit', by: 'Warehouse · reason noted', change: -2, icon: 'layers' },
]
const OPENING = 28
// 0 opening stock · 1–3 movements recorded · 4 count matches
const AFTER_TIMING = [800, 900, 900, 900, 0]

export function InventoryAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const recorded = MOVEMENTS.slice(0, Math.min(step, MOVEMENTS.length))
  const onHand = recorded.reduce((total, m) => total + m.change, OPENING)
  const matched = step >= 4

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-soft">
      <WindowBar
        dark
        icon="database"
        title="Inventory · Headphones"
        right={matched ? <StatusDot label="Count matches" /> : <span className="text-[11px] text-mist">Recording</span>}
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-end justify-between rounded-lg bg-white/4 px-4 py-2.5">
          <span>
            <span className="block text-[11px] text-mist">On hand</span>
            <span key={onHand} className="block animate-fade text-2xl leading-tight font-semibold text-snow tabular-nums">
              {onHand}
            </span>
          </span>
          <span className="text-right text-[11px] text-mist">
            Opening stock
            <span className="block text-[13px] text-fog tabular-nums">{OPENING}</span>
          </span>
        </div>

        <span className="mt-3 text-[11px] text-mist">Movements</span>
        <ul className="mt-1.5 flex flex-1 flex-col gap-1.5">
          {recorded.map((m) => (
            <li key={m.label} className="flex animate-rise items-center gap-3 rounded-lg border border-white/8 bg-ink px-3 py-1.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-spark/12 text-spark">
                <Icon name={m.icon} className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-medium text-snow">{m.label}</span>
                <span className="block truncate text-[10.5px] text-mist">{m.by}</span>
              </span>
              <span className={`shrink-0 text-[13px] font-semibold tabular-nums ${m.change > 0 ? 'text-spark' : 'text-fog'}`}>
                {m.change > 0 ? `+${m.change}` : m.change}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
