export default function Footer() {
    return (
        <footer role="contentinfo">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span aria-hidden="true" style={{ width: 10, height: 10, background: 'var(--color-gold)', borderRadius: 2, display: 'inline-block' }}></span>
                    <strong>Harsha Jewellers</strong>
                </div>
                <small>&copy; {new Date().getFullYear()} Harsha Jewellers. All rights reserved.</small>
            </div>
        </footer>
    )
}
