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
            {/* ── Hero ── */}
            <section className="hj-hero" id="top">
                <div className="hj-hero-grid">
                    <div className="hj-hero-copy">
                        <p className="hj-tagline">Your satisfaction is our priority.</p>
                        <p className="lead">
                            At Harsha Jewellers, we bring you the finest collection of gold and silver ornaments,
                            crafted with perfection and certified for purity. Whether you are looking for
                            traditional designs or modern styles, we have something special for every occasion.
                        </p>
                        <div id="prices" className="prices-card" aria-label="Today's Prices">
                            <h3>Today's Prices</h3>
                            <div className="price-row">
                                <span>Gold (22K)</span>
                                <span>₹{prices.goldPerGram.toLocaleString('en-IN')}/gm</span>
                            </div>
                            <div className="divider" />
                            <div className="price-row">
                                <span>Silver</span>
                                <span>₹{prices.silverPerGram.toLocaleString('en-IN')}/gm</span>
                            </div>
                        </div>
                        <a href="#contact" className="btn hj-cta-btn">Enquire Now</a>
                    </div>
                    <div className="hj-hero-image-wrap">
                        <img className="hj-hero-image" src="/hero.png" alt="Gold bangles" />
                    </div>
                </div>
            </section>

            {/* ── About ── */}
            <section className="hj-about" id="about">
                <div className="container hj-about-inner">
                    <div className="hj-about-badge">Est. Since Generations</div>
                    <h2 className="hj-section-title">A Legacy Crafted in Gold</h2>
                    <p className="hj-about-text">
                        Harsha Jewellers has been a trusted name for generations, bringing heirloom-quality
                        craftsmanship to every family occasion. From bridal sets to everyday elegance, every
                        piece is BIS Hallmarked for purity and designed to be cherished for life.
                    </p>
                    <div className="hj-pillars">
                        <div className="hj-pillar">
                            <span className="hj-pillar-icon">🏅</span>
                            <strong>BIS Hallmarked</strong>
                            <small>Certified purity on every ornament</small>
                        </div>
                        <div className="hj-pillar">
                            <span className="hj-pillar-icon">✦</span>
                            <strong>Master Craftsmen</strong>
                            <small>Designs passed through generations</small>
                        </div>
                        <div className="hj-pillar">
                            <span className="hj-pillar-icon">💎</span>
                            <strong>Wide Collection</strong>
                            <small>Gold, Silver, Diamond — all occasions</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Collections ── */}
            <section className="hj-collections" id="collections">
                <div className="container">
                    <h2 className="hj-section-title hj-light-title">Our Collections</h2>
                    <p className="hj-collections-sub">Handpicked designs for every celebration</p>
                    <div className="hj-coll-grid">
                        <div className="hj-coll-card">
                            <div className="hj-coll-img-wrap">
                                <img src="/jw1.png" alt="Gold Necklaces" loading="lazy" />
                                <div className="hj-coll-overlay">
                                    <a href="#contact" className="btn hj-coll-btn">Enquire</a>
                                </div>
                            </div>
                            <div className="hj-coll-label">
                                <span className="hj-coll-name">Necklaces</span>
                                <span className="hj-coll-tag">Gold &amp; Silver</span>
                            </div>
                        </div>
                        <div className="hj-coll-card">
                            <div className="hj-coll-img-wrap">
                                <img src="/jw2.png" alt="Bangles Collection" loading="lazy" />
                                <div className="hj-coll-overlay">
                                    <a href="#contact" className="btn hj-coll-btn">Enquire</a>
                                </div>
                            </div>
                            <div className="hj-coll-label">
                                <span className="hj-coll-name">Bangles</span>
                                <span className="hj-coll-tag">Traditional &amp; Modern</span>
                            </div>
                        </div>
                        <div className="hj-coll-card">
                            <div className="hj-coll-img-wrap">
                                <img src="/jw3.png" alt="Earrings &amp; Rings" loading="lazy" />
                                <div className="hj-coll-overlay">
                                    <a href="#contact" className="btn hj-coll-btn">Enquire</a>
                                </div>
                            </div>
                            <div className="hj-coll-label">
                                <span className="hj-coll-name">Earrings &amp; Rings</span>
                                <span className="hj-coll-tag">Everyday Elegance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Location ── */}
            <section className="hj-location" id="location">
                <div className="container hj-location-inner">
                    <div className="hj-location-info">
                        <h2 className="hj-section-title">Visit Our Showroom</h2>
                        <p className="hj-location-text">
                            We welcome you to experience our jewellery in person. Our showroom displays the
                            full breadth of our collection, with expert staff ready to guide you.
                        </p>
                        <ul className="hj-address-list">
                            <li>
                                <span className="hj-addr-icon">📍</span>
                                <span>Harsha Jewellers, Main Road, Your City — 500 001</span>
                            </li>
                            <li>
                                <span className="hj-addr-icon">🕐</span>
                                <span>Mon – Sat: 10:00 AM – 8:00 PM<br />Sun: 11:00 AM – 6:00 PM</span>
                            </li>
                            <li>
                                <span className="hj-addr-icon">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn hj-map-btn"
                        >
                            Open in Maps ↗
                        </a>
                    </div>
                    <div className="hj-map-wrap">
                        <iframe
                            title="Harsha Jewellers location map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.48!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQ4LjAiTiA3OMKwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section className="hj-contact-section" id="contact">
                <div className="container hj-contact-inner">
                    <div className="hj-contact-copy">
                        <h2 className="hj-section-title">Get in Touch</h2>
                        <p className="hj-contact-text">
                            Have a question about a piece, want to book a custom order, or plan a visit?
                            Send us a message and we'll get back to you within the day.
                        </p>
                    </div>
                    <div className="hj-contact-form-wrap">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
