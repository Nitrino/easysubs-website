'use client';

import { useEffect } from 'react';
import { languages, defaultLanguage } from '../../appSettings';

export default function OnboardingRedirect() {
  useEffect(() => {
    const browserLanguages = navigator.languages || [navigator.language];
    
    // Find the first matching language
    const matchedLanguage = browserLanguages.find(lang => 
      Object.keys(languages).some(supportedLang => 
        lang.toLowerCase().startsWith(supportedLang.toLowerCase())
      )
    );

    // Use the matched language or fall back to the default
    const redirectLang = matchedLanguage 
      ? Object.keys(languages).find(lang => matchedLanguage.toLowerCase().startsWith(lang.toLowerCase()))
      : defaultLanguage;

    // Redirect to the appropriate onboarding page
    window.location.href = `/${redirectLang}/onboarding/`;
  }, []);

  return (
    <div>
      <h1>Onboarding Redirect</h1>
      <p>Redirecting...</p>
      <noscript>
        <p>JavaScript is required for language detection. Please choose your language:</p>
        <ul>
          {Object.entries(languages).map(([code, name]) => (
            <li key={code}>
              <a href={`/${code}/onboarding/`}>{name}</a>
            </li>
          ))}
        </ul>
      </noscript>
    </div>
  );
}