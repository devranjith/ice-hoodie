'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleBuyRequest = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate an API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  const scrollToBuy = () => {
    document.getElementById("buy-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in`}>
        <div className={styles.heroBackground}>
          <Image
            src="/ice_hoodie_main.png"
            alt="ICE Hoodie Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>STAY FROSTY.</h1>
          <p className={styles.subtitle}>The ultimate premium techwear hoodie. Built for the cold, designed for the future.</p>
          <button onClick={scrollToBuy} className={styles.ctaButton}>
            Request Yours Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>COLD AS ICE.</h2>
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} glass-panel`}>
            <div className={styles.featureIcon}>❄️</div>
            <h3 className={styles.featureTitle}>Thermal Insulation</h3>
            <p className={styles.featureDesc}>Advanced micro-fleece lining traps body heat while remaining incredibly breathable, keeping you warm without the bulk.</p>
          </div>
          <div className={`${styles.featureCard} glass-panel`}>
            <div className={styles.featureIcon}>💎</div>
            <h3 className={styles.featureTitle}>Premium Fabric</h3>
            <p className={styles.featureDesc}>Woven with high-density threads that provide a sleek, matte finish with subtle icy reflections under direct light.</p>
          </div>
          <div className={`${styles.featureCard} glass-panel`}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Minimalist Fit</h3>
            <p className={styles.featureDesc}>Engineered for a perfectly draped silhouette. No loud logos, just pure, unadulterated aesthetic.</p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className={styles.section}>
        <div className={styles.gallery}>
          <div className={styles.galleryImageWrapper}>
            <Image
              src="/ice_hoodie_detail.png"
              alt="ICE Hoodie Fabric Detail"
              width={800}
              height={800}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryText}>
            <h3>Uncompromising Detail</h3>
            <p>
              Every stitch of the ICE hoodie has been meticulously planned. From the frosted metallic aglets on the drawstrings to the reinforced, hidden seam pockets, this isn't just clothing—it's wearable architecture.
            </p>
            <br />
            <p>
              Experience the cold-weather gear that redefines what a hoodie can be.
            </p>
          </div>
        </div>
      </section>

      {/* Buy/Contact Section */}
      <section id="buy-section" className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>SECURE YOUR ICE.</h2>
        <div className={`${styles.contactForm} glass-panel`}>
          {formStatus === "success" ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Request Received.</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We'll be in touch shortly to finalize your order.</p>
              <button 
                onClick={() => setFormStatus("idle")} 
                style={{ marginTop: '2rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1.5rem', borderRadius: '50px', cursor: 'pointer' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleBuyRequest} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="size" className={styles.label}>Size Preference</label>
                <input type="text" id="size" required className={styles.input} placeholder="e.g. Medium, Large" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Additional Details (Optional)</label>
                <textarea id="message" className={styles.textarea} placeholder="Any specific requests or questions?"></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending Request..." : "Request to Buy"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} ICE Apparel. All rights reserved. Stay Frosty.</p>
      </footer>
    </main>
  );
}
