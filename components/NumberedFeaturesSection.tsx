import type { NextPage } from "next";
import { useTranslations } from 'next-intl';
import VideoPlayer from '@/components/VideoPlayer';

export type NumberedFeaturesSectionType = {
  className?: string;
  positionNumber?: string;
};

const NumberedFeaturesSection: NextPage<NumberedFeaturesSectionType> = ({
  className = "",
  positionNumber = "",
}) => {

  const t = useTranslations('OnboardingPage_NumberedFeatures')

  let content;
  let screencastName;
  switch (positionNumber) {
  case "1":
    content = (
      <>
        <ul className="m-0 font-inherit text-inherit pl-6">
          <li className="mb-1">{t('hover_to_translate')}</li>
          <li className="mb-1">{t('video_paused')}</li>
          <li>{t('translate_phrase')}</li>
        </ul>
      </>
    );
    screencastName = "/images/screencast-feature-translation.mp4";
    break;
  case "2":
    content = (
      <>
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          {t('export_words')}
        </p>
        <ul className="m-0 font-inherit text-inherit pl-6">
            <li className="mb-1">Anki</li>
            <li className="mb-1">LinguaLeo</li>
            <li className="mb-1">Puzzle English</li>
        </ul>
        <p className="m-0">
          {t('check_faq')}
        </p>
      </>
    );
    screencastName = "/images/screencast-feature-words.mp4";
    break;
  case "3":
    content = (
      <>
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          {t('do_you_have')}
        </p>
        <p className="m-0">
          {t('upload_subtitles')}
        </p>
      </>
    );
    screencastName = "/images/screencast-feature-subtitles.mp4";
    break;
  default:
    content = "No content";
    screencastName = "/images/screencast-feature-subtitles.mp4";
}
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center py-0 px-[27px] box-border max-w-full text-left text-3xl text-background-light font-pt-sans ${className}`}
    >
      <div className="flex-1 rounded-xl bg-lightcyan flex flex-row mq975:flex-col flex-wrap items-start mq975:items-center justify-center p-5 box-border gap-[30px_40px] max-w-[970px] mq975:max-w-[700px] mq700:max-w-full mq700:gap-[20px]">
        <div className="w-[338px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0">
            <div className="h-7 w-7 relative rounded-[50%] bg-chocolate" />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-20px]">
              <div className="relative leading-[22px] inline-block min-w-[12px] z-[1] mq450:text-lg mq450:leading-[18px]">
                {positionNumber}
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-lg text-black">
            {content}
          </div>
        </div>
        <VideoPlayer src={screencastName} width={550} height={287} />
      </div>
    </section>
  );
};

export default NumberedFeaturesSection;
