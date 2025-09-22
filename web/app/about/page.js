export const metadata = {
  title: 'About Us — NAMAH',
};

export default function AboutPage() {
  return (
    <article style={{maxWidth:'960px', margin:'2rem auto', padding:'0 1rem'}}>
      <h1 style={{fontSize:'2rem', marginBottom:'1rem'}}>About Us</h1>

      <p style={{lineHeight:1.7, color:'#333', marginBottom:'1rem'}}>
        NAMAH stands for <strong>Namboothiri Association for Maintaining Ancestry and Heritage</strong>. We are a community-led, non-profit organization dedicated to preserving Namboothiri cultural heritage and building a supportive community across Canada.
      </p>

      <p style={{lineHeight:1.7, color:'#333', marginBottom:'1rem'}}>
        Our work includes cultural programs, community gatherings, support for families, and intergenerational initiatives to ensure our traditions remain vibrant and accessible.
      </p>

      <section style={{marginTop:'2rem'}}>
        <h2 style={{fontSize:'1.25rem', marginBottom:'0.5rem'}}>Organization & Legal</h2>
        <ul style={{lineHeight:1.8, color:'#333', paddingLeft:'1.2rem'}}>
          <li>Registered non-profit in Canada — Corporations Canada #1700115-1</li>
          <li>Community-focused, volunteer-driven initiatives</li>
        </ul>
      </section>
    </article>
  );
}

