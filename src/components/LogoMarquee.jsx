import { Link } from 'react-router'
import ClientLogo from './ClientLogo.jsx'
import { clients } from '../data/clients.js'

// A slow strip of client logos. It pauses on hover or keyboard focus, logos turn to colour on hover,
// and visitors who prefer reduced motion get a still, wrapped row instead.
export default function LogoMarquee() {
  const loop = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
      <ul className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {loop.map((client, i) => {
          const duplicate = i >= clients.length
          return (
            <li key={`${client.caseId}-${i}`} aria-hidden={duplicate || undefined} className={duplicate ? 'motion-reduce:hidden' : ''}>
              <Link
                to={`/use-cases#${client.caseId}`}
                tabIndex={duplicate ? -1 : undefined}
                className="group flex h-24 w-56 items-center justify-center rounded-2xl border border-line bg-white px-8 transition-colors hover:border-ink sm:h-28 sm:w-64"
              >
                <ClientLogo
                  client={client}
                  className="opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
