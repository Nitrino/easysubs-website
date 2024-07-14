import type { NextPage } from "next";
import { useTranslations } from 'next-intl';
import VideoPlayer from '@/components/VideoPlayer';

export type OnboardingHeroSectionType = {
  className?: string;
};

const OnboardingHeroSection: NextPage<OnboardingHeroSectionType> = ({
  className = "",
}) => {
  const t = useTranslations('OnboardingPage_HeroSection')
  return (
        <div className="self-stretch flex flex-row mq700:flex-col items-enter justify-center gap-[24px] max-w-full text-13xl text-darkslategray-200">
          <div className="flex flex-row max-w-[970px] items-center justify-start mq700:justify-center pt-0 px-0 pb-8 box-border">
            <div className="flex-1 flex flex-row">
              <h2 className="m-0 text-center w-full flex-1 relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
                <p className="m-0">{t.rich('h2_onboarding_header', {br: () => <br />})}</p>
              </h2>
            </div>
          </div>
          <VideoPlayer src="/images/screencast-feature-translation.mp4" width={550} height={287} />
        </div>
  );
};

export default OnboardingHeroSection;
