import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './motion.js'

// Types `text` out once per mount, pausing briefly after spaces and punctuation.
// Returns how many characters are visible. Reduced-motion users get the full text.
export default function useTypewriter(text, { startDelay = 350, speed = 48 } = {}) {
  const [reduced] = useState(prefersReducedMotion)
  const [count, setCount] = useState(0)

  const visible = reduced ? text.length : count

  useEffect(() => {
    if (reduced || count >= text.length) return
    const previous = text[count - 1]
    const delay = count === 0 ? startDelay : /[.?!,]/.test(previous) ? speed * 7 : previous === ' ' ? speed * 1.6 : speed
    const id = setTimeout(() => setCount((c) => c + 1), delay)
    return () => clearTimeout(id)
  }, [count, reduced, text, startDelay, speed])

  return visible
}
