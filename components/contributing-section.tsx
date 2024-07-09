import type { NextPage } from "next";
import { useTranslations } from 'next-intl'

export type ContributingSectionType = {
  className?: string;
};

const ContributingSection: NextPage<ContributingSectionType> = ({
  className = "",
}) => {
  const t = useTranslations('Contributing')
  return (
    <section
      className={`self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-[27px] box-border max-w-full text-left text-lg text-black font-pt-sans mq450:flex-row mq450:flex-wrap ${className}`}
    >
      <div className="flex-1 bg-background-light flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border gap-[40px] min-w-[320px] max-w-[970px] mq975:max-w-full mq700:gap-[20px]">
        <img
          className="w-[390px] relative rounded-xl max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/images/contributing@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start min-w-[320px] max-w-[520px] mq700:max-w-full">
          <div className="w-full relative inline-block max-w-[520px] mq700:max-w-full">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              {t('contributing1')}
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              {t('contributing2')}
            </p>
            <p className="m-0">
              {t('contributing3')}
            </p>
          </div>
          <div className="bg-background-light overflow-hidden flex flex-col items-center justify-start py-8 px-0">
            <a href="https://github.com/Nitrino/easysubs" target="_blank" className="no-underline">
              <button className="cursor-pointer [border:none] pt-3 px-[38px] pb-2.5 bg-chocolate rounded-3xs overflow-x-auto flex flex-row items-center justify-center gap-[15px] border-t-[1px] border-solid border-orangered border-r-[2px] border-b-[3px] border-l-[1px]">
                <img
                  className="h-[29.5px] w-[30px] relative shrink-0 object-contain"
                  alt=""
                  src="/images/icon-github-white@2x.png"
                />
                <b className="relative text-base leading-[26px] inline-block font-pt-sans text-background-light text-center min-w-[86px]">
                  Get Involved
                </b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributingSection;
