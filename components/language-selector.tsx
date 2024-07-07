'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { languages, defaultLanguage } from "@/appSettings";

export type LanguageSelectorType = {
  className?: string;
};

const LanguageSelector: React.FC<LanguageSelectorType> = ({
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('LanguageSelector');

  // Extract the current language from the pathname
  const currentLanguage = pathname.split('/')[1] || defaultLanguage;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getLanguageUrl = (lang: string) => {
    const path = pathname.split('/').filter(segment => segment !== '');
    
    // Remove the current language code from the path if it exists
    if (Object.keys(languages).includes(path[0])) {
      path.shift();
    }

    if (lang === defaultLanguage) {
      return `/${path.join('/')}`;
    }
    return `/${lang}/${path.join('/')}`;
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <img
          className="h-3.5 w-3.5 relative min-h-[14px] mr-2"
          alt=""
          src="/images/language-icon.svg"
        />
        <span className="text-sm">{languages[currentLanguage as keyof typeof languages]}</span>
        <img
          className="w-[8.9px] h-[5.2px] relative ml-2"
          alt=""
          src="/images/icon-arrowdown.svg"
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light border border-solid border-gray-300 rounded-8xs z-50">
          {Object.entries(languages).map(([code, name]) => (
            <Link
              key={code}
              href={getLanguageUrl(code)}
              className={`block px-3 py-2 hover:bg-neutral-100 ${
                code === currentLanguage ? "font-bold" : ""
              }`}
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;