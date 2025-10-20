export default function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg, rgba(10,102,73,0.95) 0%, rgba(200,169,81,0.88) 100%)',
          color: '#fff',
        }}
      >
        <div className="layout-container hero__content">
          <h1 className="hero__heading">Preserving culture, celebrating community.</h1>
          <p className="hero__description">
            NAMAH brings the Namboothiri community together through cultural celebrations, educational programs, and support networks for families across Canada.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--light" href="/events/electronics-masterclass-for-kids">
              Discover the Electronics Masterclass
            </a>
            <a className="btn btn--outline-light" href="/events">
              Browse all events
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="layout-container cards-grid cards-grid--two">
          <div className="card card--feature">
            <span className="pill">Featured Program</span>
            <h2 className="section-title">Electronics Masterclass for Kids</h2>
            <p className="section-subtitle">
              A 12-month makerspace journey for Grades 3–12 featuring circuits, sensors, 555 timer builds, and Raspberry Pi coding led by NAMAH mentors.
            </p>
            <ul className="feature-list">
              <li>24 hands-on lab sessions across the school year</li>
              <li>Leveled tracks for elementary, middle, and high school learners</li>
              <li>Focus on safety, creativity, and real-world engineering skills</li>
            </ul>
            <div className="card__actions">
              <a className="btn btn--primary" href="/events/electronics-masterclass-for-kids">
                View curriculum &amp; register
              </a>
              <a className="btn btn--ghost" href="/events/electronics-masterclass-for-kids#register">
                Secure your spot
              </a>
            </div>
          </div>

          <div className="card">
            <span className="pill pill--highlight">Our Heritage</span>
            <h2 className="section-title section-title--medium">Rooted in tradition</h2>
            <p>
              The Namboothiri community carries forward centuries of Vedic scholarship, distinctive rituals, and service-oriented values while embracing life in Canada.
            </p>
            <ul className="feature-list">
              <li>Custodians of Kerala&apos;s Vedic traditions</li>
              <li>Celebrations showcasing music, ritual arts, and storytelling</li>
              <li>Support initiatives for families, students, and elders</li>
            </ul>
            <div className="card__actions">
              <a className="btn btn--ghost" href="/culture">
                Explore culture &amp; heritage
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingBottom: '4.5rem' }}>
        <div className="layout-container cards-grid cards-grid--two">
          <div className="card card--media">
            <h3 className="section-title section-title--medium" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Watch highlights on YouTube
            </h3>
            <p>
              From festival recaps to youth spotlights, our channel captures moments that connect NAMAH members worldwide.
            </p>
            <div className="card__actions">
              <a
                className="btn btn--accent"
                href="https://www.youtube.com/@torontonambudiris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit our channel
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="section-title section-title--medium">Get involved</h3>
            <p>
              Whether you&apos;d like to collaborate on events, share cultural expertise, or volunteer at community programs, NAMAH thrives on participation.
            </p>
            <div className="card__actions">
              <a className="btn btn--primary" href="/contact">
                Connect with our team
              </a>
            </div>
            <p className="card__meta">We typically respond within two business days.</p>
          </div>
        </div>
      </section>
    </>
  );
}
