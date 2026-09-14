import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Starts each page at the top, or at the #section in the link.
// Keyed on every navigation, so clicking a link to the page you're already on also returns to the top.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
