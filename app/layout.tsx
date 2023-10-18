import './globals.css'
import type { Metadata } from 'next'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


export const metadata: Metadata = {
  title: 'Yusp Studio',
  description: 'Yusp Studio Web Portfolio Multimedia Artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200 no-scrollbar'>
        <Navbar />
        <main className='relative overflow-hidden '>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
