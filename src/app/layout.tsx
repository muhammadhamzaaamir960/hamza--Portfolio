import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Hamza | Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className } `}>
         <NavBar/>
        {children}
      </body>
    </html>
  )
}

{/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
-&gt;
</span> */}