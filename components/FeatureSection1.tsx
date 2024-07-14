import type { NextPage } from "next";
import { useTranslations } from 'next-intl'
import VideoPlayer from '@/components/VideoPlayer';

export type FeatureSection1Type = {
  className?: string;
};

const FeatureSection1: NextPage<FeatureSection1Type> = ({ className = "" }) => {
  const t = useTranslations('HomePage_FeatureTranslation')
  return (
    <section
    className={`self-stretch flex flex-row items-start justify-center py-0 px-[27px] box-border max-w-full text-left text-5xl text-black font-pt-sans-narrow ${className}`}
    >
      <div className="flex-1 rounded-xl bg-lightcyan flex flex-row flex-wrap items-start justify-center py-6 px-8 box-border max-w-[970px] mq975:flex-col mq975:items-center mq975:justify-start mq975:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-center [row-gap:20px] max-w-full mq975:flex-col mq975:flex-[unset] mq975:self-stretch">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] min-w-[130px] max-w-full mq975:self-stretch mq975:w-auto mq975:items-center mq975:justify-start mq975:flex-[unset]">
            <img
              className="w-10 h-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/images/icon-feature-translation.svg"
            />
            <b className="relative leading-[28px] mq450:text-lgi mq450:leading-[22px]">
              {t('h3_translate_words')}
            </b>
            <div className="self-stretch relative text-lg font-pt-sans mq975:text-left mq975:self-stretch mq975:w-auto mq975:flex-1 mq975:flex-col mq975:items-center mq975:justify-start mq975:max-w-[320]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li className="mb-1">{t('hover_to_translate')}</li>
                <li className="mb-1">{t('video_paused')}</li>
                <li className="mb-1">{t('translate_phrase')}</li>
                <li>{t('lookup_details')}</li>
              </ul>
            </div>
          </div>
          <VideoPlayer src="/images/screencast-feature-translation.mp4" width={550} height={287} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
