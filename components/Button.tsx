import type { NextPage } from "next";
import { useTranslations } from 'next-intl';

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({
  className = "",
}) => {
  const t = useTranslations('OnboardingPage')
  return (
    <div className="bg-background-light overflow-hidden flex flex-col items-center w-full py-8 px-0">
    <a href="https://youtu.be/RKK7wGAYP6k?si=T1fmjlhfYAHFBVdC&t=12" target="_blank" className="no-underline">
      <button className="cursor-pointer [border:none] pt-3 px-[38px] pb-2.5 bg-chocolate rounded-3xs overflow-x-auto flex flex-row items-center justify-center gap-[15px] border-t-[1px] border-solid border-orangered border-r-[2px] border-b-[3px] border-l-[1px]">
        <b className="relative text-base leading-[26px] inline-block font-pt-sans text-background-light text-center min-w-[86px]">
            {t('watch_youtube_video_button')}
        </b>
      </button>
    </a>
  </div>
  );
};

export default Button;
