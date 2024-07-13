//app/[locale]/onboarding/page.tsx

'use client'
//import type { NextPage } from "next";
import { useTranslations } from 'next-intl';
import HeaderSection from "@/components/HeaderSection";
import OnboardingHeroSection from "@/components/OnboardingHeroSection";
import SupportedServicesSection from "@/components/SupportedServicesSection";
import NumberedFeatureSection from "@/components/NumberedFeaturesSection";
import Button from "@/components/Button";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function OnboardingPage() {

    const t = useTranslations('OnboardingPage')

    return (
        <div className="w-full relative bg-background-light flex flex-col items-start justify-start py-[37px] px-0 box-border gap-[30px] leading-[normal] tracking-[normal] text-left text-23xl text-black font-pt-sans-narrow">
            <HeaderSection />
            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                {t('h1_ready')}
            </h1>
            <OnboardingHeroSection />
            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                {t('h1_how_to_start')}
            </h1>
            <SupportedServicesSection />
            <NumberedFeatureSection positionNumber="1"/>
            <NumberedFeatureSection positionNumber="2"/>
            <NumberedFeatureSection positionNumber="3"/>
            <Button />

            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                {t('h1_faq')}
            </h1>
            <FaqSection />
            <FooterSection />
        </div>
    );
    };