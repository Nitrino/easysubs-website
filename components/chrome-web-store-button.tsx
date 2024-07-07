import type { NextPage } from "next";

export type ChromeWebStoreButtonType = {
  className?: string;
};

const ChromeWebStoreButton: NextPage<ChromeWebStoreButtonType> = ({
  className = "",
}) => {
  return (
    <a href="https://chromewebstore.google.com/detail/easysubs/ocelmccppkcibiflhhepafdjjomimddf?utm_source=easysubsco&utm_medium=social&utm_campaign=easysubs_co">
        <div
        className={`w-[300.4px] rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[22px] gap-[24px] border-[1.5px] border-solid border-black ${className}`}
        >
        <img
            className="h-[47.8px] w-[55px] relative"
            loading="lazy"
            alt=""
            src="/images/chrome-icon.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[5.9px] px-0 pb-0">
            <div className="self-stretch h-[35.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[23.8px] box-border gap-[7.8px]">
            <div className="flex flex-row items-start justify-start py-0 px-px">
                <img
                className="h-3 w-[104.4px] relative shrink-0"
                loading="lazy"
                alt=""
                src="/images/available-in-the.svg"
                />
            </div>
            <img
                className="self-stretch h-[16.1px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/chrome-web-store.svg"
            />
            </div>
        </div>
        </div>
    </a>
  );
};

export default ChromeWebStoreButton;
