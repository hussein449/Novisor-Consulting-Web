import Icon from '../Icon.jsx'
import TypingDots from '../TypingDots.jsx'
import useSequence from '../../hooks/useSequence.js'
import { StatusDot } from './parts.jsx'

function Tile({ icon, title, children }) {
  return (
    <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-white p-3">
      <span className="flex items-center gap-1.5 truncate text-[11.5px] font-semibold text-ink">
        <Icon name={icon} className="size-3.5 shrink-0 text-muted" />
        {title}
      </span>
      <div className="mt-2.5 flex flex-1 flex-col gap-1.5">{children}</div>
    </div>
  )
}

// 0–2 missed calls pile up, chat stays unanswered · 3 "any update?"
const BEFORE_TIMING = [900, 900, 900, 0]

export function EuropharmBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const missed = Math.min(step + 1, 3)

  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-2.5">
      <Tile icon="message" title="Team chat">
        <span className="self-start rounded-lg rounded-bl-sm bg-cloud-deep px-2 py-1.5 text-[11px] leading-tight text-ink">
          Do we have stock of this item?
        </span>
        <span className="self-end rounded-lg rounded-br-sm bg-line px-2 py-1.5 text-[11px] leading-tight text-body">
          Checking with the warehouse
        </span>
        {step >= 3 ? (
          <span className="animate-rise self-start rounded-lg rounded-bl-sm bg-cloud-deep px-2 py-1.5 text-[11px] leading-tight text-ink">
            Any update?
          </span>
        ) : (
          <span className="self-end rounded-lg bg-line px-2 py-1.5">
            <TypingDots />
          </span>
        )}
      </Tile>

      <Tile icon="table" title="stock.xlsx">
        {['Item A', 'Item B', 'Item C', 'Item D'].map((item) => (
          <span key={item} className="flex items-center justify-between border-b border-line pb-1 text-[11px] text-body">
            {item}
            <span className="font-semibold text-alert-deep">?</span>
          </span>
        ))}
      </Tile>

      <Tile icon="file" title="Visit report">
        {['Rep 1', 'Rep 2', 'Rep 3'].map((rep) => (
          <span key={rep} className="flex items-center justify-between text-[11px] text-body">
            {rep}
            <span className="rounded bg-warn/15 px-1.5 text-[10px] font-medium text-warn-deep">Not sent</span>
          </span>
        ))}
        <span className="mt-auto flex items-center gap-1 text-[10.5px] text-muted">
          <Icon name="hourglass" className="size-3" />
          Compiled by hand
        </span>
      </Tile>

      <Tile icon="phoneMissed" title="Missed calls">
        {['Warehouse', 'Sales', 'Accounting'].slice(0, missed).map((who) => (
          <span key={who} className="flex animate-rise items-center gap-1.5 rounded-md bg-alert/8 px-2 py-1.5 text-[11px] text-alert-deep">
            <Icon name="phoneMissed" className="size-3 shrink-0" />
            {who}
          </span>
        ))}
      </Tile>
    </div>
  )
}

const KPIS = [
  { label: 'Stock', icon: 'box', bars: [40, 62, 55, 70, 76] },
  { label: 'Reps', icon: 'user', bars: [35, 65, 60, 70, 85] },
  { label: 'Visits', icon: 'calendarCheck', bars: [22, 38, 52, 66, 90] },
]
const STOCK = [
  { rep: 'Rep 1', width: '72%' },
  { rep: 'Rep 2', width: '48%' },
  { rep: 'Rep 3', width: '85%' },
]
const FEED = [
  { who: 'Rep 2', what: 'logged a pharmacy visit', icon: 'calendarCheck' },
  { who: 'Warehouse', what: 'received a delivery', icon: 'box' },
  { who: 'Rep 1', what: 'updated stock on hand', icon: 'layers' },
]
// 0 empty · 1 numbers fill in · 2–4 activity arrives
const AFTER_TIMING = [600, 900, 800, 800, 0]

export function EuropharmAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const filled = step >= 1
  const feed = FEED.slice(0, Math.max(0, step - 1)).reverse().slice(0, 2)

  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-ink-soft p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-[13px] font-semibold text-snow">
          <Icon name="chart" className="size-4 text-spark" />
          Operations dashboard
        </span>
        <StatusDot label="Live" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-white/4 p-2.5">
            <span className="flex items-center gap-1.5 text-[11px] text-fog">
              <Icon name={kpi.icon} className="size-3 text-mist" />
              {kpi.label}
            </span>
            <span className="mt-2 flex h-6 items-end gap-1">
              {kpi.bars.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-sm transition-[height] duration-700 ${i === kpi.bars.length - 1 ? 'bg-spark' : 'bg-spark/30'}`}
                  style={{ height: filled ? `${h}%` : '8%' }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-white/4 p-2.5">
        <span className="text-[11px] text-fog">Stock per rep</span>
        <div className="mt-1.5 flex flex-col gap-1.5">
          {STOCK.map((row) => (
            <span key={row.rep} className="flex items-center gap-2.5 text-[11px] text-mist">
              <span className="w-9 shrink-0">{row.rep}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                <span
                  className="block h-full rounded-full bg-spark transition-[width] duration-700"
                  style={{ width: filled ? row.width : '0%' }}
                />
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        {feed.map((item) => (
          <span key={item.who} className="flex animate-rise items-center gap-2.5 rounded-lg border border-white/8 bg-ink px-3 py-1.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-spark/12 text-spark">
              <Icon name={item.icon} className="size-3.5" />
            </span>
            <span className="min-w-0 flex-1 truncate text-[12px] text-fog">
              <span className="font-semibold text-snow">{item.who}</span> {item.what}
            </span>
            <span className="shrink-0 text-[10.5px] text-mist">now</span>
          </span>
        ))}
      </div>
    </div>
  )
}
