import Icon from '../Icon.jsx'
import useSequence from '../../hooks/useSequence.js'
import { WindowBar } from './parts.jsx'

const PILE = [
  { text: 'Hi, interested', left: '4%', top: '6%', rotate: '-5deg' },
  { text: 'Price?', left: '58%', top: '2%', rotate: '4deg' },
  { text: 'Call me', left: '30%', top: '28%', rotate: '-3deg' },
  { text: 'Is it still available?', left: '2%', top: '52%', rotate: '3deg' },
  { text: 'Just looking', left: '56%', top: '44%', rotate: '-6deg' },
  { text: 'Send me details', left: '30%', top: '72%', rotate: '5deg' },
]
const BEFORE_TIMING = [550, 550, 550, 550, 550, 0]

export function ClassificationBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const cards = PILE.slice(0, step + 1)

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <WindowBar
        icon="inbox"
        title="New enquiries"
        right={<span className="text-[11px] font-medium text-muted">Unsorted</span>}
      />
      <div className="relative mx-4 mt-3 flex-1">
        {cards.map((card) => (
          <span key={card.text} className="absolute animate-pop" style={{ left: card.left, top: card.top, rotate: card.rotate }}>
            <span className="flex items-center gap-2 rounded-lg border border-line bg-cloud px-3 py-2 text-[12.5px] whitespace-nowrap text-ink">
              <Icon name="message" className="size-3.5 text-muted" />
              {card.text}
            </span>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-line px-4 py-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cloud-deep text-muted">
          <Icon name="user" className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] text-muted">Sales team</span>
          <span className="block text-[12.5px] font-medium text-ink">“Who do we call first?”</span>
        </span>
      </div>
    </div>
  )
}

const FIELDS = [
  { label: 'Budget', value: '$250k' },
  { label: 'Area', value: 'Downtown' },
  { label: 'Type', value: '3-bed apartment' },
  { label: 'Timeline', value: 'This month' },
]
const COLUMNS = [
  { label: 'Ready to buy', dot: 'bg-spark', count: 1 },
  { label: 'Needs info', dot: 'bg-warn', count: 2 },
  { label: 'Support', dot: 'bg-mist', count: 1 },
]
// 0 new chat · 1–4 fields captured · 5 intent classified · 6 routed
const AFTER_TIMING = [800, 550, 550, 550, 550, 900, 0]

export function ClassificationAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const classified = step >= 5
  const routed = step >= 6

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-ink-soft p-4">
      <div
        className={`rounded-lg border bg-ink-raised p-3.5 transition-opacity duration-500 ${
          routed ? 'border-white/5 opacity-50' : 'border-white/12'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-[12.5px] font-semibold text-snow">
            <Icon name="message" className="size-4 text-spark" />
            Novi · new chat
          </span>
          {classified ? (
            <span className="animate-pop rounded-full bg-spark px-2.5 py-0.5 text-[11px] font-semibold text-ink">Ready to buy</span>
          ) : (
            <span className="text-[11px] text-mist">Qualifying</span>
          )}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {FIELDS.map((field, i) => (
            <div key={field.label} className="rounded-md bg-white/4 px-2.5 py-2">
              <span className="block text-[10.5px] text-mist">{field.label}</span>
              {step >= i + 1 ? (
                <span className="mt-0.5 flex animate-rise items-center gap-1 truncate text-[12px] font-medium text-snow">
                  <Icon name="check" className="size-3 shrink-0 text-spark" strokeWidth={2.5} />
                  {field.value}
                </span>
              ) : (
                <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`flex items-center justify-center gap-2 text-[11.5px] font-medium text-spark transition-opacity duration-300 ${routed ? 'opacity-100' : 'opacity-0'}`}>
        <Icon name="arrowDown" className="size-3.5" strokeWidth={2.2} />
        Routed to the sales team
      </div>

      <div className="grid flex-1 grid-cols-3 gap-2">
        {COLUMNS.map((column, ci) => (
          <div key={column.label} className="flex min-w-0 flex-col gap-1.5 rounded-lg bg-white/3 p-2">
            <span className="flex items-center gap-1.5 truncate text-[10.5px] font-medium text-fog">
              <span className={`size-1.5 shrink-0 rounded-full ${column.dot}`} />
              {column.label}
            </span>
            {ci === 0 && routed && (
              <span className="flex animate-rise flex-col gap-1 rounded-md border border-spark/40 bg-spark/10 p-1.5">
                <span className="block h-1.5 w-4/5 rounded-full bg-spark/70" />
                <span className="block h-1.5 w-1/2 rounded-full bg-spark/40" />
              </span>
            )}
            {Array.from({ length: column.count }).map((_, i) => (
              <span key={i} className="flex flex-col gap-1 rounded-md bg-white/5 p-1.5">
                <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
                <span className="block h-1.5 w-1/2 rounded-full bg-white/10" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
