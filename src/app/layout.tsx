import { inter, poppins } from '@/helpers/font'
import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Project Management',
  description: 'Frontend case',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
