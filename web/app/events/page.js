export const metadata = { title: 'Events — NAMAH' };

export default function EventsPage() {
  return (
    <article style={{maxWidth:'960px', margin:'2rem auto', padding:'0 1rem'}}>
      <h1 style={{fontSize:'2rem', marginBottom:'1rem'}}>Events</h1>
      <p style={{lineHeight:1.7, color:'#333', marginBottom:'1rem'}}>We publish event videos and highlights on our YouTube channel.</p>
      <a
        href="https://www.youtube.com/@torontonambudiris"
        target="_blank"
        rel="noopener noreferrer"
        style={{display:'inline-block', padding:'0.6rem 1rem', background:'#cc0000', color:'#fff', borderRadius:6, fontWeight:600, marginBottom:'2rem'}}
      >
        Visit our YouTube channel
      </a>

      <section style={{marginTop:'2.5rem'}}>
        <h2 style={{fontSize:'1.5rem', marginBottom:'1rem'}}>Upcoming Highlight</h2>
        <div style={{border:'1px solid #e5e5e5', borderRadius:'12px', padding:'1.5rem', display:'grid', gap:'0.75rem', background:'#fafafa'}}>
          <div>
            <div style={{fontSize:'0.85rem', letterSpacing:'0.08em', fontWeight:600, color:'#0a6', textTransform:'uppercase', marginBottom:'0.25rem'}}>Now Registering</div>
            <h3 style={{fontSize:'1.4rem', margin:'0 0 0.5rem'}}>Electronics Masterclass for Kids</h3>
            <p style={{margin:0, lineHeight:1.6, color:'#333'}}>A year-long, hands-on electronics journey for Grades 3–12 covering foundational circuits, sensors, 555 IC labs, and Raspberry Pi projects.</p>
          </div>
          <ul style={{margin:0, padding:'0 0 0 1.2rem', color:'#444', lineHeight:1.6}}>
            <li>24 lab-style classes (2 per month)</li>
            <li>Flexible pathways for elementary, middle, and high school learners</li>
            <li>Project-based learning culminating in Raspberry Pi applications</li>
          </ul>
          <div style={{display:'flex', flexWrap:'wrap', gap:'0.75rem'}}>
            <a
              href="/events/electronics-masterclass-for-kids"
              style={{padding:'0.6rem 1.2rem', borderRadius:'8px', background:'#0a6', color:'#fff', fontWeight:600}}
            >
              Explore &amp; Register
            </a>
            <a
              href="/events/electronics-masterclass-for-kids#curriculum"
              style={{padding:'0.6rem 1.2rem', borderRadius:'8px', border:'1px solid #0a6', color:'#0a6', fontWeight:600}}
            >
              View Curriculum
            </a>
          </div>
          <p style={{margin:0, fontSize:'0.9rem', color:'#666'}}>Hosted by NAMAH&apos;s education team in Toronto, ON. Spots are limited.</p>
        </div>
      </section>
    </article>
  );
}

