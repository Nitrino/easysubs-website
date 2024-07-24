//app/[locale]/privacy-policy/page.tsx

"use client";
import { useTranslations } from "next-intl";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="w-full relative bg-background-light flex flex-col items-start justify-start py-[37px] px-0 box-border leading-[normal] tracking-[normal] text-left text-23xl text-black font-pt-sans-narrow">
      <HeaderSection />
      <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
        {t("h1_contact_us")}
      </h1>
      <section className="w-full bg-ghostwhite flex justify-center py-[52px] px-[27px] box-border text-left text-xl text-black font-pt-sans mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq975:pt-[34px] mq975:pb-[34px] mq975:box-border">
        <div className="w-full max-w-[970px] shadow-[2px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-xl bg-background-light box-border flex flex-col items-center justify-start py-[54px] px-5 gap-[30px] border-[1px] border-solid border-background-light mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq975:pt-[35px] mq975:pb-[35px] mq975:box-border">
          <div className="px-10">{t("we_love_to_hear")}</div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[24.43px] mix-blend-normal">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdX1nwGXAkqmZrZ5y8eQcIjfnO54t0d0a3T-9FK6sQGia_dLw/viewform?embedded=true"
                width="100%"
                height="905"
                style={{ border: "none" }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
