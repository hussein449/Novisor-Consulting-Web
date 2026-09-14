import { Link } from 'react-router'
import Logo from './Logo.jsx'
import { navLinks, site } from '../data/site.js'

const buildLinks = [
  { label: 'Novi for support', to: '/what-we-build' },
  { label: 'Novi for leads', to: '/what-we-build' },
  { label: 'Lead extraction', to: '/what-we-build#services' },
  { label: 'Custom software', to: '/what-we-build#services' },
]

function Column({ title, className = '', children }) {
  return (
    <div className={className}>
      <h2 className="text-sm font-semibold text-snow">{title}</h2>
      <ul className="mt-2 text-sm [&_a]:inline-block [&_a]:py-2.5 sm:[&_a]:py-1">{children}</ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-12 pb-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Phones and tablets: brand and contact span the width, the two link lists sit side by side */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" aria-label="Novisor home" className="inline-block py-1">
              <Logo tone="light" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              Novi, lead systems and custom software for businesses that run on messages, bookings and stock.
            </p>
          </div>
          <Column title="Pages">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-mist transition-colors hover:text-snow">
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="What we build">
            {buildLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-mist transition-colors hover:text-snow">
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Contact" className="col-span-2 lg:col-span-1">
            <li>
              <a href={`mailto:${site.email}`} className="text-mist transition-colors hover:text-snow">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneLink}`} className="text-mist transition-colors hover:text-snow">
                {site.phone}
              </a>
            </li>
            <li className="pt-2.5 text-mist sm:pt-1">
              {site.location}
              <span className="mt-1 block text-xs text-mist">Also in {site.secondaryLocation}</span>
            </li>
          </Column>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-mist">
          © {new Date().getFullYear()} {site.name} {site.tagline}
        </p>
      </div>
    </footer>
  )
}
