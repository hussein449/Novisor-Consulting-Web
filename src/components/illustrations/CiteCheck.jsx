import Icon from '../Icon.jsx'
import TypingDots from '../TypingDots.jsx'
import useSequence from '../../hooks/useSequence.js'
import { Bars, WindowBar } from './parts.jsx'

function TextLine({ parts }) {
  return (
    <span className="flex items-center gap-1.5">
      {parts.map((part, i) =>
        part.startsWith('[') ? (
          <span key={i} className="shrink-0 rounded bg-warn/20 px-1 text-[10.5px] font-semibold text-warn-deep">
            {part}
          </span>
        ) : (
          <span key={i} className="block h-1.5 rounded-full bg-line-strong" style={{ width: part }} />
        ),
      )}
    </span>
  )
}

const REFS = ['[4]', '[9]', '[12]']
// Magnifier position over the reference list per step.
const LENS = [
  { x: 36, y: -8 },
  { x: 120, y: 20 },
  { x: 72, y: 48 },
  { x: 120, y: 20 },
]
const BEFORE_TIMING = [900, 900, 900, 0]

export function CiteCheckBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const lens = LENS[step]

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <WindowBar icon="file" title="chapter_draft.docx" right={<span className="text-[11px] font-medium text-muted">Manual review</span>} />
      <div className="flex flex-1 flex-col gap-2.5 px-4 pt-4">
        <TextLine parts={['38%', '22%', '[4]', '18%']} />
        <TextLine parts={['16%', '30%', '24%', '14%']} />
        <TextLine parts={['26%', '[9]', '34%', '12%']} />
        <TextLine parts={['20%', '28%', '18%', '[12]']} />

        <span className="mt-3 border-t border-line pt-3 text-[11px] font-medium text-muted">References</span>
        <div className="relative flex flex-col gap-2.5">
          {REFS.map((ref, i) => (
            <span key={ref} className="flex items-center gap-2.5">
              <span className="w-7 shrink-0 text-[11px] font-semibold text-body">{ref}</span>
              <span className="flex-1">
                <Bars widths={[`${80 - i * 12}%`, `${50 + i * 8}%`]} />
              </span>
            </span>
          ))}
          <span
            className="absolute top-0 left-0 flex size-9 items-center justify-center rounded-full border-2 border-ink bg-white/85 text-ink transition-transform duration-700 ease-in-out"
            style={{ transform: `translate(${lens.x}px, ${lens.y}px)` }}
          >
            <Icon name="search" className="size-4" strokeWidth={2.2} />
          </span>
          {step >= 3 && (
            <span className="absolute top-4 right-0 animate-rise rounded-lg rounded-br-sm bg-ink px-2.5 py-1.5 text-[11px] text-snow">
              Does [9] really say this?
            </span>
          )}
        </div>
      </div>
      <div className="border-t border-line px-4 py-3">
        <span className="flex items-center gap-2 text-[12px] font-medium text-body">
          <Icon name="hourglass" className="size-4 text-muted" />
          Checking one source at a time
        </span>
        <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-line">
          <span className="block h-full rounded-full bg-muted transition-[width] duration-700" style={{ width: `${8 + step * 5}%` }} />
        </span>
      </div>
    </div>
  )
}

const REFERENCES = [
  { id: '[4]', status: 'ok', label: 'Supports the claim' },
  { id: '[9]', status: 'warn', label: "Doesn't support the claim" },
  { id: '[12]', status: 'bad', label: 'Source not found' },
  { id: '[17]', status: 'ok', label: 'Supports the claim' },
]
const STATUS = {
  ok: { icon: 'checkCircle', text: 'text-spark' },
  warn: { icon: 'alert', text: 'text-warn' },
  bad: { icon: 'xCircle', text: 'text-alert' },
}
const STAGES = ['Retrieve', 'Confirm', 'Check claim']
// 0–3 each reference checked in turn · 4 summary
const AFTER_TIMING = [900, 900, 900, 900, 0]

export function CiteCheckAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const done = step >= REFERENCES.length

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-ink-soft p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-[13px] font-semibold text-snow">
          <Icon name="book" className="size-4 text-spark" />
          CiteCheck audit
        </span>
        <span className="text-[11px] text-mist">{done ? 'Audit complete' : `Checking ${REFERENCES[step].id}`}</span>
      </div>

      <div className="flex items-center gap-1.5 text-[11px]">
        {STAGES.map((stage, i) => (
          <span key={stage} className="flex items-center gap-1.5">
            {i > 0 && <Icon name="arrowRight" className="size-3 text-white/25" />}
            <span className={done ? 'text-spark' : 'text-mist'}>{stage}</span>
          </span>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {REFERENCES.map((ref, i) => {
          const scanning = step === i
          const checked = step > i
          const s = STATUS[ref.status]
          return (
            <div
              key={ref.id}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors duration-300 ${
                scanning ? 'border-spark/40 bg-white/5' : 'border-white/8 bg-ink'
              }`}
            >
              <span className="w-8 shrink-0 text-[11.5px] font-semibold text-fog">{ref.id}</span>
              <span className="min-w-0 flex-1">
                <Bars widths={['85%', '55%']} className="bg-white/12" />
              </span>
              <span className="flex w-[46%] shrink-0 justify-end">
                {checked ? (
                  <span className={`flex animate-fade items-center gap-1.5 text-[11px] font-medium ${s.text}`}>
                    <Icon name={s.icon} className="size-3.5 shrink-0" />
                    <span className="truncate">{ref.label}</span>
                  </span>
                ) : scanning ? (
                  <TypingDots />
                ) : (
                  <span className="text-[11px] text-white/30">Queued</span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      <div className={`grid grid-cols-3 gap-2 border-t border-white/8 pt-3 text-center text-[11px] font-medium transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-spark">2 verified</span>
        <span className="text-warn">1 mismatched</span>
        <span className="text-alert">1 not found</span>
      </div>
    </div>
  )
}
