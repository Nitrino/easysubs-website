'use client'
import Link from 'next-intl/link';
import LanguageSelector from '@/components/LanguageSelector';

export default function HeaderSection() {
    return (
      <header className="self-stretch flex flex-row items-start justify-center pt-4 px-5 box-border max-w-full text-left text-xs text-black font-pt-sans">
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