import Icon from '../components/Icon.jsx'
import { ButtonLink, hitArea, PageHeader, Section } from '../components/ui.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { site } from '../data/site.js'

export function ContactPage() {
  usePageTitle('Contact')
  const channels = [
    { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: 'message', label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
    { icon: 'phone', label: 'Phone', value: site.phone, href: `tel:${site.phoneLink}` },
    { icon: 'pin', label: 'Location', value: site.location, secondary: `Also in ${site.secondaryLocation}` },
  ]
  const nextSteps = [
    'You tell us where customers or colleagues get stuck: missed messages, messy leads or stock you can’t trust.',
    'We come back with what we would build, and what isn’t worth automating.',
    'If it makes sense, we scope a first version together and demo it early.',
  ]

  return (
    <>
      <PageHeader
        label="Contact"
        title="Tell us how customers reach you today."
        intro="Send a message on whichever channel suits you. We reply with a straight answer about what's worth building."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Reach us directly</h2>
            <ul className="mt-5 divide-y divide-line">
              {channels.map((channel) => (
                <li key={channel.label} className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3 text-[15px] text-body">
                    <Icon name={channel.icon} className="size-5 text-spark-deep" />
                    {channel.label}
                  </span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className={`text-right text-[15px] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink ${hitArea}`}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-right">
                      <span className="block text-[15px] font-medium text-ink">{channel.value}</span>
                      {channel.secondary && <span className="mt-0.5 block text-xs text-muted">{channel.secondary}</span>}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">What happens next</h2>
            <ol className="mt-5 divide-y divide-line">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4 py-4">
                  <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] leading-relaxed text-body">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </>
  )
}

export function NotFoundPage() {
  usePageTitle('Page not found')
  return (
    <PageHeader label="404" title="This page doesn't exist." intro="The link may be old, or the page may have moved.">
      <ButtonLink to="/" className="mt-10">
        Back to home
        <Icon name="arrowRight" className="size-4" />
      </ButtonLink>
    </PageHeader>
  )
}
