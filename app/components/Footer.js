import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">מאיר וקנין</div>
      <div className="footer-copy">© 2025 מאיר וקנין · כל הזכויות שמורות</div>
      <div className="footer-links">
        <Link href="/gallery">קולקציות</Link>
        <Link href="/story">הסיפור שלנו</Link>
        <Link href="/contact">צור קשר</Link>
      </div>
    </footer>
  )
}
