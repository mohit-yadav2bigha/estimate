import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Head from 'next/head'  
import Script from 'next/script'

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-54457B54');
            `,
          }}
        />
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-54457B54"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
