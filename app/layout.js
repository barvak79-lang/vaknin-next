import { Heebo, Cormorant_Garamond } from 'next/font/google'
import '../styles/globals.css'

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-heebo',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata = {
  title: 'מאיר וקנין — מטבחי יוקרה',
  description: 'נגרות יוקרה מאז 2006. מטבחים, שולחנות, ארונות ורהיטים בדיוק מילימטרי.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}
