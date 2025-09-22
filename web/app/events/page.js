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
        style={{display:'inline-block', padding:'0.6rem 1rem', background:'#cc0000', color:'#fff', borderRadius:6, fontWeight:600}}
      >
        Visit our YouTube channel
      </a>
    </article>
  );
}

