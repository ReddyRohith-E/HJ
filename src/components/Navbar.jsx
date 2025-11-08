export default function Navbar() {
    return (
        <header className="site-header" aria-label="Site header">
            <div className="header-top">
                <div className="header-inner container">
                    <a href="#top" className="logo-wrap" aria-label="Harsha Jewellers home">
                        {/* Replace emblem with real logo image */}
                        <img src="/logo.png" alt="Harsha Jewellers logo" className="logo-img" width={96} height={96} />
                        <h1 className="logo-text">HARSHA JEWELLERS</h1>
                    </a>
                    <div className="patrons" aria-label="Patrons">
                        <span className="patron">☆ V NAGA RAJARAO</span>
                        <span className="patron">☆ V NAGA BHUSHANA</span>
                    </div>
                </div>
            </div>
            <nav className="main-nav" aria-label="Primary navigation">
                <div className="container nav-bar">
                    <a href="#prices" className="nav-link">Gold</a>
                    <a href="#prices" className="nav-link">Silver</a>
                    <a href="#location" className="nav-link">Location</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>
            </nav>
        </header>
    )
}
