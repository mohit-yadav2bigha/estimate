import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Estimating Buddies',
  description: 'Estimating Buddies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
