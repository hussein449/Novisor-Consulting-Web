import { Link } from 'react-router'
import Icon from './Icon.jsx'

const buttonStyles = {
  primary: 'bg-ink text-white hover:bg-ink-raised',
  accent: 'bg-spark text-ink hover:bg-snow',
  outline: 'border border-line-strong bg-white text-ink hover:border-ink',
  outlineDark: 'border border-white/20 text-snow hover:border-white/50',
}

export function ButtonLink({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-[15px] font-medium transition-colors ${buttonStyles[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}

// Invisible padding around small text links so they are comfortable to tap (about 44px tall) without changing layout.
export const hitArea = "relative before:absolute before:-inset-x-1 before:-inset-y-2.5 before:content-['']"

export function ArrowLink({ to, href, tone = 'dark', className = '', children }) {
  const cls = `group inline-flex items-center gap-2 text-[15px] font-medium transition-colors ${hitArea} ${
    tone === 'dark' ? 'text-ink hover:text-spark-deep' : 'text-spark hover:text-snow'
  } ${className}`
  const content = (
    <>
      {children}
      <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
    </>
  )
  return to ? (
    <Link to={to} className={cls}>
      {content}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {content}
    </a>
  )
}

// Full-width band with a hairline on top; every section on every page uses it.
export function Section({ id, tone, className = '', children }) {
  return (
    <section id={id} className={`border-t border-line px-5 py-20 sm:px-8 sm:py-24 ${tone === 'white' ? 'bg-white' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

// Title on the left, supporting text on the right, bottoms aligned.
export function SectionHeader({ label, title, intro }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
      <div>
        <p className="text-sm font-medium text-spark-deep">{label}</p>
        <h2 className="mt-3 text-3xl leading-[1.15] font-semibold tracking-[-0.025em] text-ink sm:text-[40px]">{title}</h2>
      </div>
      {intro && <p className="text-lg leading-relaxed text-body lg:pb-1">{intro}</p>}
    </div>
  )
}

export function PageHeader({ label, title, intro, children }) {
  return (
    <header className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-spark-deep">{label}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[56px]">
            {title}
          </h1>
          {intro && <p className="text-lg leading-relaxed text-body lg:pb-2">{intro}</p>}
        </div>
        {children}
      </div>
    </header>
  )
}

export function Dot({ className = 'bg-spark-deep' }) {
  return <span aria-hidden="true" className={`mt-[0.6em] size-1.5 shrink-0 rounded-full ${className}`} />
}
