import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'

const menuItems = [
  { path: '/', label: 'Accueil', icon: 'home' },
  { path: '/services', label: 'Services', icon: 'cog' },
  { path: '/portfolio', label: 'Portfolio', icon: 'star' },
  { path: '/contact', label: 'Contact', icon: 'mail' },
]

const PHONE_HREF = 'tel:+33652085070'
const PHONE_LABEL = '06 52 08 50 70'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu à chaque changement de page
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Bloque le scroll de la page + fermeture avec Échap quand le menu est ouvert
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b transition-shadow duration-300 ${
        scrolled ? 'border-gray-200 shadow-md' : 'border-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between" aria-label="Navigation principale">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center flex-shrink-0" aria-label="DB Plomberie, accueil">
          <img src="/logoDBblanc.png" alt="DB Plomberie" className="h-11 md:h-14 w-auto object-contain" />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `relative py-2 font-medium transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-primary after:origin-left after:transition-transform ${
                      isActive
                        ? 'text-primary after:scale-x-100'
                        : 'text-gray-700 hover:text-primary after:scale-x-0 hover:after:scale-x-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Icon name="phone" className="w-5 h-5" />
            {PHONE_LABEL}
          </a>
        </div>

        {/* Mobile : appel direct + burger */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={PHONE_HREF}
            aria-label={`Appeler le ${PHONE_LABEL}`}
            className="w-11 h-11 rounded-lg bg-primary text-white flex items-center justify-center active:bg-blue-800"
          >
            <Icon name="phone" className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="w-11 h-11 rounded-lg border border-gray-200 text-gray-800 flex items-center justify-center active:bg-gray-100"
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block w-5 h-0.5 bg-current rounded" />
              <span className="block w-5 h-0.5 bg-current rounded" />
              <span className="block w-5 h-0.5 bg-current rounded" />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile : panneau latéral */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-slate-900/60 md:hidden"
              aria-hidden="true"
            />
            <motion.aside
              id="menu-mobile"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 z-[60] h-full w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
            >
              <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 rounded-lg border border-gray-200 text-gray-800 flex items-center justify-center active:bg-gray-100"
                  aria-label="Fermer le menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto p-4 space-y-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-4 py-4 rounded-lg text-lg font-medium transition-colors ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-gray-800 active:bg-gray-100'
                        }`
                      }
                    >
                      <Icon name={item.icon} className="w-6 h-6" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="p-4 border-t border-gray-200 flex-shrink-0 space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-semibold text-lg active:bg-blue-800"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  {PHONE_LABEL}
                </a>
                <Link
                  to="/contact"
                  className="block text-center border-2 border-primary text-primary py-3.5 rounded-lg font-semibold active:bg-primary/10"
                >
                  Demander un devis gratuit
                </Link>
                <p className="text-center text-sm text-gray-500">
                  Toulouse et alentours · 7 j / 7
                  <span className="mx-2">·</span>
                  <Link to="/mentions-legales" className="underline">Mentions légales</Link>
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
