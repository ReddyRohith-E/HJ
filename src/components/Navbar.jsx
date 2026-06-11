import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const links = [
        { label: 'Gold', href: '#prices' },
        { label: 'Silver', href: '#prices' },
        { label: 'Collections', href: '#collections' },
        { label: 'Location', href: '#location' },
        { label: 'Contact Us', href: '#contact' },
    ]
    return (
        <header className="site-header" aria-label="Site header">
            <div className="header-top">
                <div className="header-inner container">
                    <a href="#top" className="logo-wrap" aria-label="Harsha Jewellers home">
                        <img src="/logo.png" alt="Harsha Jewellers logo" className="logo-img" width={72} height={72} />
                        <div className="logo-text-block">
                            <h1 className="logo-text">HARSHA JEWELLERS</h1>
                            <p className="logo-sub">Gold · Silver · Diamonds</p>
                        </div>
                    </a>
                    <div className="patrons" aria-label="Patrons">
                        <span className="patron">☆ V NAGA RAJARAO</span>
                        <span className="patron">☆ V NAGA BHUSHANA</span>
                    </div>
                    {/* Hamburger for mobile */}
                    <button
                        className="hamburger"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        onClick={() => setOpen(o => !o)}
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>
            <nav className={`main-nav${open ? ' nav-open' : ''}`} aria-label="Primary navigation">
                <div className="container nav-bar">
                    {links.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="nav-link"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}