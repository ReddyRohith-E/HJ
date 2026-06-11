import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm.jsx'

const collections = [
  {
    id: 'gold',
    title: 'Gold Ornaments',
    image: '/jw1.png',
    alt: 'Gold necklace collection',
    copy: 'Hallmarked gold designs for weddings, festivals, and everyday wear.',
  },
  {
    id: 'silver',
    title: 'Silver Articles',
    image: '/jw2.png',
    alt: 'Silver jewellery collection',
    copy: 'Classic silver pieces, gifting articles, and polished daily essentials.',
  },
  {
    id: 'diamonds',
    title: 'Diamond Selection',
    image: '/jw3.png',
    alt: 'Diamond jewellery collection',
    copy: 'Elegant rings, earrings, and special occasion pieces with clear guidance.',
  },
]

export default function Home() {
  const [prices, setPrices] = useState({ goldPerGram: 8040, silverPerGram: 108 })

  useEffect(() => {
    fetch('/prices.json')
      .then(response => (response.ok ? response.json() : null))
      .then(data => {
        if (data) setPrices(data)
      })
      .catch(() => null)
  }, [])

  return (
    <div className="home-page">
      <section className="hj-hero" id="top">
        <div className="hj-hero-grid">
          <div className="hj-hero-copy">
            <p className="lead">
              At Harsha Jewellers, we bring you the finest collection of gold and silver ornaments,
              crafted with perfection and certified for purity. Whether you are looking for traditional
              designs or modern styles, we have something special for every occasion. Our jewellery is
              designed to blend elegance with craftsmanship, ensuring every piece is a timeless treasure.
            </p>

            <div id="prices" className="price-block" aria-label="Today's prices">
              <h2>Today's Prices:</h2>
              <div className="prices-card">
                <div className="price-row">
                  <span>Gold</span>
                  <span>: &#8377;{prices.goldPerGram.toLocaleString('en-IN')}/gm</span>
                </div>
                <div className="divider" />
                <div className="price-row">
                  <span>Silver</span>
                  <span>: &#8377;{prices.silverPerGram.toLocaleString('en-IN')}/gm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hj-hero-image-wrap">
            <img className="hj-hero-image" src="/hero.png" alt="Gold bangles displayed in the showroom" />
          </div>
        </div>
      </section>

      <section className="collections-section" aria-labelledby="collections-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Crafted collections</p>
            <h2 id="collections-title">Designed for every celebration</h2>
          </div>

          <div className="collection-grid">
            {collections.map(item => (
              <article className="collection-card" id={item.id} key={item.id}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="collection-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <a href="#contact" className="text-link">Enquire</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section" id="location" aria-labelledby="location-title">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Visit our showroom</p>
            <h2 id="location-title">A calm place to choose your next piece</h2>
            <p>
              Explore our gold, silver, and diamond collections in person with guidance from
              experienced staff.
            </p>
          </div>

          <div className="location-details" aria-label="Showroom details">
            <div>
              <span>Address</span>
              <strong>Harsha Jewellers, Main Road, Your City - 500 001</strong>
            </div>
            <div>
              <span>Hours</span>
              <strong>Mon - Sat: 10:00 AM - 8:00 PM</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact us</p>
            <h2 id="contact-title">Tell us what you are looking for</h2>
            <p>
              Share the ornament, occasion, budget, or visit timing you have in mind and we will
              respond with the next step.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  )
}
