import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'
import Link from 'next/link'

export const metadata = { title: 'הספקים שלנו — מאיר וקנין' }

const materials = [
  { title:'עץ', sub:'אלון אירופאי · אגוז · אפר', desc:'מיערות מנוהלים בצפון אירופה, עם תעודת FSC. ספק היער שלנו עובד מ-1958 — שלושה דורות של מומחיות בבחירת גרגיר.', year:'1958', age:'66 שנות וותק' },
  { title:'אבן', sub:'שיש · קוורץ · גרניט', desc:'ממחצבות קלקטה ואיסטריט באיטליה. כל לוח נבחר ביד — הצבע, הווריד, המרקם. ספק השיש שלנו פועל ממשפחה ממנטובה מ-1972.', year:'1972', age:'52 שנות וותק' },
  { title:'מתכת', sub:'פרזול · נחושת · פלדה', desc:'פרזול מבית מלאכה משפחתי בשוורצוואלד, גרמניה. כל ידית, כל ציר — יצוק ביד. הספק שלנו הוא שלישי בשושלת אומנים מ-1955.', year:'1955', age:'69 שנות וותק' },
  { title:'גימור', sub:'לכות · שמנים · ציפויים', desc:'חברת לכות מהולנד שמתמחה בגימורים לרהיטי יוקרה מ-1962. ללא VOC, עמידות של עשרות שנים, עם אחריות בכתב.', year:'1962', age:'62 שנות וותק' },
]

export default function SuppliersPage() {
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <div style={{background:'#000',padding:'7rem 6vw 5rem',overflow:'hidden'}}>
          <div style={{maxWidth:'800px',margin:'0 auto',textAlign:'right',position:'relative',zIndex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:'.8rem',justifyContent:'flex-end',marginBottom:'1.5rem'}}>
              <span style={{fontSize:'.58rem',letterSpacing:'.28em',color:'rgba(255,255,255,.3)'}}>הסיפור מאחורי הספקים</span>
              <div style={{width:'28px',height:'1px',background:'rgba(255,255,255,.2)'}}/>
            </div>
            <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:200,color:'#fff',lineHeight:1,letterSpacing:'-.02em',marginBottom:'1.5rem'}}>
              חומרי גלם<br/>
              <em style={{fontFamily:'var(--font-cormorant)',fontStyle:'italic',fontWeight:300,color:'rgba(255,255,255,.45)'}}>ממקורות עולמיים</em>
            </h1>
            <p style={{fontSize:'.92rem',color:'rgba(255,255,255,.45)',lineHeight:1.9,maxWidth:'560px'}}>
              כשספק עץ עובד 70 שנה — הוא מכיר כל עץ ביער. זו האיכות שאנחנו מביאים לכל מטבח.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{background:'#111',display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
          {[['70+','שנות וותק ספק'],['12','ספקים נבחרים'],['8','מדינות מקור'],['100%','בדיקת איכות']].map(([n,l],i)=>(
            <div key={l} style={{padding:'2rem',borderLeft:i>0?'1px solid rgba(255,255,255,.06)':'none',textAlign:'right'}}>
              <div style={{fontSize:'2.5rem',fontWeight:200,color:'#fff',lineHeight:1}}>{n}</div>
              <div style={{fontSize:'.52rem',letterSpacing:'.12em',color:'rgba(255,255,255,.3)',marginTop:'.5rem'}}>{l}</div>
            </div>
          ))}
        </div>

        {/* Materials */}
        <section style={{background:'#000',padding:'5rem 6vw'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(1.8rem,3.5vw,3rem)',fontWeight:200,color:'#fff',letterSpacing:'-.02em',marginBottom:'3rem',textAlign:'right'}}>
              ארבעה חומרים. <em style={{fontFamily:'var(--font-cormorant)',fontStyle:'italic',fontWeight:300,color:'rgba(255,255,255,.4)'}}>אינסוף אפשרויות.</em>
            </h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px'}}>
              {materials.map(m=>(
                <div key={m.title} style={{background:'#111',padding:'3rem',borderBottom:'2px solid transparent',transition:'border-color .2s'}}>
                  <div style={{fontFamily:'var(--font-cormorant)',fontSize:'2.5rem',fontWeight:300,fontStyle:'italic',color:'#fff',marginBottom:'1rem'}}>{m.title}</div>
                  <div style={{fontSize:'.52rem',letterSpacing:'.2em',color:'rgba(255,255,255,.4)',marginBottom:'1.2rem'}}>{m.sub}</div>
                  <p style={{fontSize:'.82rem',color:'rgba(255,255,255,.4)',lineHeight:1.85,marginBottom:'1.5rem'}}>{m.desc}</p>
                  <div style={{display:'flex',justifyContent:'space-between',paddingTop:'1rem',borderTop:'1px solid rgba(255,255,255,.07)'}}>
                    <span style={{fontSize:'.48rem',letterSpacing:'.15em',color:'rgba(255,255,255,.2)'}}>ספק מ-{m.year}</span>
                    <span style={{fontSize:'.48rem',letterSpacing:'.15em',color:'rgba(255,255,255,.5)'}}>{m.age}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{background:'var(--cream)',padding:'6rem 6vw',textAlign:'right'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div style={{width:'40px',height:'1px',background:'var(--oak)',marginRight:'auto',marginBottom:'2rem'}}/>
            <h2 style={{fontFamily:'var(--font-cormorant)',fontSize:'clamp(1.8rem,3.5vw,3rem)',fontWeight:300,fontStyle:'italic',color:'var(--ink)',lineHeight:1.3,marginBottom:'1.5rem'}}>
              "כשאנחנו בוחרים ספק, אנחנו לא בוחרים מחיר — אנחנו בוחרים מחויבות לאיכות שתעמוד בזמן."
            </h2>
            <p style={{fontSize:'.6rem',letterSpacing:'.2em',color:'var(--muted)'}}>מאיר וקנין · נגר מאסטר</p>
            <div style={{marginTop:'3rem'}}><Link href="/contact" className="btn-primary"><span>קבע פגישת ייעוץ ←</span></Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
