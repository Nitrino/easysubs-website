import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function FaqSection() {

  const t = useTranslations('FaqSection')

  type FaqItem = {
    question: string;
    answer: React.ReactNode;
  };
  
  type FaqTopic = {
    topic: string;
    items: FaqItem[];
  };
  
  const faqData: FaqTopic[] = [
    {
      topic: t('topic_bug_reports'),
      items: [
        {
          question: t('q_how_to_report'),
          answer: (
            <>
              <p>
                {t.rich('a_how_to_report', {
                  link: (chunks) => <Link href="https://t.me/easysubs_ext">{chunks}</Link>
                })}
              </p>
            </>
          ),
        }
      ],
    },
    {
      topic: t('topic_streaming_services'),
      items: [
        {
          question: t('q_how_to_enable_kinopub'),
          answer: (
            <>
              <p>
                {t.rich('a_how_to_enable_kinopub1', {
                  b: (chunks) => <b>{chunks}</b>
                })}
              </p>
  
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>
                  {t.rich('a_how_to_enable_kinopub2', {
                      b: (chunks) => <b>{chunks}</b>})
                    }
                  </li>
                <li>
                  <p>
                    {t.rich('a_how_to_enable_kinopub3', {
                      b: (chunks) => <b>{chunks}</b>})
                    }
                  </p>
                  <img src="/images/screenshot-kinopub-activation.png" width="360" />
                </li>
                <li>
                  <p>{t('a_how_to_enable_kinopub4')}</p>
                  <img src="/images/screenshot-kinopub-permissions.png" width="400" />
                </li>
                <li>{t('a_how_to_enable_kinopub5')}</li>
              </ul>
            </>
          ),
        }
      ],
    },
    {
      topic: t('topic_language_learning_services'),
      items: [
        {
          question:  t('q_how_to_enable_anki'),
          answer: (
            <>
              <ul>
                <li>
                  {t.rich('a_how_to_enable_anki1', {
                    b: (chunks) => <b>{chunks}</b>})
                  }
                </li>
                <li>
                  <p>
                    {t.rich('a_how_to_enable_anki2', {
                      b: (chunks) => <b>{chunks}</b>})
                    }
                  </p>
                  <img src="/images/screenshot-anki-activation.jpg" width="360" />
                </li>
                <li>
                  {t.rich('a_how_to_enable_anki3', {
                    link: (chunks) => <Link href="https://foosoft.net/projects/anki-connect/">{chunks}</Link>})
                  }
                </li>
              </ul>
              <p>
                {t.rich('a_how_to_enable_anki4', {
                  b: (chunks) => <b>{chunks}</b>})
                }
              </p>
            </>
          ),
        }
      ],
    },
  ];

  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleFaq = (topicIndex: number, itemIndex: number) => {
    setOpenItems(prev => ({
      ...prev,
      [topicIndex]: prev[topicIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section
      className="w-full bg-ghostwhite flex justify-center py-[52px] px-[27px] box-border text-left text-xl text-black font-pt-sans mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq975:pt-[34px] mq975:pb-[34px] mq975:box-border"
    >
      <div className="w-full max-w-[970px] shadow-[2px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-xl bg-background-light box-border flex flex-col items-center justify-start py-[54px] px-5 gap-[29.5px] border-[1px] border-solid border-background-light mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq975:pt-[35px] mq975:pb-[35px] mq975:box-border">
        {faqData.map((topic, topicIndex) => (
          <div key={topicIndex} className="w-full flex flex-col items-start justify-start gap-[24px]">
            <div className="w-full flex flex-row items-start justify-start text-3xl mb-4">
              <b className="relative leading-[22px] mq450:text-lg mq450:leading-[18px]">
                {topic.topic}
              </b>
            </div>
            {topic.items.map((item, itemIndex) => (
              <div key={itemIndex} className="w-full">
                <div 
                  className="self-stretch flex flex-row items-start justify-between gap-[20px] cursor-pointer"
                  onClick={() => toggleFaq(topicIndex, itemIndex)}
                >
                  <div className="flex-grow relative leading-[20px] mq450:text-base mq450:leading-[16px]">
                    {item.question}
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-[14.4px] h-3.5 relative"
                      loading="lazy"
                      alt=""
                      src={openItems[topicIndex] === itemIndex ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}
                    />
                  </div>
                </div>
                {openItems[topicIndex] === itemIndex && (
                  <div className="self-stretch flex flex-row items-start justify-start py-4 px-2.5 box-border text-base text-darkslategray-100">
                    <div className="flex-1 relative inline-block">
                      {item.answer}
                    </div>
                  </div>
                )}
                {itemIndex < topic.items.length - 1 && (
                  <div className="w-full h-px flex flex-row items-start justify-start py-0 px-[7px] box-border mt-4">
                    <div className="self-stretch flex-1 relative box-border border-t-[1px] border-solid border-neutral-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};