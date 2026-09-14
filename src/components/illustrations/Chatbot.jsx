import Icon from '../Icon.jsx'
import { LogoMark } from '../Logo.jsx'
import TypingDots from '../TypingDots.jsx'
import useSequence from '../../hooks/useSequence.js'
import { StatusDot, WindowBar } from './parts.jsx'

const INBOX = [
  { text: 'Is this still in stock?', time: '23:12' },
  { text: 'Where is my order?', time: '23:18' },
  { text: 'Do you have it in another size?', time: '23:26' },
  { text: 'What are your opening hours?', time: '23:31' },
  { text: 'Can someone call me back?', time: '23:40' },
  { text: 'Hello? Is anyone there?', time: '23:52' },
]
const BEFORE_TIMING = [700, 700, 700, 700, 700, 0]

export function ChatbotBefore({ playing, onDone }) {
  const step = useSequence(BEFORE_TIMING, playing, onDone)
  const count = step + 1
  const messages = INBOX.slice(0, count).reverse()

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <WindowBar icon="inbox" title="Support inbox" right={<StatusDot label="Team offline" dark={false} />} />
      <div className="relative flex-1 overflow-hidden px-4">
        <ul>
          {messages.map((m) => (
            <li key={m.time} className="flex animate-rise items-center gap-3 border-b border-line py-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cloud-deep text-muted">
                <Icon name="user" className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-semibold text-ink">Customer</span>
                <span className="block truncate text-[13px] text-body">{m.text}</span>
              </span>
              <span className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="text-[11px] text-muted tabular-nums">{m.time}</span>
                <span className="size-1.5 rounded-full bg-alert" />
              </span>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white" />
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
        <span className="flex items-center gap-2 text-[12px] font-medium text-alert-deep">
          <Icon name="clock" className="size-4" />
          First reply: tomorrow, 9:00
        </span>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-alert px-1.5 text-[11px] font-semibold text-white tabular-nums">
          {count}
        </span>
      </div>
    </div>
  )
}

// 0 question · 1 typing · 2 answer · 3 complaint · 4 typing · 5 handoff
const AFTER_TIMING = [900, 800, 1500, 1000, 800, 0]

function Bubble({ from, children }) {
  const visitor = from === 'visitor'
  return (
    <div
      className={`max-w-[86%] animate-rise px-3.5 py-2.5 text-[13px] leading-snug ${
        visitor
          ? 'self-end rounded-2xl rounded-br-sm bg-snow text-ink'
          : 'self-start rounded-2xl rounded-bl-sm bg-ink-raised text-snow'
      }`}
    >
      {children}
    </div>
  )
}

export function ChatbotAfter({ playing, onDone }) {
  const step = useSequence(AFTER_TIMING, playing, onDone)
  const typing = step === 1 || step === 4

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-soft">
      <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink">
            <LogoMark tone="light" className="h-3.5 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-semibold text-snow">Novi</span>
            <span className="block truncate text-[11px] text-mist">Answers from stock and order data</span>
          </span>
        </span>
        <StatusDot label="Online" />
      </div>

      <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden p-4">
        <Bubble from="visitor">Is this still in stock?</Bubble>
        {step >= 2 && (
          <div className="flex animate-rise flex-col items-start gap-1.5">
            <Bubble from="bot">Yes, it&apos;s in stock. Want me to reserve one for you?</Bubble>
            <span className="flex items-center gap-1.5 pl-1 text-[11px] text-mist">
              <Icon name="database" className="size-3" />
              Source: inventory · high confidence
            </span>
          </div>
        )}
        {step >= 3 && <Bubble from="visitor">I received the wrong item last week.</Bubble>}
        {step >= 5 && (
          <div className="flex animate-rise flex-col items-start gap-1.5">
            <Bubble from="bot">Sorry about that. I&apos;m passing you to a teammate now.</Bubble>
            <span className="pl-1 text-[11px] text-warn">Low confidence · handing over</span>
          </div>
        )}
        {typing && (
          <span className="self-start rounded-2xl rounded-bl-sm bg-ink-raised px-3.5 py-3">
            <TypingDots />
          </span>
        )}
        {step >= 5 && (
          <div className="flex animate-rise items-center gap-3 rounded-lg border border-white/10 bg-white/4 px-3 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-spark/15 text-spark">
              <Icon name="userCheck" className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[12.5px] font-semibold text-snow">Handed to the support team</span>
              <span className="block text-[11px] text-mist">Full chat history attached</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
