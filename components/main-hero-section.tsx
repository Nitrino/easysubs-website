import type { NextPage } from "next";
import { useTranslations } from 'next-intl';
import ChromeWebStoreButton from "./chrome-web-store-button";

export type MainHeroSectionType = {
  className?: string;
};

const MainHeroSection: NextPage<MainHeroSectionType> = ({ className = "" }) => {
  const t = useTranslations('HomePage_HeroSection')
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-left text-23xl text-black font-pt-sans-narrow ${className}`}
    >
      <div className="flex-1 [background:radial-gradient(50%_50%_at_50%_50%,_#fff,_#ffbdc6_50%,_rgba(255,_255,_255,_0.8))] flex flex-col items-center justify-start py-12 px-5 box-border gap-[48px] max-w-full mq975:pt-7 mq700:pt-0 mq700:pb-[16px] mq700:box-border mq450:gap-[24px]">
        <div className="w-[796px] flex flex-row flex-wrap items-start mq975:items-center justify-start mq975:justify-center py-0 pr-0.5 pl-0 box-border gap-[30px] max-w-full">
          <div className="w-[296px] flex flex-col items-start justify-start mq700:items-center pt-[48px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <h1 className="m-0 relative text-inherit leading-[41px] font-bold font-inherit mq975:text-15xl mq975:leading-[33px] mq450:text-6xl mq450:leading-[25px]">
                {t.rich('h1_hero_header', {br: () => <br />})}
              </h1>
              <div className="self-stretch h-11 relative text-lg leading-[18px] font-pt-sans inline-block">
                <p className="m-0">{t.rich('h2_hero_header', {br: () => <br />})}</p>
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-[470px] overflow-hidden min-w-[335px] mq700:max-w-full"
            loading="lazy"
            alt=""
            src="/images/macbook@2x.png"
          />
        </div>
        <div className="w-[796px] flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full text-base mq975:pl-[38px] mq975:pr-[38px] mq975:box-border">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-between py-5 pr-1 pl-0 box-border min-h-[108px] max-w-full gap-[20px] mq700:flex-col mq700:items-center mq700:justify-start mq450:flex-col">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                alt=""
                src="/images/icons8mixwords-2.svg"
              />
              <div className="relative leading-[30px] inline-block min-w-[125px]">
                {t('hero_feature_subtitles')}
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                alt=""
                src="/images/icons8language-1.svg"
              />
              <div className="relative leading-[30px] inline-block min-w-[121px]">
                {t('hero_feature_translation')}
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icons8warranty-2-1.svg"
              />
              <div className="relative leading-[30px] inline-block min-w-[119px]">
                {t('hero_feature_opensource')}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[796px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <ChromeWebStoreButton />
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
