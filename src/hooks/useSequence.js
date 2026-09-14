import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motion.js'

// Plays an illustration once: holds each step for durations[step] ms while `playing`,
// stops on the last step (the finished picture) and calls onDone.
// Reduced-motion users get the finished picture straight away.
export default function useSequence(durations, playing, onDone) {
  const last = durations.length - 1
  const [reduced] = useState(prefersReducedMotion)
  const [step, setStep] = useState(0)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  const current = reduced ? last : step

  useEffect(() => {
    if (!playing) return
    if (current >= last) {
      onDoneRef.current?.()
      return
    }
    const id = setTimeout(() => setStep((s) => s + 1), durations[current])
    return () => clearTimeout(id)
  }, [playing, current, last, durations])

  return current
}
