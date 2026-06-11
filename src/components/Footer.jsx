export default function Footer() {
  return (
    <footer role="contentinfo" className="hj-footer">
      <div className="container hj-footer-inner">
        <a href="#top" className="footer-brand" aria-label="Harsha Jewellers home">
          <img src="/logo.png" alt="" aria-hidden="true" className="footer-logo" />
          <span>HARSHA JEWELLERS</span>
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#gold">Gold</a>
          <a href="#silver">Silver</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>

        <small>&copy; {new Date().getFullYear()} Harsha Jewellers. All rights reserved.</small>
      </div>
    </footer>
  )
}
