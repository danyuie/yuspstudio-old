import './globals.css'
import type { Metadata } from 'next'



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
        {children}
      </body>
    </html>
  )
}
