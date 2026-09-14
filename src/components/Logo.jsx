import { site } from '../data/site.js'

const SPARK_PATH =
  'M0 -14 C 1.7 -3.5, 2.8 -2.2, 14 0 C 2.8 2.2, 1.7 3.5, 0 14 C -1.7 3.5, -2.8 2.2, -14 0 C -2.8 -2.2, -1.7 -3.5, 0 -14 Z'

// The speech-bubble mark from design/exports/novisor-logo-horizontal-*.svg
export function LogoMark({ tone = 'dark', className = 'h-9 w-10' }) {
  const stroke = tone === 'dark' ? '#0E1428' : '#FFFFFF'
  return (
    <svg viewBox="9 19 72 64" className={className} aria-hidden="true">
      <rect x="14" y="24" width="62" height="40" rx="16" fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <path d="M28 64 L28 78 L46 64" fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path transform="translate(45 44)" d={SPARK_PATH} fill="#22D3EE" />
    </svg>
  )
}

export default function Logo({ tone = 'dark' }) {
  const isDark = tone === 'dark'
  return (
    <span className="flex items-center gap-3">
      <LogoMark tone={tone} className="h-9 w-10 shrink-0" />
      <span className="flex flex-col gap-[5px]">
        <span className={`text-[25px] leading-none font-bold tracking-[-0.05em] ${isDark ? 'text-ink' : 'text-snow'}`}>
          {site.name}
        </span>
        <span className={`text-[6.5px] leading-none font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-muted' : 'text-mist'}`}>
          {site.tagline}
        </span>
      </span>
    </span>
  )
}

export { SPARK_PATH }
