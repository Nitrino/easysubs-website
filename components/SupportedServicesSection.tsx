import type { NextPage } from "next";
import { useTranslations } from 'next-intl'

export type SupportedServicesType = {
  className?: string;
};

const SupportedServicesSection: NextPage<SupportedServicesType> = ({
  className = "",
}) => {
  const t = useTranslations('SupportedServices')
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-black font-pt-sans ${className}`}
    >
      <div className="w-[770px] flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full mq450:gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <img
                className="h-12 w-12 relative min-h-[48px]"
                loading="lazy"
                alt="YouTube"
                src="/images/logo-youtube.svg"
              />
              <img
                className="h-12 w-12 relative min-h-[48px]"
                loading="lazy"
                alt="Netflix"
                src="/images/logo-netflix.svg"
              />
              <img
                className="h-12 w-12 relative min-h-[48px]"
                loading="lazy"
                alt="Coursera"
                src="/images/logo-coursera.svg"
              />
              <img
                className="h-12 w-12 relative min-h-[48px]"
                loading="lazy"
                alt="Kinopub"
                src="/images/logo-kinopub.svg"
              />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[316px] max-w-full">
          <div className="self-stretch relative leading-[16px]">
            {t('compatible_with')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedServicesSection;
