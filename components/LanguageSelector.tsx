import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { languages, defaultLanguage } from "@/appSettings";

export type LanguageSelectorType = {
  className?: string;
};

const LanguageSelector: React.FC<LanguageSelectorType> = ({
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLanguage = pathname.split('/')[1] || defaultLanguage;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getLanguageUrl = (lang: string) => {
    const path = pathname.split('/').filter(segment => segment !== '');
    path.shift();
    return `/${lang}/${path.join('/')}`;
  };

  const languageEntries = Object.entries(languages);
  const columnLength = Math.ceil(languageEntries.length / 3);

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
          src="/images/icon-world.svg"
        />
        <span className="text-sm">{languages[currentLanguage as keyof typeof languages]}</span>
        <img
          className="w-[8.9px] h-[5.2px] relative ml-2"
          alt=""
          src="/images/icon-arrowdown.svg"
        />
      </div>
      {isOpen && (
        <div className="absolute top-full right-0 w-72 bg-background-light border border-solid border-gray-300 rounded-8xs z-50 flex shadow-md">
          {[0, 1, 2].map((columnIndex) => (
            <div key={columnIndex} className="w-1/3 px-1">
              {languageEntries.slice(columnIndex * columnLength, (columnIndex + 1) * columnLength).map(([code, name]) => (
                <Link
                  key={code}
                  href={getLanguageUrl(code)}
                  className={`block px-2 py-1.5 hover:bg-neutral-100 text-xs ${
                    code === currentLanguage ? "font-bold" : ""
                  }`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;