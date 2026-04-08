import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'
import Link from 'next/link'

export const metadata = { title: 'הסיפור שלנו — מאיר וקנין' }

export default function StoryPage() {
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <div style={{background:'#000',padding:'7rem 6vw 5rem',position:'relative',overflow:'hidden'}}>
          <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'right',position:'relative',zIndex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:'.8rem',justifyContent:'flex-end',marginBottom:'1.5rem'}}>
              <span style={{fontSize:'.58rem',letterSpacing:'.28em',color:'rgba(255,255,255,.3)'}}>הסיפור שלנו</span>
              <div style={{width:'28px',height:'1px',background:'rgba(255,255,255,.2)'}}/>
            </div>
            <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:200,color:'#fff',lineHeight:1,letterSpacing:'-.02em',marginBottom:'1.5rem'}}>
              מסורת שפגשה<br/>
              <em style={{fontFamily:'var(--font-cormorant)',fontStyle:'italic',fontWeight:300,color:'rgba(255,255,255,.4)'}}>הנדסה</em>
            </h1>
            <p style={{fontSize:'.92rem',color:'rgba(255,255,255,.45)',lineHeight:1.9,maxWidth:'560px'}}>
              20 שנה, 480+ פרויקטים, ומחויבות אחת — לייצר בשלמות מוחלטת, כל פעם.
            </p>
          </div>
        </div>

        <section style={{padding:'7rem 6vw',background:'var(--cream)'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'8rem',alignItems:'start'}}>
            <div>
              <div style={{background:'#000',padding:'3rem',marginBottom:'2px',borderRight:'2px solid var(--oak)'}}>
                <p style={{fontFamily:'var(--font-cormorant)',fontSize:'clamp(1.5rem,2.5vw,2.1rem)',fontWeight:300,fontStyle:'italic',color:'#fff',lineHeight:1.45,marginBottom:'1.5rem'}}>
                  "עץ הוא חומר חי. כל גרגיר — כרוניקה. כל חיבור — חתימה."
                </p>
                <div style={{fontSize:'.55rem',letterSpacing:'.15em',color:'rgba(255,255,255,.28)'}}>מאיר וקנין · נגר מאסטר</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px'}}>
                {[['20+','שנות ניסיון'],['480+','פרויקטים'],['0.1 מ"מ','דיוק מרבי'],['100%','עבודה ידנית']].map(([n,l])=>(
                  <div key={l} style={{background:'var(--paper)',padding:'1.8rem'}}>
                    <div style={{fontSize:'2.2rem',fontWeight:200,color:'var(--ink)',lineHeight:1}}>{n}</div>
                    <div style={{fontSize:'.52rem',letterSpacing:'.1em',color:'var(--muted)',marginTop:'.4rem'}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-tag"><span className="section-tag-text">על האמן</span><div className="section-tag-line"/></div>
              <h2 className="section-h" style={{marginBottom:'1.5rem'}}>מאיר <em style={{fontFamily:'var(--font-cormorant)',fontStyle:'italic',fontWeight:300}}>וקנין</em></h2>
              <div style={{fontSize:'.88rem',fontWeight:300,color:'var(--mid)',lineHeight:2,textAlign:'right'}}>
                <p style={{marginBottom:'1.2rem'}}>מאיר וקנין לא למד נגרות מספרים — הוא למד אותה ממגע. <strong style={{color:'var(--ink)',fontWeight:500}}>20 שנות עבודה</strong> שהפכו כל שבב עץ לשפה.</p>
                <p style={{marginBottom:'1.2rem'}}>היום, הסטודיו שלו בגבעתיים הוא המקום שבו ראוטרי <strong style={{color:'var(--ink)',fontWeight:500}}>CNC אירופאיים</strong> פועלים לצד ידיים שמכירות כל סיב עץ.</p>
                <p>הפילוסופיה שלנו: כל מטבח, כל שולחן, כל ארון — מכלול הנדסי שחייב להיות גם יפה וגם <strong style={{color:'var(--ink)',fontWeight:500}}>נכון לדורות</strong>.</p>
              </div>
              <div style={{marginTop:'2.5rem',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                <Link href="/gallery" className="btn-primary"><span>לקולקציות שלנו ←</span></Link>
                <Link href="/contact" className="btn-ghost">קבע פגישה</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
