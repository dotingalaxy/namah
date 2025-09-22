export const metadata = {
  title: 'Mission & Vision — NAMAH',
};

export default function MissionVisionPage() {
  return (
    <article style={{maxWidth:'960px', margin:'2rem auto', padding:'0 1rem'}}>
      <h1 style={{fontSize:'2rem', marginBottom:'1rem'}}>Mission & Vision</h1>

      <section style={{marginBottom:'2rem'}}>
        <h2 style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>Mission</h2>
        <p style={{lineHeight:1.7, color:'#333'}}>
          To foster a vibrant and cohesive association of the Namboothiri community in Canada that preserves and celebrates our rich cultural heritage; promotes spiritual and educational growth; and enhances the well-being and unity of all community members. Through shared values and collective efforts, we aspire to create a supportive and inclusive environment that empowers future generations to thrive while maintaining a deep connection to our traditions and cultural roots.
        </p>
      </section>

      <section>
        <h2 style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>Vision</h2>
        <p style={{lineHeight:1.7, color:'#333'}}>
          To represent the Namboothiri community in Canada, support families in need, and be a platform for the promotion and development of Namboothiri culture, traditions, and customs within a Canadian context. NAMAH shall utilize its resources to foster community engagement and cultural preservation.
        </p>
      </section>
    </article>
  );
}

