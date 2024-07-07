import type { NextPage } from "next";
import SingleReview from "./single-review";

export type ReviewsSectionType = {
  className?: string;
};

const ReviewsSection: NextPage<ReviewsSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-left text-lg text-black font-pt-sans ${className}`}
    >
      <div className="self-stretch bg-cornsilk overflow-hidden flex flex-row flex-wrap items-start justify-center py-[60px] px-[27px] box-border max-w-full mq700:pt-[39px] mq700:pb-[39px] mq700:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-[15px] box-border gap-[20px] max-w-[970px] min-h-[380px] mq975:max-w-full">
          <SingleReview
            reviewText="Thank you, this is so cool! So easy, but so damn convenient! Loving it!"
            author="Ellin"
          />
          <SingleReview
            reviewText={`Nicely customizable and a unique "Subtitles progress bar" feature - Works well.`}
            author="MadeInUSA"
            propMinWidth="330px"
          />
          <SingleReview
            reviewText="Great extension! I love the translation tool. Also, great design overall and it's open source, so thumbs up for that!!"
            author="Linus"
            propMinWidth="330px"
          />
          <SingleReview
            reviewText="Amazing! Perfect for learning languages, and has so many features that are hard to find in other extensions! "
            author="Knillinux"
            propMinWidth="330px"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
