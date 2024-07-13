//app/[locale]/privacy-policy/page.tsx

'use client'
import { useTranslations } from 'next-intl';
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicyPage() {

    const t = useTranslations('PrivacyPolicyPage')

    return (
      <div className="w-full relative bg-background-light flex flex-col items-start justify-start py-[37px] px-0 box-border leading-[normal] tracking-[normal] text-left text-23xl text-black font-pt-sans-narrow">
              <HeaderSection />
              <h1 className="pt-12 text-center text-inherit w-full font-normal font-inherit uppercase leading-[62px] mq975:text-15xl mq450:text-6xl mq975:leading-[50px] mq450:leading-[37px]">
                  {t('h1_privacy_policy')}
              </h1>
              <section
                className="w-full bg-ghostwhite flex justify-center py-[52px] px-[27px] box-border text-left text-xl text-black font-pt-sans mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq975:pt-[34px] mq975:pb-[34px] mq975:box-border"
              >
                <div className="w-full max-w-[970px] shadow-[2px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-xl bg-background-light box-border flex flex-col items-center justify-start py-[54px] px-5 gap-[29.5px] border-[1px] border-solid border-background-light mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq975:pt-[35px] mq975:pb-[35px] mq975:box-border">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[24.43px] mix-blend-normal">
                      <p>This Privacy Policy describes how EasySubs ("we", "us", or "our") collects, uses, and shares information about you when you use our Chrome extension and website located at easysubs.cc. Please read this policy carefully to understand our practices regarding your information.</p>

                      <h2>Chrome Extension Privacy Policy</h2>

                      <h3>Information Collection and Use</h3>

                      <p>The EasySubs Chrome extension is designed to improve your vocabulary while watching movies and TV shows. It operates only on specific websites such as youtube.com, netflix.com, and coursera.com.</p>

                      <p>1. <b>Data Capture</b>: Our extension captures data from web pages on these specified websites to provide translation services for words or phrases you select. This data is processed locally on your device and is not transmitted to or stored on our servers.</p>

                      <p>2. <b>No Tracking</b>: The Chrome extension itself does not use Google Analytics or any other tracking services to collect information about your browsing habits or personal information.</p>

                      <p>3. <b>External Services</b>: The extension uses external services for translation of subtitles and word pronunciation. These third-party services may collect and process certain data, including:</p>
                      <ul>
                        <li>IP address</li>
                        <li>Technical data about your device and browser</li>
                        <li>The text you submit for translation or pronunciation</li>
                      </ul>
                      
                      <p>Please note that while we carefully select our service providers, we do not have control over how they use this information. We recommend reviewing the privacy policies of these services for more details.</p>

                      <h3>Data Storage</h3>

                      <p>All data processed directly by the Chrome extension is stored locally on your device. We do not have access to this data, nor do we transmit it to any external servers. However, as mentioned above, data sent to external translation and pronunciation services is subject to their respective privacy policies.</p>

                      <h3>Third-Party Access</h3>

                      <p>The EasySubs Chrome extension does not share any information with third parties, except as necessary to provide translation and pronunciation services as described above.</p>

                      <h2>Website Privacy Policy (easysubs.cc)</h2>

                      <h3>Information Collection and Use</h3>

                      <p>1. <b>Analytics</b>: Our website uses Google Analytics to collect standard internet log information and details of visitor behavior patterns. This information is processed in a way that does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of those visiting our website.</p>

                      <p>2. <b>Feedback Form</b>: Our website includes a feedback form where users can voluntarily provide their email address if they wish to receive a reply. This information is used solely for the purpose of responding to user feedback and is not used for marketing purposes or shared with third parties.</p>

                      <h3>Data Storage and Security</h3>

                      <p>Email addresses collected through the feedback form are stored securely on our servers. We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

                      <h3>Third-Party Access</h3>

                      <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                      <h3>Your Rights</h3>

                      <p>You have the right to request access to the personal information we hold about you. You can also request correction, updating, or deletion of your personal information. Please contact us using the information provided below to make such requests.</p>

                      <h2>Changes to This Privacy Policy</h2>

                      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

                      <h2>Contact Us</h2>

                      <p>If you have any questions about this Privacy Policy, please contact us at:</p>

                      <p>Email: support@easysubs.cc</p>

                      <p>Last updated: 13.07.2024</p>

                    </div>
                  </div>
                </div>
              </section>
              <FooterSection />
          </div>
    );
};

