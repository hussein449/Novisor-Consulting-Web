import Icon from './Icon.jsx'
import { LogoMark } from './Logo.jsx'

function ChatItem({ item }) {
  if (item.from === 'visitor') {
    return (
      <p className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-snow px-3.5 py-2.5 text-sm leading-snug text-ink">
        {item.text}
      </p>
    )
  }
  if (item.from === 'bot') {
    return (
      <p className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-ink-raised px-3.5 py-2.5 text-sm leading-snug text-snow">
        {item.text}
      </p>
    )
  }
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-3.5 py-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-spark/15 text-spark">
        <Icon name={item.icon} className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-snow">{item.title}</span>
        <span className="block text-xs text-mist">{item.detail}</span>
      </span>
    </div>
  )
}

// A still conversation (or activity feed) used wherever a page needs an example.
export default function ChatExample({ title, subtitle, items, feed = false, className = '' }) {
  return (
    <figure className={`m-0 flex flex-col rounded-2xl bg-ink p-5 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-raised text-spark">
            {feed ? <Icon name="activity" className="size-4" /> : <LogoMark tone="light" className="h-4 w-[18px]" />}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-snow">{title}</span>
            <span className="block truncate text-xs text-mist">{subtitle}</span>
          </span>
        </span>
        <span className="shrink-0 text-xs text-mist">Example</span>
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-end gap-2.5">
        {items.map((item, i) => (
          <ChatItem key={i} item={item} />
        ))}
      </div>
    </figure>
  )
}
