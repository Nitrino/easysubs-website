import type { NextPage } from "next";
import SingleReview from "./single-review";
import { useTranslations } from 'next-intl'

export type ReviewsSectionType = {
  className?: string;
};

const ReviewsSection: NextPage<ReviewsSectionType> = ({ className = "" }) => {
  const t = useTranslations('HomePage_Reviews')
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-left text-lg text-black font-pt-sans ${className}`}
    >
      <div className="self-stretch bg-cornsilk overflow-hidden flex flex-row flex-wrap items-start justify-center py-[60px] px-[27px] box-border max-w-full mq700:pt-[39px] mq700:pb-[39px] mq700:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-[15px] box-border gap-[20px] max-w-[970px] min-h-[380px] mq975:max-w-full">
          <SingleReview
            reviewText={t('review1')}
            author="Ellin"
          />
          <SingleReview
            reviewText={t('review2')}
            author="MadeInUSA"
            propMinWidth="330px"
          />
          <SingleReview
            reviewText={t('review3')}
            author="Linus"
            propMinWidth="330px"
          />
          <SingleReview
            reviewText={t('review4')}
            author="Knillinux"
            propMinWidth="330px"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
