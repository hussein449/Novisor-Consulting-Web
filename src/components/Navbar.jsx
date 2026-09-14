import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { ButtonLink } from './ui.jsx'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid ? 'border-line bg-white/95 backdrop-blur' : 'border-transparent bg-cloud'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid h-[72px] max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]"
      >
        <Link to="/" className="justify-self-start py-1" aria-label="Novisor home">
          <Logo />
        </Link>

        <ul className="hidden h-full items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.to} className="h-full">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative flex h-full items-center text-[14px] transition-colors xl:text-[15px] after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-ink ${
                    isActive ? 'text-ink after:opacity-100' : 'text-body after:opacity-0 hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 justify-self-end">
          <div className="hidden sm:block">
            <ButtonLink to="/contact" className="h-10 px-4 text-sm">
              Start a conversation
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-lg text-ink hover:bg-cloud-deep lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-line last:border-0">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 text-base ${isActive ? 'font-medium text-ink' : 'text-body'}`
                  }
                >
                  {link.label}
                  <Icon name="arrowRight" className="size-4 text-muted" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 sm:hidden">
            <ButtonLink to="/contact" className="w-full">
              Start a conversation
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  )
}
