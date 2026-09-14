export default function TypingDots({ className = '' }) {
  return (
    <span className={`flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span className="size-[7px] animate-bob rounded-full bg-spark" />
      <span className="size-[7px] animate-bob rounded-full bg-spark [animation-delay:150ms]" />
      <span className="size-[7px] animate-bob rounded-full bg-spark [animation-delay:300ms]" />
    </span>
  )
}
