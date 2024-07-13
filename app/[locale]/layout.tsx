// app/[locale]/layout.tsx

import '../globals.css'
import type { Metadata } from 'next'
//import Header from '@/components/Header'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: ReactNode
  params: { locale: string }
}


export const metadata: Metadata = {
  title: 'EasySubs – Learn languages from videos you watch',
  description: 'Free browser extension to master your vocabulary while watching movies and TV shows.',
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ['en', 'fr','ru'].map((locale) => ({ locale }))
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
