export const metadata = { title: 'Events — NAMAH' };

export default function EventsPage() {
  return (
    <div className="events-page">
      <section className="hero hero--event">
        <div className="layout-container hero__content">
          <p className="hero__eyebrow">Community Programs</p>
          <h1 className="hero__heading">Events &amp; Workshops</h1>
          <p className="hero__description">
            Join NAMAH for immersive cultural gatherings, educational labs, and celebrations that keep our heritage vibrant for every generation.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--light" href="#masterclass">Explore Masterclass</a>
            <a
              className="btn btn--outline-light"
              href="https://www.youtube.com/@torontonambudiris"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch highlights
            </a>
          </div>
        </div>
      </section>

      <section id="masterclass" className="section">
        <div className="layout-container">
          <div className="card card--feature">
            <span className="pill pill--now">Now Registering</span>
            <h2 className="section-title">Electronics Masterclass for Kids</h2>
            <p className="section-subtitle">
              A year-long makerspace journey guiding Grades 3–12 from circuit fundamentals to Raspberry Pi-powered creations. Scaffolded lessons keep every learner challenged and supported.
            </p>
            <ul className="feature-list">
              <li>24 lab-style classes delivered over 12 months</li>
              <li>Differentiated pathways for elementary, middle, and high school cohorts</li>
              <li>Hands-on builds featuring sensors, 555 IC projects, and Raspberry Pi coding</li>
            </ul>
            <div className="card__actions">
              <a className="btn btn--primary" href="/events/electronics-masterclass-for-kids">
                Register &amp; Details
              </a>
              <a className="btn btn--ghost" href="/events/electronics-masterclass-for-kids#curriculum">
                Curriculum Outline
              </a>
            </div>
            <p className="card__meta">Hosted by NAMAH&apos;s education team in Milton, ON (exact location will be shared closer to kickoff). Spots are limited.</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="layout-container cards-grid cards-grid--two">
          <div className="card card--media">
            <h3 className="section-title section-title--medium">Catch our highlights</h3>
            <p>
              Relive recent performances, festival recaps, and community stories. Subscribe to stay notified when new event spotlights drop.
            </p>
            <div className="card__actions">
              <a
                className="btn btn--accent"
                href="https://www.youtube.com/@torontonambudiris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit our YouTube channel
              </a>
            </div>
            <p className="card__meta">New videos are posted shortly after each major gathering.</p>
          </div>

          <div className="card">
            <h3 className="section-title section-title--medium">Have an event idea?</h3>
            <p>
              We love collaborating on cultural showcases, speaker series, and youth programs. Share your proposal—we&apos;ll help bring it to life with the NAMAH community.
            </p>
            <div className="card__actions">
              <a className="btn btn--ghost" href="/contact">Contact the events team</a>
            </div>
            <p className="card__meta">We typically review and respond within five business days.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

