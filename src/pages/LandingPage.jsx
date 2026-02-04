import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/landing.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">FALCONDALE</div>
          <nav className="nav-links">
            <a href="mailto:contact@falcondale.pro" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
            Quantum Intelligence.<br />
            Real-World Impact.
          </h1>
          <p className="hero-subtitle">
            Applied Quantum Machine Learning & Optimization
          </p>
        </section>

        {/* Contact Info Bar */}
        <section className="contact-bar">
          <div className="contact-item">
            <span className="contact-label">Contact</span>
            <a href="mailto:contact@falcondale.pro" className="contact-link">
              contact@falcondale.pro
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Hiring</span>
            <a href="mailto:hiring@falcondale.pro" className="contact-link">
              hiring@falcondale.pro
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Locations</span>
            <span className="contact-value">Delaware + Bilbao</span>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-header">
            <h2 className="section-title">Falcondale</h2>
          </div>
          
          <div className="about-content">
            <p className="about-text lead-text">
              We dedicate our expertise to discovering quantum methods that deliver 
              tangible advantages across industries—from advanced predictive 
              classification models to complex optimization challenges.
            </p>

            <p className="about-text">
              Our approach is rooted in rigorous analysis. We carefully evaluate 
              problem complexity and scale to determine where quantum computing 
              can truly excel. If classical methods already perform well for your 
              use case, we'll be the first to tell you.
            </p>

            <p className="about-text">
              Our philosophy centers on identifying problems where quantum 
              encoding and solving—whether for speed, performance, or both—can 
              be efficiently achieved with today's software and hardware stack.
            </p>

            <div className="highlights-grid">
              <div className="highlight-box">
                <div className="highlight-label">Proprietary Code</div>
                <div className="highlight-text">
                  Over 50,000 lines of bespoke code developing unique methodologies 
                  to enhance performance across industry-standard challenges.
                </div>
              </div>

              <div className="highlight-box">
                <div className="highlight-label">CDL Alumni</div>
                <div className="highlight-text">
                  Graduated from Creative Destruction Lab, Quantum stream, 
                  generation 2024–2025.
                </div>
              </div>

              <div className="highlight-box">
                <div className="highlight-label">Research Proven</div>
                <div className="highlight-text">
                  Demonstrated benefit in training QML models with smaller samples 
                  that generalize better.
                </div>
              </div>

              <div className="highlight-box">
                <div className="highlight-label">BIQAIN Program</div>
                <div className="highlight-text">
                  Part of the BIQAIN (Bizkaia Quantum Advanced Industries) program 
                  in Bizkaia, Spain.
                </div>
              </div>

              <div className="highlight-box">
                <div className="highlight-label">Ready to Deploy</div>
                <div className="highlight-text">
                  More than 10 QML and Optimization models available for 
                  immediate industry application.
                </div>
              </div>

              <div className="highlight-box">
                <div className="highlight-label">Multi-Industry</div>
                <div className="highlight-text">
                  Diverse applicability cases developed through participation 
                  in projects and PoCs across multiple industries.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h3 className="cta-title">Ready to explore quantum advantage?</h3>
          <div className="cta-links">
            <a href="mailto:contact@falcondale.pro" className="cta-link">
              <span>Get in Touch</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="mailto:hiring@falcondale.pro" className="cta-link secondary">
              <span>Join Our Team</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Falcondale</div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Falcondale. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
