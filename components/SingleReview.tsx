import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SingleReviewType = {
  className?: string;
  reviewText?: string;
  author?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const SingleReview: NextPage<SingleReviewType> = ({
  className = "",
  reviewText,
  author,
  propMinWidth,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-mini bg-background-light box-border flex flex-col items-start justify-start py-[18px] px-[19px] min-w-[320px] max-w-[460px] text-left text-lg text-black font-pt-sans border-[1px] border-solid border-black mq450:max-w-full ${className}`}
      style={textStyle}
    >
      <img
        className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/images/icon-quote.svg"
      />
      <b className="self-stretch h-24 relative leading-[28px] inline-block shrink-0 mq975:h-28 mq700:h-24">
        {reviewText}
      </b>
      <b className="w-[186.3px] relative text-sm tracking-[2px] leading-[26px] uppercase inline-block text-gray-300">
        {author}
      </b>
    </div>
  );
};

export default SingleReview;
