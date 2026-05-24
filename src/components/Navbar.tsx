import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import './Navbar.css'

const ourWorkLinks = [
  { to: '/our-work/strategic-objectives', label: 'Strategic Objectives' },
  { to: '/our-work/thematic-areas', label: 'Thematic Areas & Goals' },
  { to: '/our-work/strategy-of-impact', label: 'Strategy of Impact' },
]

const getInvolvedLinks = [
  { to: '/get-involved/volunteer', label: 'Volunteer' },
  { to: '/get-involved/partner', label: 'Partner With Us' },
  { to: '/donate', label: 'Donate' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [involvedOpen, setInvolvedOpen] = useState(false)
  const location = useLocation()
  const workRef = useRef<HTMLLIElement>(null)
  const involvedRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setWorkOpen(false)
    setInvolvedOpen(false)
  }, [location])

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (workRef.current && !workRef.current.contains(e.target as Node)) setWorkOpen(false)
      if (involvedRef.current && !involvedRef.current.contains(e.target as Node)) setInvolvedOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isOurWorkActive = location.pathname.startsWith('/our-work')
  const isInvolvedActive = location.pathname.startsWith('/get-involved')

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Heart size={20} fill="currentColor" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">StreetCare</span>
            <span className="navbar__logo-sub">Generations Initiative</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                About Us
              </NavLink>
            </li>

            {/* Our Work dropdown */}
            <li ref={workRef} className="navbar__dropdown-wrap">
              <button
                className={`navbar__link navbar__dropdown-btn${isOurWorkActive ? ' navbar__link--active' : ''}`}
                onClick={() => { setWorkOpen(v => !v); setInvolvedOpen(false) }}
                aria-expanded={workOpen}
                aria-haspopup="true"
              >
                Our Work <ChevronDown size={15} className={`navbar__chevron${workOpen ? ' navbar__chevron--open' : ''}`} />
              </button>
              {workOpen && (
                <ul className="navbar__dropdown" role="menu">
                  {ourWorkLinks.map(l => (
                    <li key={l.to} role="none">
                      <NavLink to={l.to} role="menuitem" className={({ isActive }) => isActive ? 'navbar__dropdown-link navbar__dropdown-link--active' : 'navbar__dropdown-link'}>
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Get Involved dropdown */}
            <li ref={involvedRef} className="navbar__dropdown-wrap">
              <button
                className={`navbar__link navbar__dropdown-btn${isInvolvedActive ? ' navbar__link--active' : ''}`}
                onClick={() => { setInvolvedOpen(v => !v); setWorkOpen(false) }}
                aria-expanded={involvedOpen}
                aria-haspopup="true"
              >
                Get Involved <ChevronDown size={15} className={`navbar__chevron${involvedOpen ? ' navbar__chevron--open' : ''}`} />
              </button>
              {involvedOpen && (
                <ul className="navbar__dropdown" role="menu">
                  {getInvolvedLinks.map(l => (
                    <li key={l.to} role="none">
                      <NavLink to={l.to} role="menuitem" className={({ isActive }) => isActive ? 'navbar__dropdown-link navbar__dropdown-link--active' : 'navbar__dropdown-link'}>
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/news" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                News & Stories
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
                Contact
              </NavLink>
            </li>
          </ul>

          <Link to="/donate" className="btn btn-amber navbar__donate-btn">
            <Heart size={15} fill="currentColor" /> Donate
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!mobileOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            <li><NavLink to="/" end className="navbar__mobile-link">Home</NavLink></li>
            <li><NavLink to="/about" className="navbar__mobile-link">About Us</NavLink></li>

            <li className="navbar__mobile-group">
              <button className="navbar__mobile-group-btn" onClick={() => setWorkOpen(v => !v)}>
                Our Work <ChevronDown size={15} className={workOpen ? 'navbar__chevron--open' : ''} />
              </button>
              {workOpen && (
                <ul className="navbar__mobile-sub">
                  {ourWorkLinks.map(l => (
                    <li key={l.to}><NavLink to={l.to} className="navbar__mobile-sub-link">{l.label}</NavLink></li>
                  ))}
                </ul>
              )}
            </li>

            <li className="navbar__mobile-group">
              <button className="navbar__mobile-group-btn" onClick={() => setInvolvedOpen(v => !v)}>
                Get Involved <ChevronDown size={15} className={involvedOpen ? 'navbar__chevron--open' : ''} />
              </button>
              {involvedOpen && (
                <ul className="navbar__mobile-sub">
                  {getInvolvedLinks.map(l => (
                    <li key={l.to}><NavLink to={l.to} className="navbar__mobile-sub-link">{l.label}</NavLink></li>
                  ))}
                </ul>
              )}
            </li>

            <li><NavLink to="/news" className="navbar__mobile-link">News & Stories</NavLink></li>
            <li><NavLink to="/contact" className="navbar__mobile-link">Contact</NavLink></li>
            <li>
              <Link to="/donate" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                <Heart size={15} fill="currentColor" /> Donate Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
