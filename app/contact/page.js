import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'
import ContactForm from '../components/ContactForm'

export const metadata = { title: 'צור קשר — מאיר וקנין' }

export default function ContactPage() {
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <section style={{ padding:'7rem 6vw', background:'var(--cream)', minHeight:'100svh' }}>
          <div style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8rem', alignItems:'start' }}>
            <div>
              <div className="section-tag">
                <span className="section-tag-text">בואו נתכנן יחד</span>
                <div className="section-tag-line" />
              </div>
              <h1 className="section-h" style={{ marginBottom:'1rem' }}>
                צור <em style={{ fontFamily:'var(--font-cormorant)', fontStyle:'italic', fontWeight:300 }}>קשר</em>
              </h1>
              <p style={{ fontSize:'.88rem', color:'var(--mid)', lineHeight:1.85, maxWidth:'380px', marginBottom:'3rem', textAlign:'right' }}>
                פגישת ייעוץ ראשונה בביתכם — ללא עלות, ללא התחייבות.
              </p>
              {[['טלפון','054-580-3585'],['מייל','meir@vaknin-wood.co.il'],['סטודיו','רחוב המלאכה 14, גבעתיים'],['שעות',"א'–ה' 08:00–18:00"]].map(([k,v]) => (
                <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'1rem 0', borderBottom:'1px solid rgba(0,0,0,.08)' }}>
                  <span style={{ fontSize:'.52rem', letterSpacing:'.2em', color:'var(--muted)' }}>{k}</span>
                  <span style={{ fontSize:'.88rem', fontWeight:300 }}>{v}</span>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
