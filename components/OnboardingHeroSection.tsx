import type { NextPage } from "next";

export type OnboardingHeroSectionType = {
  className?: string;
};

const OnboardingHeroSection: NextPage<OnboardingHeroSectionType> = ({
  className = "",
}) => {
  return (
        <div className="self-stretch flex flex-row mq700:flex-col items-enter justify-center gap-[24px] max-w-full text-13xl text-darkslategray-200">
          <div className="flex flex-row max-w-[970px] items-center justify-start mq700:justify-center pt-0 px-0 pb-8 box-border">
            <div className="flex-1 flex flex-row">
              <h2 className="m-0 text-center w-full flex-1 relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
                <p className="m-0">Pin the EasySubs icon<br />for quick access →</p>
              </h2>
            </div>
          </div>
          <img
            className="h-[287px] flex-1 relative rounded-2xl max-w-[550px] overflow-hidden object-cover mq700:max-w-full"
            loading="lazy"
            alt=""
            src="/images/screenshot-onboarding-pinning@2x.png"
          />
        </div>
  );
};

export default OnboardingHeroSection;
