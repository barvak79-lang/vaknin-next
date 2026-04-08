'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  
  if (sent) return (
    <div style={{ padding:'4rem', background:'var(--paper)', textAlign:'center' }}>
      <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>✓</div>
      <p style={{ fontSize:'.9rem', color:'var(--mid)' }}>הפנייה נשלחה! נחזור אליכם תוך 24 שעות.</p>
    </div>
  )

  return (
    <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{ display:'flex', flexDirection:'column' }}>
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
  )
}
