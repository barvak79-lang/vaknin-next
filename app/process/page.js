import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'
import Link from 'next/link'

export const metadata = { title: 'תהליך העבודה — מאיר וקנין' }

const steps = [
  { n:'01', title:'סקר ומדידה', desc:'ביקור בית, מדידות מדויקות ב-0.1 מ"מ, הבנת הצרכים. הכל מתועד לפני שמתחילים.', badge:'סקר מקום' },
  { n:'02', title:'תכנון CAD', desc:'תוכנות CAD מתקדמות. תכנית מפורטת לאישור — כולל חומרים, מידות וגימורים.', badge:'תכנון תלת-ממד' },
  { n:'03', title:'ייצור CNC', desc:'ציוד CNC אירופאי בסטודיו. כל חיתוך — מדויק. כל לוח — נבדק לפני השלב הבא.', badge:'ייצור CNC' },
  { n:'04', title:'התקנה ומסירה', desc:'התקנה מקצועית. בדיקת איכות פינאלית. ערבות לכל החיים — בלי פשרות.', badge:'ערבות מלאה' },
]

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <div style={{background:'#000',padding:'7rem 6vw 5rem'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto',textAlign:'right'}}>
            <div style={{display:'flex',alignItems:'center',gap:'.8rem',justifyContent:'flex-end',marginBottom:'1.5rem'}}>
              <span style={{fontSize:'.58rem',letterSpacing:'.28em',color:'rgba(255,255,255,.3)'}}>תהליך העבודה</span>
              <div style={{width:'28px',height:'1px',background:'rgba(255,255,255,.2)'}}/>
            </div>
            <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:200,color:'#fff',lineHeight:1,letterSpacing:'-.02em'}}>
              תהליך <em style={{fontFamily:'var(--font-cormorant)',fontStyle:'italic',fontWeight:300,color:'rgba(255,255,255,.4)'}}>הנדסי</em>
            </h1>
          </div>
        </div>

        <section style={{background:'#000',padding:'5rem 6vw 7rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0',maxWidth:'1200px',margin:'0 auto'}}>
            {steps.map((s,i)=>(
              <div key={s.n} style={{padding:'3rem 2.5rem',borderLeft:i<3?'1px solid rgba(255,255,255,.06)':'none',position:'relative'}}>
                <div style={{width:'4rem',height:'4rem',border:'1px solid rgba(255,255,255,.15)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'2rem'}}>
                  <span style={{color:'rgba(255,255,255,.3)',fontSize:'.8rem'}}>{s.n}</span>
                </div>
                <div style={{fontSize:'.5rem',letterSpacing:'.15em',color:'rgba(255,255,255,.25)',marginBottom:'.6rem'}}>{s.n} · שלב</div>
                <h3 style={{fontSize:'1rem',fontWeight:500,color:'#fff',marginBottom:'.7rem'}}>{s.title}</h3>
                <p style={{fontSize:'.82rem',color:'rgba(255,255,255,.35)',lineHeight:1.85,fontWeight:300}}>{s.desc}</p>
                <div style={{display:'inline-block',marginTop:'1.2rem',fontSize:'.52rem',letterSpacing:'.15em',border:'1px solid rgba(255,255,255,.15)',padding:'.25rem .65rem',color:'rgba(255,255,255,.3)'}}>{s.badge}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{background:'var(--cream)',padding:'6rem 6vw',textAlign:'center'}}>
          <Link href="/contact" className="btn-primary"><span>קבע פגישת ייעוץ ←</span></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
