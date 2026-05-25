'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Popular");

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>ICE.</div>
        <nav className={styles.nav}>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Lookbook</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.headerIcons}>
          <span>🔍</span>
          <span>🛍️</span>
          <span>👤</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroHeadline}>ICE<br/>HOODIE</h1>
          <p className={styles.heroSubtext}>
            Designed With Precision And Built For Everyday Movement, The ICE Hoodie Is A Study In Clean Lines, Timeless Silhouette.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>Shop Now</button>
            <button className={styles.btnOutline}>View Lookbook</button>
          </div>
        </div>

        <div className={styles.ratingBadge}>
          <div className={styles.ratingStars}>★★★★★ 4.9</div>
          <div className={styles.ratingText}><strong>10K+</strong> CUSTOMERS</div>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/ice_hero_light.png"
            alt="ICE Hoodie Model"
            fill
            priority
            className={styles.heroImage}
          />
        </div>

        <div className={styles.verticalText}>ICE HOODIE</div>
      </section>

      {/* Logos Strip */}
      <div className={styles.logosStrip}>
        <span>VOGUE</span>
        <span>GQ</span>
        <span>HYPEBEAST</span>
        <span>HIGHSNOBIETY</span>
        <span>COMPLEX</span>
      </div>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Our Product</h2>
        <p className={styles.sectionSubtitle}>
          Discover our most popular hoodies — crafted from premium materials, built for versatility, and designed for comfort that lasts beyond the trend.
        </p>

        <div className={styles.filterPills}>
          {["Popular", "New Arrivals", "Trending Fashion", "Essentials", "Oversized", "Premium"].map(filter => (
            <button 
              key={filter} 
              className={`${styles.filterPill} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {[
            { img: "ice_product_1.png", name: "Classic Hoodie", price: "$79.00" },
            { img: "ice_product_2.png", name: "Classic Hoodie", price: "$79.00" },
            { img: "ice_product_3.png", name: "Classic Hoodie", price: "$79.00" },
            { img: "ice_product_4.png", name: "Classic Hoodie", price: "$79.00" },
          ].map((item, idx) => (
            <div key={idx} className={styles.productCard}>
              <div className={styles.productImageWrapper}>
                <Image src={`/${item.img}`} alt={item.name} fill />
                <div className={styles.cartIcon}>🛒</div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productName}>{item.name}</span>
                <span className={styles.productPrice}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature 1 */}
      <section className={styles.featureSection}>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>The Commute: Where Motion Meets Minimal Design</h2>
          <p className={styles.featureDesc}>
            Early mornings. Late nights. Unpredictable weather. The city demands gear that moves with you — built for the rigors of motion. The ICE Hoodie balances the needs of the urban environment with the flow of a modern lifestyle. It's a piece crafted for visibility, balance, and subtle style because true performance is effortless.
          </p>
        </div>
        <div className={styles.featureImageWrapper}>
          <Image src="/ice_feature_1.png" alt="Feature 1" fill style={{objectFit: 'cover'}} />
        </div>
      </section>

      {/* Feature 2 */}
      <section className={styles.featureSection}>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>Inside the Studio: Where Minimal Design Becomes Expression</h2>
          <p className={styles.featureDesc}>
            In the calm of a studio, creativity takes center stage. ICE Hoodie is shaped by intention and purpose — a blank canvas for self-expression. The freedom to create is a process, and the foundation for every raw, authentic, and deliberate choice. It's a relationship between material — and every layer has a story of quiet strength.
          </p>
        </div>
        <div className={styles.featureImageWrapper}>
          <Image src="/ice_feature_2.png" alt="Feature 2" fill style={{objectFit: 'cover'}} />
        </div>
      </section>

      {/* Feature 3 */}
      <section className={styles.featureSection}>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>The ICE Mindset: Built for Comfort Change.</h2>
          <p className={styles.featureDesc}>
            At ICE, we believe comfort is a continuous experience. It's more than fabric; it's a feeling — a state of mind that empowers everyday transitions. Inspired by architecture and structure, our pieces are built to adapt — from early mornings to late nights.
          </p>
          <button className={styles.btnOutline} style={{marginTop: '2rem'}}>Learn more</button>
        </div>
        <div className={styles.featureImageWrapper}>
          <Image src="/ice_hero_light.png" alt="Feature 3" fill style={{objectFit: 'cover'}} />
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>The ICE Collective</h2>
        <p className={styles.sectionSubtitle}>
          Early adopters to local leaders, our community continues to define what modern comfort looks like. Here's what they're saying about their ICE experience.
        </p>

        <div className={styles.testimonialsGrid}>
          {[1,2,3,4].map((i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.ratingStars}>★★★★★</div>
              <p className={styles.testimonialQuote}>
                "Every time I wear my ICE hoodie, someone asks where it's from. The quality, the fit - it's on another level."
              </p>
              <div className={styles.testimonialUser}>
                <div className={styles.userAvatar}></div>
                <div>
                  <div className={styles.userName}>Sarah M.</div>
                  <div className={styles.userHandle}>@sarahm</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div>
          <h2 className={styles.newsletterTitle}>Be First to Know When the Next Drop Lands.</h2>
          <p className={styles.newsletterSubtext}>
            Get early access to new collections, limited releases, and exclusive community updates.
          </p>
        </div>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <label>Stay up to date</label>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className={styles.submitArrow}>➔</button>
          </div>
          <p style={{fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-secondary)'}}>
            By subscribing, you agree to our Privacy Policy.
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <h2>ICE.</h2>
          <p>Built for motion. Built for the everyday.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Hoodies</a></li>
              <li><a href="#">New Drops</a></li>
              <li><a href="#">Essentials</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <span>© 2026 ICE Apparel. All rights reserved.</span>
        <div style={{display: 'flex', gap: '2rem'}}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </main>
  );
}
