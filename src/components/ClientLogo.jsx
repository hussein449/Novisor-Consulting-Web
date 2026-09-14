import Icon from './Icon.jsx'

// A client's logo. Clients without one get a wordmark (or a neutral mark at small size).
export default function ClientLogo({ client, size = 'large', className = '' }) {
  const small = size === 'small'

  if (!client.logo) {
    if (small) {
      return (
        <span className={`flex size-8 items-center justify-center rounded-lg border border-line-strong text-muted ${className}`}>
          <Icon name="grid" className="size-4" />
        </span>
      )
    }
    return (
      <span className={`text-center text-[15px] leading-tight font-semibold tracking-[-0.01em] text-ink ${className}`}>
        {client.name}
      </span>
    )
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      loading={small ? 'eager' : 'lazy'}
      className={`w-auto object-contain ${(small ? client.barLogoClass : client.logoClass) ?? 'max-h-10'} ${className}`}
    />
  )
}
