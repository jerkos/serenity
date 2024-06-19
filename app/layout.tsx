import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import L from './components/layout'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Serenity, by Marco Dubois',
    template: '%s',
  },
  description: 'Serenity is site describing my work and thought related to development.',
  openGraph: {
    title: 'Serenity, by Marco Dubois',
    description: 'Serenity is site describing my work and thought related to development.',
    url: baseUrl,
    siteName: 'Serenity',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cx(
        'text-black bg-white dark:text-white dark:bg-black transition-colors duration-500 ease-in-out',
        GeistSans.variable,
        GeistMono.variable
      )} antialiased max-w-xl mx-4 mt-8 lg:mx-auto`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  )
}
