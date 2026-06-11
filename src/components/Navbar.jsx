import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Gold', href: '#gold' },
    { label: 'Silver', href: '#silver' },
    { label: 'Location', href: '#location' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <header className="site-header" aria-label="Site header">
      <div className="header-top">
        <div className="header-inner container">
          <a href="#top" className="logo-wrap" aria-label="Harsha Jewellers home">
            <img src="/logo.png" alt="Harsha Jewellers logo" className="logo-img" width={72} height={72} />
            <h1 className="logo-text">HARSHA JEWELLERS</h1>
          </a>

          <div className="patrons" aria-label="Patrons">
            <span>* V NAGA RAJARAO</span>
            <span>* V NAGA BHUSHANA</span>
          </div>

          <button
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(current => !current)}
            type="button"
          >
            <span className="hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="primary-navigation"
        className={`main-nav${open ? ' nav-open' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container nav-bar">
          {links.map(link => (
            <a key={link.label} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
