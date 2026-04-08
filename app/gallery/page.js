import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WaButton from '../components/WaButton'

export const metadata = { title: 'קולקציות — מאיר וקנין' }

const projects = [
  { id:1, cat:'kitchen', tag:'מטבחי יוקרה', title:'וילה — כפר שמריהו', year:'2024', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=75&fit=crop', span:2 },
  { id:2, cat:'closet',  tag:'חדרי ארונות', title:'הלבשה — רמת השרון', year:'2023', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75&fit=crop' },
  { id:3, cat:'kitchen', tag:'מטבחי יוקרה', title:'דופלקס — הרצליה',    year:'2024', img:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=75&fit=crop' },
  { id:4, cat:'furniture',tag:'ריהוט מותאם',title:'ספרייה — תל אביב',   year:'2023', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=75&fit=crop' },
  { id:5, cat:'outdoor', tag:'עבודות חוץ',  title:'פרגולה — כפר שמריהו',year:'2023', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=75&fit=crop' },
  { id:6, cat:'stone',   tag:'אבן ושיש',    title:'שיש קרר — גבעת שמואל',year:'2022', img:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=700&q=75&fit=crop' },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <WaButton />
      <main className="pt-nav">
        <div style={{ background:'#000', padding:'5rem 6vw 3rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.8rem', justifyContent:'flex-end', marginBottom:'1rem' }}>
            <span style={{ fontSize:'.58rem', letterSpacing:'.28em', color:'rgba(255,255,255,.3)' }}>קולקציות · 2022–2024</span>
            <div style={{ width:'28px', height:'1px', background:'rgba(255,255,255,.25)' }} />
          </div>
          <h1 style={{ fontSize:'clamp(2.5rem,6vw,5rem)', fontWeight:200, color:'#fff', lineHeight:1, letterSpacing:'-.02em' }}>
            קולקציות <em style={{ fontFamily:'var(--font-cormorant)', fontStyle:'italic', fontWeight:300, color:'rgba(255,255,255,.4)' }}>נבחרות</em>
          </h1>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:'3px', background:'#000' }}>
          {projects.map((p,i) => (
            <div
              key={p.id}
              className="gcard"
              style={{
                gridRow: i===0 ? 'span 2' : undefined,
                minHeight: i===0 ? '600px' : undefined,
                aspectRatio: i>0 ? '4/3' : undefined,
              }}
            >
              <Image src={p.img} alt={p.title} fill style={{ objectFit:'cover' }} loading={i===0?'eager':'lazy'} sizes={i===0?'45vw':'30vw'} />
              <div className="card-veil" />
              <div className="card-info">
                <div className="card-tag">{p.tag}</div>
                <div className="card-title">{p.title}</div>
                <div className="card-year">{p.year}</div>
              </div>
              <div style={{ position:'absolute', top:'1.2rem', left:'1.4rem', fontSize:'.5rem', letterSpacing:'.2em', color:'rgba(255,255,255,.2)', zIndex:2 }}>0{p.id}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'#000', padding:'4rem 6vw', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
          <Link href="/contact" className="btn-primary"><span>תיאום פגישת ייעוץ ←</span></Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
