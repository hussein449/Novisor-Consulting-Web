import { useEffect } from 'react'

const SITE = 'Novisor'

// Sets the browser tab title for a page, e.g. "Use cases — Novisor".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Consulting and Technologies`
  }, [title])
}
