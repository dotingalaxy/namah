import './globals.css';

export const metadata = {
  title: 'NAMAH Association',
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
        <header style={{padding:'1rem', borderBottom:'1px solid #eee', display:'flex', alignItems:'center', gap:'1rem'}}>
          <img src="https://raw.githubusercontent.com/dotingalaxy/namah/main/Logo.jpeg" alt="NAMAH Logo" style={{height:'56px'}} />
          <div>
            <strong>NAMAH Association</strong>
            <div style={{fontSize:'0.9rem', color:'#555'}}>Namboothiri Association for Maintaining Ancestry and Heritage</div>
          </div>
        </header>
        <main style={{maxWidth: '960px', margin: '2rem auto', padding: '0 1rem'}}>{children}</main>
        <footer style={{padding:'2rem 1rem', borderTop:'1px solid #eee', color:'#555'}}>
          <div style={{maxWidth:'960px', margin:'0 auto'}}>
            <div>© {new Date().getFullYear()} NAMAH Association</div>
            <div>Non-profit registered in Canada (Corporations Canada #1700115-1)</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

