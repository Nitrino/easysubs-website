'use client'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
//import LocaleSwitcher from './LocaleSwitcher';
import LanguageSelector from '@/components/language-selector';

export default function HeaderSection() {
    const t = useTranslations('HeaderSection')
    return (
      <header className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xs text-black font-pt-sans">
        <div className="w-[800px] flex flex-row items-center justify-between pt-0 px-0 pb-0 box-border max-w-[800px] gap-[20px] mq975:max-w-full">
          <Link href="/">
            <img
              className="h-[22px] w-[141.5px] relative"
              loading="lazy"
              alt="EasySubs"
              src="/images/easysubs-logo.svg"
            />
          </Link>
          <LanguageSelector />
        </div>
      </header>
    )
}