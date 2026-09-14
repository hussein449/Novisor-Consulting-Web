import Icon from '../Icon.jsx'

export function StatusDot({ label, dark = true }) {
  return (
    <span className={`flex shrink-0 items-center gap-1.5 text-[11px] font-medium ${dark ? 'text-mist' : 'text-muted'}`}>
      <span className={`size-1.5 rounded-full ${dark ? 'bg-spark' : 'bg-line-strong'}`} />
      {label}
    </span>
  )
}

// Top bar shared by every mock window.
export function WindowBar({ icon, title, right, dark = false }) {
  return (
    <div className={`flex items-center justify-between gap-3 border-b px-4 py-3 ${dark ? 'border-white/8' : 'border-line'}`}>
      <span className={`flex min-w-0 items-center gap-2 text-[13px] font-semibold ${dark ? 'text-snow' : 'text-ink'}`}>
        <Icon name={icon} className={`size-4 shrink-0 ${dark ? 'text-spark' : 'text-muted'}`} />
        <span className="truncate">{title}</span>
      </span>
      {right}
    </div>
  )
}

export function Bars({ widths, className = 'bg-line' }) {
  return (
    <span className="flex flex-col gap-1.5">
      {widths.map((w, i) => (
        <span key={i} className={`block h-1.5 rounded-full ${className}`} style={{ width: w }} />
      ))}
    </span>
  )
}
