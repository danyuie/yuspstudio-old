import './globals.css'
import type { Metadata } from 'next'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Providers from './providers';
import Loading from '@/components/Loading';



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
      <body className='bg-gray-200 no-scrollbar dark:bg-neutral-950 relative '>
        {/* <Loading /> */}
        <Providers>
          <Navbar />
          <main className='relative overflow-hidden '>
            {children}
          </main>
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
