import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
    const [prices, setPrices] = useState({ goldPerGram: 8040, silverPerGram: 108 })
    useEffect(() => {
        fetch('/prices.json')
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setPrices(d) })
            .catch(() => { })
    }, [])

    return (
        <div>
            {/* Hero matching the provided design */}
            <section className="hj-hero" id="top">
                <div className="hj-hero-grid">
                    <div className="hj-hero-copy">
                        <p className="lead">
                            At Harsha Jewellers, we bring you the finest collection of gold and silver ornaments, crafted with perfection and certified for purity. Whether you are looking for traditional designs or modern styles, we have something special for every occasion
                        </p>

                        <div id="prices" className="prices-card" aria-label="Today's Prices">
                            <h3>Today's Prices:</h3>
                            <div className="price-row"><span>Gold</span><span>₹{prices.goldPerGram}/gm</span></div>
                            <div className="divider" />
                            <div className="price-row"><span>Silver</span><span>₹{prices.silverPerGram}/gm</span></div>
                        </div>
                    </div>
                    <div className="hj-hero-image-wrap">
                        <img className="hj-hero-image" src="/hero.png" alt="Gold bangles" />
                    </div>
                </div>
            </section>

            {/* Placeholder sections to anchor links */}
            <section className="container" id="location" style={{ marginTop: 16 }}>
                <h2>Location</h2>
                <p>Visit our showroom. Add your address/map here.</p>
            </section>

            <section className="container" id="contact" style={{ marginTop: 16, marginBottom: 28 }}>
                <h2>Contact Us</h2>
                <ContactForm />
            </section>
        </div>
    )
}
