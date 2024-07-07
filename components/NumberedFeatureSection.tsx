import type { NextPage } from "next";

export type NumberedFeatureSectionType = {
  className?: string;
  positionNumber?: string;
};

const NumberedFeatureSection: NextPage<NumberedFeatureSectionType> = ({
  className = "",
  positionNumber = "",
}) => {

  let content;
  let screenshotName;
  switch (positionNumber) {
  case "1":
    content = (
      <>
        <ul className="m-0 font-inherit text-inherit pl-6">
          <li className="mb-1">Hover over a word to translate it.</li>
          <li className="mb-1">Video playback will be automatically paused.</li>
          <li>Translate the entire phrase by clicking on it.</li>
        </ul>
      </>
    );
    screenshotName = "/images/rectangle-24@2x.png";
    break;
  case "2":
    content = (
      <>
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          Export words to your favourite language learning service:
        </p>
        <ul className="m-0 font-inherit text-inherit pl-6">
            <li className="mb-1">Anki</li>
            <li className="mb-1">LinguaLeo</li>
            <li className="mb-1">Puzzle English</li>
        </ul>
        <p className="m-0">
          For integration instructions, check out the Frequently Asked Questions below.
        </p>
      </>
    );
    screenshotName = "/images/rectangle-24@2x.png";
    break;
  case "3":
    content = (
      <>
        <p className="[margin-block-start:0] [margin-block-end:8px]">
          Do you have .SRT or .VTT subtitle file in your native language?
        </p>
        <p className="m-0">
          Upload it and easily sync it with the video if needed.
        </p>
      </>
    );
    screenshotName = "/images/rectangle-24@2x.png";
    break;
  default:
    content = "No content";
    screenshotName = "/images/rectangle-24@2x.png";
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
        <img
          className="h-[287px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover min-w-[335px]"
          loading="lazy"
          alt=""
          src={`${screenshotName}`}
        />
      </div>
    </section>
  );
};

export default NumberedFeatureSection;
