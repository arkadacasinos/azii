import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://azino777go.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Азино777 официальный сайт — рабочее зеркало, бонусы и слоты онлайн',
  description:
    'Азино777 официальный сайт и рабочее зеркало на сегодня. Регистрация, бонус 100%, фриспины, слоты с высоким RTP, вывод на СБП и карты за 5 минут. Азино777 казино — играй онлайн.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Азино777 официальный сайт — рабочее зеркало, бонусы и слоты онлайн',
    description:
      'Азино777 официальный сайт и рабочее зеркало на сегодня. Регистрация, бонус 100%, фриспины, слоты с высоким RTP, вывод на СБП и карты за 5 минут.',
    siteName: 'Азино777',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Азино777 официальный сайт — рабочее зеркало, бонусы и слоты онлайн',
    description:
      'Азино777 официальный сайт и рабочее зеркало на сегодня. Регистрация, бонус 100%, фриспины, слоты с высоким RTP, вывод на СБП и карты за 5 минут.',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f0c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable}`}>
      <head>
       <meta name="yandex-verification" content="206cf4debc99d895" />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
