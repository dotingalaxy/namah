export const metadata = { title: 'Message sent — NAMAH' };

export default function ContactSuccessPage() {
  return (
    <article style={{maxWidth:'720px', margin:'2rem auto', padding:'0 1rem', textAlign:'center'}}>
      <h1 style={{fontSize:'2rem', marginBottom:'0.75rem'}}>Thank you!</h1>
      <p style={{lineHeight:1.7, color:'#333'}}>Your message has been sent. We'll get back to you soon.</p>
    </article>
  );
}

