// app/page.tsx
'use client'
import { useTranslations } from 'next-intl';
import HeaderSection from "@/components/HeaderSection";
import MainHeroSection from "@/components/MainHeroSection";
import SupportedServicesSection from "@/components/SupportedServicesSection";
import MultipleFeaturesSection from "@/components/MultipleFeaturesSection";
import ChromeWebStoreButton from "@/components/ChromeWebStoreButton";
import FeatureSection1 from "@/components/FeatureSection1";
import FeatureSection2 from "@/components/FeatureSection2";
import FeatureSection3 from "@/components/FeatureSection3";
import ReviewsSection from "@/components/ReviewsSection";
import ContributingSection from "@/components/ContributingSection";
import FooterSection from "@/components/FooterSection";


export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div className="w-full relative bg-background-light flex flex-col items-center justify-center pt-6 px-0 pb-0 box-border gap-[30px] mq700:gap-2 tracking-[normal] leading-[normal] text-left text-23xl text-black font-pt-sans-narrow">
      <HeaderSection />
      <MainHeroSection />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="flex flex-row items-start justify-start pt-12 px-0 pb-0">
          <h1 className="m-0 relative text-inherit leading-[62px] uppercase font-normal font-inherit mq975:text-15xl mq975:leading-[50px] mq450:text-6xl mq450:leading-[37px]">
            {t('h1_features')}
          </h1>
        </div>
      </div>
      <SupportedServicesSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <MultipleFeaturesSection />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <ChromeWebStoreButton />
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-23xl text-black font-pt-sans-narrow">
        <div className="flex flex-row items-start justify-start pt-12 px-0 pb-0">
          <div className="relative leading-[62px] uppercase mq975:text-15xl mq975:leading-[50px] mq450:text-6xl mq450:leading-[37px]">
            {t('h1_happy_users')}
          </div>
        </div>
      </section>
      <ReviewsSection />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-23xl text-black font-pt-sans-narrow">
        <div className="flex flex-row items-start justify-start pt-12 px-0 pb-0">
          <h1 className="m-0 relative text-inherit leading-[62px] uppercase font-normal font-inherit mq975:text-15xl mq975:leading-[50px] mq450:text-6xl mq450:leading-[37px]">
            {t('h1_contributing')}
          </h1>
        </div>
      </section>
      <ContributingSection />
      <FooterSection
        propHeight="unset"
      />
    </div>
  );
};



