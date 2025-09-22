export const metadata = { title: 'Contact — NAMAH' };

export default function ContactPage() {
  return (
    <article style={{maxWidth:'720px', margin:'2rem auto', padding:'0 1rem'}}>
      <h1 style={{fontSize:'2rem', marginBottom:'1rem'}}>Contact Us</h1>
      <form name="contact" method="POST" data-netlify="true" action="/contact/success" style={{display:'grid', gap:'0.75rem'}}>
        <input type="hidden" name="form-name" value="contact" />
        <div style={{display:'grid', gap:'0.25rem'}}>
          <label htmlFor="name" style={{fontWeight:600}}>Name</label>
          <input id="name" name="name" required style={{padding:'0.6rem 0.7rem', border:'1px solid #ddd', borderRadius:6}} />
        </div>
        <div style={{display:'grid', gap:'0.25rem'}}>
          <label htmlFor="email" style={{fontWeight:600}}>Email</label>
          <input id="email" name="email" type="email" required style={{padding:'0.6rem 0.7rem', border:'1px solid #ddd', borderRadius:6}} />
        </div>
        <div style={{display:'grid', gap:'0.25rem'}}>
          <label htmlFor="subject" style={{fontWeight:600}}>Subject</label>
          <input id="subject" name="subject" style={{padding:'0.6rem 0.7rem', border:'1px solid #ddd', borderRadius:6}} />
        </div>
        <div style={{display:'grid', gap:'0.25rem'}}>
          <label htmlFor="message" style={{fontWeight:600}}>Message</label>
          <textarea id="message" name="message" rows={6} required style={{padding:'0.6rem 0.7rem', border:'1px solid #ddd', borderRadius:6}} />
        </div>
        <button type="submit" style={{padding:'0.6rem 1rem', background:'#0a6', color:'#fff', border:'none', borderRadius:6, fontWeight:700, cursor:'pointer'}}>Send</button>
      </form>
    </article>
  );
}

