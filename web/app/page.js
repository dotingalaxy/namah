export default function HomePage() {
  return (
    <>
      <section
        style={{
          padding: '5rem 1rem',
          background: 'linear-gradient(135deg, #7A1F1F 0%, #C8A951 100%)',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.75rem', margin: 0, letterSpacing: '0.02em' }}>NAMAH</h1>
          <p style={{ fontSize: '1.25rem', margin: '0.75rem 0 1.5rem', opacity: 0.95 }}>
            Preserving culture, celebrating community.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="/culture"
              style={{
                padding: '0.6rem 1rem',
                background: '#fff',
                color: '#7A1F1F',
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              Explore our heritage
            </a>
            <a
              href="/events"
              style={{
                padding: '0.6rem 1rem',
                border: '2px solid rgba(255,255,255,0.9)',
                color: '#fff',
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              Upcoming events
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem', background: '#fff' }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'minmax(0,1fr)',
            alignItems: 'start',
          }}
        >
          <div>

            <p style={{ lineHeight: 1.8, color: '#333', margin: '0 0 0.5rem' }}>
              The Namboothiri community carries a living heritage rooted in Kerala’s Vedic traditions.
            </p>
            <ul style={{ lineHeight: 1.8, color: '#333', paddingLeft: '1.2rem', margin: 0 }}>
              <li>Custodians of Vedic traditions originating in Kerala</li>
              <li>Distinct rituals, customs, and lineage practices</li>
              <li>Emphasis on learning, arts, and community service</li>

            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
