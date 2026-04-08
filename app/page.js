import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WaButton from './components/WaButton'

const services = [
  { num: '01', title: 'מטבחים', sub: 'Kitchen Systems', desc: 'מטבחי יוקרה מעץ מלא, שיש ופורמייקה. כל עיצוב — מינימליסטי, אדריכלי, קלאסי — מותאם לחלל שלכם.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75&fit=crop' },
  { num: '02', title: 'שולחנות', sub: 'Custom Tables', desc: 'שולחנות אוכל, עבודה ופגישות מעץ מלא. כל שולחן — חתיכה ייחודית שתשרוד דורות.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=75&fit=crop' },
  { num: '03', title: 'ארונות אמבטיה', sub: 'Bathroom Vanities', desc: 'ארונות עמידים לרטיבות, מחומרים עם גימור ספציפי למרחבים לחים.', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=75&fit=crop' },
  { num: '04', title: 'ארונות קיר', sub: 'Wall Closets', desc: 'ארונות קיר ועד תקרה — מנצלים כל סנטימטר. מערכות פנים חכמות, דלתות ללא ידיות.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&fit=crop' },
  { num: '05', title: 'מזנונים', sub: 'Sideboards', desc: 'מזנונים לסלון ולחדר אוכל — שילוב של אחסון, זכוכית ותאורה.', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=75&fit=crop' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <WaButton />

      {/* HERO */}
      <section style={{ position:'relative', minHeight:'100svh', paddingTop:'64px', background:'#000', display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, zIndex:0 }}>
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=70&fit=crop&auto=format"
            alt="מטבח יוקרה מאיר וקנין"
            fill
            style={{ objectFit:'cover', opacity:.6 }}
            priority
            sizes="100vw"
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to left,rgba(0,0,0,.82) 0%,rgba(0,0,0,.4) 50%,rgba(0,0,0,.15) 100%)' }} />
        </div>

        {/* Grid overlay */}
        <div style={{ position:'absolute', inset:0, zIndex:1, backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize:'28px 28px', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2, flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'3rem 6vw 2rem', maxWidth:'900px', width:'100%', alignSelf:'flex-end' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.8rem', justifyContent:'flex-end', marginBottom:'2rem' }}>
            <span style={{ fontFamily:'var(--font-heebo)',fontSize:'.58rem',letterSpacing:'.25em',color:'rgba(255,255,255,.45)' }}>גלריית דיוק · 2024</span>
            <div style={{ width:'28px', height:'1px', background:'rgba(255,255,255,.3)' }} />
          </div>

          <h1 style={{ fontSize:'clamp(3rem,8vw,7rem)', fontWeight:800, color:'#fff', letterSpacing:'-.03em', lineHeight:.92, marginBottom:'1.5rem' }}>
            הנדסת<br />חומר.<br />
            <em style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontStyle:'italic', opacity:.5, fontSize:'.75em' }}>אסתטיקה של דיוק.</em>
          </h1>

          <p style={{ fontSize:'clamp(.85rem,1.4vw,.95rem)', fontWeight:300, color:'rgba(255,255,255,.75)', lineHeight:1.85, maxWidth:'480px', marginBottom:'3rem', textAlign:'right' }}>
            מטבחים, ריהוט וחיפויים שנולדו מתוך מחויבות אחת — שלמות. כל מילימטר נמדד. כל חומר נבחר ביד.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
            <Link href="/gallery" className="btn-primary"><span>לקולקציות ←</span></Link>
            <Link href="/contact" className="btn-ghost-white">קבע פגישת ייעוץ</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'repeat(4,1fr)', background:'rgba(0,0,0,.85)', borderTop:'1px solid rgba(255,255,255,.06)' }}>
          {[
            { n:'20+', l:'שנות ניסיון' },
            { n:'480+', l:'פרויקטים' },
            { n:'0.1מ"מ', l:'דיוק מרבי' },
            { n:'∞', l:'ערבות' },
          ].map((s,i) => (
            <div key={i} style={{ padding:'1.8rem 1.5rem', borderLeft: i>0?'1px solid rgba(255,255,255,.06)':'none', textAlign:'center' }}>
              <div style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:200, color:'#fff', lineHeight:1 }}>{s.n}</div>
              <div style={{ fontSize:'.55rem', letterSpacing:'.1em', color:'rgba(255,255,255,.3)', marginTop:'.4rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background:'#000', padding:'0' }}>
        <div style={{ padding:'5rem 6vw 3rem', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
          <div className="section-tag" style={{ '--oak-c':'rgba(255,255,255,.3)' }}>
            <span style={{ fontSize:'.55rem', letterSpacing:'.28em', color:'rgba(255,255,255,.3)' }}>מה אנחנו עושים</span>
            <div style={{ width:'24px', height:'1px', background:'rgba(255,255,255,.2)' }} />
          </div>
          <h2 style={{ fontSize:'clamp(2rem,5vw,4rem)', fontWeight:900, color:'#fff', letterSpacing:'-.03em', lineHeight:1 }}>
            השירותים <em style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontStyle:'italic', color:'rgba(255,255,255,.4)' }}>שלנו</em>
          </h2>
        </div>

        {services.map((s, i) => (
          <div key={s.num} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'360px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
            <div style={{ order: i%2===0 ? 2 : 1, position:'relative', minHeight:'280px' }}>
              <Image src={s.img} alt={s.title} fill style={{ objectFit:'cover' }} loading="lazy" sizes="50vw" />
            </div>
            <div style={{ order: i%2===0 ? 1 : 2, padding:'3rem', display:'flex', flexDirection:'column', justifyContent:'center', background:'#111' }}>
              <div style={{ fontSize:'.52rem', letterSpacing:'.28em', color:'rgba(255,255,255,.3)', marginBottom:'1rem' }}>{s.sub}</div>
              <h3 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:900, color:'#fff', letterSpacing:'-.03em', marginBottom:'1rem' }}>{s.title}</h3>
              <p style={{ fontSize:'.85rem', fontWeight:300, color:'rgba(255,255,255,.45)', lineHeight:1.9, textAlign:'right', marginBottom:'2rem' }}>{s.desc}</p>
              <Link href="/contact" style={{ alignSelf:'flex-end', fontSize:'.62rem', letterSpacing:'.2em', color:'rgba(255,255,255,.45)', borderBottom:'1px solid rgba(255,255,255,.18)', paddingBottom:'3px' }}>לפרויקט כזה ←</Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background:'#000', padding:'7rem 6vw', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:300, fontStyle:'italic', color:'#fff', marginBottom:'1rem' }}>
          הפרויקט הבא שלכם מתחיל בשיחה אחת.
        </h2>
        <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.35)', marginBottom:'2.5rem' }}>
          פגישת ייעוץ ראשונה בביתכם — ללא עלות, ללא התחייבות.
        </p>
        <Link href="/contact" className="btn-primary"><span>תיאום פגישת ייעוץ ←</span></Link>
      </section>

      <Footer />
    </>
  )
}
