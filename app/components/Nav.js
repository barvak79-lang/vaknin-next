'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'דף הבית' },
  { href: '/gallery', label: 'קולקציות' },
  { href: '/story', label: 'הסיפור שלנו' },
  { href: '/process', label: 'תהליך העבודה' },
  { href: '/suppliers', label: 'הספקים שלנו' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pbWidth, setPbWidth] = useState(0)

  const lightPages = ['/gallery', '/contact']
  const isLight = lightPages.includes(pathname) || scrolled && pathname === '/'

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const max = document.body.scrollHeight - window.innerHeight
        setScrolled(scrollY > window.innerHeight * 0.6)
        setPbWidth(max > 0 ? (scrollY / max) * 100 : 0)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <div className="pb" style={{ width: `${pbWidth}%` }} />

      <nav className={`nav${isLight ? ' light' : ''}`}>
        <Link href="/" className="nav-brand">
          <div className="nav-logo">מאיר וקנין</div>
          <div className="nav-sub">נגר מאסטר · מאז 2006</div>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/contact" className="nav-cta"><span>צור קשר</span></Link>
          <button
            className={`ham${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="תפריט"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>צור קשר</Link>
      </div>
    </>
  )
}
