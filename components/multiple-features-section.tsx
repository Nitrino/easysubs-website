import type { NextPage } from "next";
import { useTranslations } from 'next-intl'

export type MultipleFeaturesSectionType = {
  className?: string;
};

const MultipleFeaturesSection: NextPage<MultipleFeaturesSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row mq700:flex-col mq700:items-center flex-wrap items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-black font-pt-sans ${className}`}
    >
      <div className="flex flex-row items-start mq700:items-center justify-start py-10 px-0 box-border gap-[30px] max-w-full mq700:flex-col mq450:pt-[26px] mq450:pb-8">
        <h2 className="m-0 w-[316px] mq975:w-[260px] mq700:w-[420px] relative text-inherit leading-[32px] font-normal font-inherit inline-block shrink-0 mq975:text-6xl mq975:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
          Multiple features to boost your language learning:
        </h2>
        <div className="flex flex-row items-start justify-start gap-[8px] min-w-[394px] max-w-full text-lg mq975:flex-1 mq700:min-w-full">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start py-2 px-0 gap-[14px]">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/images/icon-checkmark.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[28px]">
              <p className="m-0">Instant word pronouncation</p>
              <p className="m-0">Prononcation examples from Forvo and Youglish</p>
              <p className="m-0">Lookups in Cambridge and Urban dictionaries</p>
              <p className="m-0">Upload your own subtitles</p>
              <p className="m-0">Manual subtitle sync</p>
              <p className="m-0">Subtitle progress bar</p>
              <p className="m-0">Rewind video by subtitles</p>
              <p className="m-0">Autopause after each sentence</p>
              <p className="m-0">Size and position of subtitles</p>
              <p className="m-0">Works on Windows, Mac and Linux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultipleFeaturesSection;
