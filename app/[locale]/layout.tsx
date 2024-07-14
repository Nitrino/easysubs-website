import '../globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { languages, defaultLanguage } from '../../appSettings'

type Props = {
  children: ReactNode
  params: { locale: string }
}

// Function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    console.warn(`No messages found for locale: ${locale}. Falling back to default language.`)
    return (await import(`@/messages/${defaultLanguage}.json`)).default
  }
}

// Function to generate the routes for all the locales
export function generateStaticParams() {
  return Object.keys(languages).map((locale) => ({ locale }))
}

// Function to generate metadata
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = await getMessages(locale)

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,
    icons: {
      icon: [
        { url: '/favicons/favicon.ico', sizes: 'any' },
        { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
    },
    openGraph: {
      title: messages.metadata.ogTitle,
      description: messages.metadata.ogDescription,
      url: `https://easysubs.cc/${locale}`,
      siteName: 'EasySubs',
      images: [
        {
          url: 'https://easysubs.cc/favicons/og-image.jpg',
          width: 1200,
          height: 630,
          alt: messages.metadata.ogImageAlt,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.twitterTitle,
      description: messages.metadata.twitterDescription,
      images: ['https://easysusbs.cc/favicons/twitter-image.jpg'],
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
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body className='bg-gray-100 m-0'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='p-0'>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}