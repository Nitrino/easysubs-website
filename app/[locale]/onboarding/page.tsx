//app/[locale]/onboarding/page.tsx

'use client'
//import type { NextPage } from "next";
import { useTranslations } from 'next-intl';
import HeaderSection from "@/components/header-section";
import OnboardingHeroSection from "@/components/OnboardingHeroSection";
import SupportedServices from "@/components/supported-services";
import NumberedFeatureSection1 from "@/components/NumberedFeatureSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/footer-section";

export default function AboutPage() {

    const t = useTranslations('OnboardingPage')

    return (
        <div className="w-full relative bg-background-light flex flex-col items-start justify-start py-[37px] px-0 box-border gap-[30px] leading-[normal] tracking-[normal] text-left text-23xl text-black font-pt-sans-narrow">
            <HeaderSection />
            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
            🎉 IT’S ALMOST READY!
            </h1>
            <OnboardingHeroSection />
            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                HOW TO USE
            </h1>
            <SupportedServices />
            <NumberedFeatureSection1 positionNumber="1"/>
            <NumberedFeatureSection1 positionNumber="2"/>
            <NumberedFeatureSection1 positionNumber="3"/>
            <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="bg-background-light overflow-hidden flex flex-row items-start justify-start py-16 px-0 box-border max-w-full">
                <button className="cursor-pointer [border:none] py-[15px] pr-[38px] pl-10 bg-chocolate h-[58px] rounded-3xs box-border flex flex-row items-start justify-start gap-[15px] max-w-full border-t-[1px] border-solid border-orangered border-r-[2px] border-b-[3px] border-l-[1px]">
                <b className="relative text-base leading-[26px] font-pt-sans text-background-light text-center">
                    Watch YouTube video with EasySubs
                </b>
                <div className="flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0">
                    <img
                    className="w-1.5 h-[10.6px] relative"
                    alt=""
                    src="/group.svg"
                    />
                </div>
                </button>
            </div>
            </section>
            <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                FREQUENTLY ASKED QUESTiONS
            </h1>
            <FaqSection />
            <FooterSection />
        </div>
    );
    };
    
    