import './globals.css';

export const metadata = {
  title: 'NAMAH',
  description: 'Namboothiri Association for Maintaining Ancestry and Heritage in Canada',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NAMAH Association',
              legalName: 'NAMAH Association',
              identifier: {
                '@type': 'PropertyValue',
                propertyID: 'Corporations Canada #',
                value: '1700115-1',
              },
            }),
          }}
        />
      </head>
      <body>
        <header style={{padding:'0.75rem 1rem', borderBottom:'1px solid #eee'}}>
          <div style={{maxWidth:'1080px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem'}}>
            <a href="/" style={{display:'flex', alignItems:'center', gap:'.5rem', color:'#111', textDecoration:'none'}}>
              <img src="/Logo.jpeg" alt="NAMAH logo" style={{height:'40px', width:'40px', objectFit:'cover', borderRadius:'4px'}} />
              <span style={{fontWeight:700, fontSize:'1.25rem', letterSpacing:'0.02em'}}>NAMAH</span>
            </a>
            <nav style={{display:'flex', gap:'1rem', fontSize:'0.95rem'}}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/mission-vision">Mission & Vision</a>
              <a href="/events">Events</a>
              <a href="/culture">Culture & Heritage</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main style={{maxWidth: '960px', margin: '2rem auto', padding: '0 1rem'}}>{children}</main>
        <footer style={{padding:'2rem 1rem', borderTop:'1px solid #eee', color:'#555'}}>
          <div style={{maxWidth:'960px', margin:'0 auto'}}>
            <div>© {new Date().getFullYear()} NAMAH</div>
            <div>Non-profit registered in Canada (Corporations Canada #1700115-1)</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

