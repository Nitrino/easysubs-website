//app/[locale]/faq/page.tsx

'use client'
import { useTranslations } from 'next-intl';
import HeaderSection from "@/components/HeaderSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function FaqPage() {

  const t = useTranslations('FaqPage')

    return (
      <div className="w-full relative bg-background-light flex flex-col items-start justify-start py-[37px] px-0 box-border leading-[normal] tracking-[normal] text-left text-23xl text-black font-pt-sans-narrow">
        <HeaderSection />
        <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
            {t('h1_faq')}
        </h1>
        <p className="m-0 text-xl text-center text-inherit w-full font-normal font-inherit">
          {t.rich('cant_find_contact', {
            link: (chunks) => <Link href="https://t.me/easysubs_ext">{chunks}</Link>
          })}
        </p>
        <FaqSection />
        <FooterSection />
    </div>
    );
};

