'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <section style={{ padding:'7rem 6vw', background:'var(--cream)', minHeight:'100svh' }}>
          <div style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8rem', alignItems:'start' }}>
            <div>
              <div className="section-tag"><span className="section-tag-text">בואו נתכנן יחד</span><div className="section-tag-line" /></div>
              <h1 className="section-h" style={{ marginBottom:'1rem' }}>צור <em style={{ fontFamily:'var(--font-cormorant)', fontStyle:'italic', fontWeight:300 }}>קשר</em></h1>
              <p style={{ fontSize:'.88rem', color:'var(--mid)', lineHeight:1.85, maxWidth:'380px', marginBottom:'3rem', textAlign:'right' }}>פגישת ייעוץ ראשונה בביתכם — ללא עלות, ללא התחייבות.</p>
              {[['טלפון','054-580-3585'],['מייל','meir@vaknin-wood.co.il'],['סטודיו','רחוב המלאכה 14, גבעתיים'],['שעות',"א'–ה' 08:00–18:00"]].map(([k,v]) => (
                <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'1rem 0', borderBottom:'1px solid rgba(0,0,0,.08)' }}>
                  <span style={{ fontSize:'.52rem', letterSpacing:'.2em', color:'var(--muted)' }}>{k}</span>
                  <span style={{ fontSize:'.88rem', fontWeight:300 }}>{v}</span>
                </div>
              ))}
            </div>
            <div>
              {sent ? (
                <div style={{ padding:'4rem', background:'var(--paper)', textAlign:'center' }}>
                  <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>✓</div>
                  <p style={{ fontSize:'.9rem', color:'var(--mid)' }}>הפנייה נשלחה! נחזור אליכם תוך 24 שעות.</p>
                </div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{ display:'flex', flexDirection:'column', gap:0 }}>
                  {[['שם מלא','text'],['טלפון','tel'],['אימייל','email']].map(([l,t]) => (
                    <div key={l} style={{ borderBottom:'1px solid rgba(0,0,0,.1)', paddingTop:'1.4rem' }}>
                      <label style={{ display:'block', fontSize:'.52rem', letterSpacing:'.2em', color:'var(--muted)', marginBottom:'.3rem' }}>{l}</label>
                      <input type={t} required style={{ width:'100%', background:'transparent', border:'none', outline:'none', fontSize:'.9rem', fontWeight:300, paddingBottom:'1rem', fontFamily:'inherit' }} />
                    </div>
                  ))}
                  <div style={{ borderBottom:'1px solid rgba(0,0,0,.1)', paddingTop:'1.4rem' }}>
                    <label style={{ display:'block', fontSize:'.52rem', letterSpacing:'.2em', color:'var(--muted)', marginBottom:'.3rem' }}>ספרו לנו</label>
                    <textarea required rows={4} style={{ width:'100%', background:'transparent', border:'none', outline:'none', fontSize:'.9rem', fontWeight:300, paddingBottom:'1rem', resize:'none', fontFamily:'inherit' }} />
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'2rem', flexWrap:'wrap', gap:'1rem' }}>
                    <span style={{ fontSize:'.52rem', letterSpacing:'.12em', color:'var(--muted)' }}>ייעוץ ראשון ללא עלות</span>
                    <button type="submit" className="btn-primary"><span>שלח פנייה ←</span></button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
