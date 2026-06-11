export default function Footer() {
    return (
        <footer role="contentinfo" className="hj-footer">
            <div className="container hj-footer-inner">
                <div className="hj-footer-brand">
                    <img src="/logo.png" alt="" aria-hidden="true" className="hj-footer-logo" />
                    <div>
                        <strong className="hj-footer-name">HARSHA JEWELLERS</strong>
                        <p className="hj-footer-tagline">Your satisfaction is our priority.</p>
                    </div>
                </div>
                <nav className="hj-footer-nav" aria-label="Footer navigation">
                    <a href="#prices">Gold Prices</a>
                    <a href="#collections">Collections</a>
                    <a href="#location">Location</a>
                    <a href="#contact">Contact</a>
                </nav>
                <small className="hj-footer-copy">
                    &copy; {new Date().getFullYear()} Harsha Jewellers. All rights reserved.
                </small>
            </div>
        </footer>
    )
}