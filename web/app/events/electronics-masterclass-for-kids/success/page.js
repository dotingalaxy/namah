export const metadata = {
  title: 'Registration Received — Electronics Masterclass',
};

export default function ElectronicsMasterclassSuccess() {
  return (
    <article style={{maxWidth:'720px', margin:'0 auto', padding:'2rem 1rem', textAlign:'center', display:'grid', gap:'1.5rem'}}>
      <div style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'72px', height:'72px', borderRadius:'50%', background:'#e8f6f0', margin:'0 auto'}}>
        <span aria-hidden="true" style={{fontSize:'2rem', color:'#0a6'}}>✓</span>
      </div>
      <div style={{display:'grid', gap:'0.75rem'}}>
        <h1 style={{fontSize:'2rem', margin:0}}>Thank you for registering!</h1>
        <p style={{margin:0, color:'#333', lineHeight:1.7}}>
          We have received your submission for the <strong>Electronics Masterclass for Kids</strong>. Our education team will review the details and reach out within five business days to confirm cohort placement, tuition, and next steps.
        </p>
      </div>
      <div style={{display:'grid', gap:'0.5rem', color:'#444', lineHeight:1.6}}>
        <p style={{margin:0}}><strong>What happens next?</strong></p>
        <ul style={{margin:'0 auto', padding:'0 0 0 1.1rem', textAlign:'left', maxWidth:'520px'}}>
          <li>Email confirmation with orientation details.</li>
          <li>Optional call to discuss learning goals and accommodations.</li>
          <li>Welcome kit and safety checklist sent prior to the first session.</li>
        </ul>
      </div>
      <a href="/events/electronics-masterclass-for-kids" style={{display:'inline-block', padding:'0.75rem 1.4rem', borderRadius:'999px', border:'2px solid #0a6', color:'#0a6', fontWeight:600}}>Return to program page</a>
    </article>
  );
}
