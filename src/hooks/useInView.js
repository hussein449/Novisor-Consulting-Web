import { useEffect, useState } from 'react'

// True once the element is on screen (or while it is, when `once` is false).
export default function useInView(ref, { threshold = 0.25, once = false } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!once) {
          setInView(entry.isIntersecting)
        } else if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, threshold, once])

  return inView
}
