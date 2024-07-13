import type { NextPage } from "next";
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import { useMemo, type CSSProperties, useCallback } from "react";

export type FooterSectionType = {
  className?: string;
  /** Style props */
  propHeight?: CSSProperties["height"];
};

const FooterSection: NextPage<FooterSectionType> = ({
  className = "",
  propHeight,
}) => {
  const containerfooterStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const t = useTranslations('HomePage_Footer')

  return (
    <section
      className={`self-stretch h-[268px] flex flex-col items-center justify-start pt-20 px-0 pb-0 box-border max-w-full mq450:pt-[52px] mq450:box-border mq700:h-auto ${className}`}
      style={containerfooterStyle}
    >
      <footer className="self-stretch bg-ghostwhite flex flex-col items-center justify-start py-6 px-0 box-border gap-[30px] max-w-full shrink-0 text-center text-base text-black font-pt-sans">
        <div className="w-[1010px] flex flex-row items-start justify-between py-0 px-[60px] box-border gap-[20px] max-w-full text-2xs mq700:flex-col mq700:items-center mq700:pl-[30px] mq700:pr-[30px] mq700:box-border">
          <div className="w-[180px] flex flex-col items-center justify-start gap-[4px]">
            <Link href="/">
              <img
                className="self-stretch h-7 relative max-w-full overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                alt="EasySubs"
                src="/images/easysubs-logo.svg"
              />
            </Link>
            <div className="relative tracking-[-0.29px] leading-[13px]">
              {t('logo_motto')}
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[30px] text-left text-9xl text-chocolate font-pt-sans-narrow mq550:flex-col mq550:items-center mq550:gap-4">
            {/* 
            <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[103px] mq550:text-3xl mq550:text-center"> 
             {t('menu_features')} 
            </h3> 
            */}
            <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[41px] mq550:text-3xl mq550:text-center">
              <Link href="/faq" className="[text-decoration:none] text-inherit">{t('menu_faq')}</Link>
            </h3>
            {/* 
            <h3 className="m-0 relative text-inherit uppercase font-bold font-inherit inline-block min-w-[93px] mq550:text-3xl mq550:text-center">
              <Link href="/contact" className="[text-decoration:none] text-inherit">{t('menu_contact')}</Link>
            </h3>
            */}
          </div>
        </div>
        <div className="w-[1010px] flex flex-row items-start justify-center py-0 px-10 box-border gap-[20px] max-w-full">
          <a href="https://github.com/Nitrino/easysubs" target="_blank">
            <img
              className="w-[30px] relative object-contain"
              loading="lazy"
              alt=""
              src="/images/icon-github-black@2x.png"
            />
          </a>
          <a href="https://t.me/easysubs_ext" target="_blank">
            <img
              className="w-[30px] relative object-cover"
              loading="lazy"
              alt=""
              src="/images/icon-telegram@2x.png"
            />
          </a>
        </div>
        <Link className="[text-decoration:underline] text-deepskyblue" href="/privacy-policy">
          {t('privacy_policy')}
        </Link>
        <div className="self-stretch h-10 relative inline-block shrink-0">
          <span>{t('copyright')}</span>
          <Link
            className="text-deepskyblue"
            href="https://nitrino.dev/"
            target="_blank"
          >
            <span className="[text-decoration:underline]">Petr Stepchenko</span>
          </Link>
          <span>.</span>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
