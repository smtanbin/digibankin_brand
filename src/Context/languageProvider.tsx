import React, { ReactNode, createContext, useState } from 'react';

interface LanguageContextValue {
    language: boolean | null;
    setLanguage: (value: boolean) => void;
}

const initialLanguage = true; // Set your initial language value here

export const LanguageContext = createContext<LanguageContextValue>({
    language: initialLanguage,
    setLanguage: () => { },
});

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<boolean | null>(initialLanguage);

    // Use your own implementation or replace this with your desired logic

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const LanguageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // You don't need this useContext here if you are not using language and setLanguage directly in this component

    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
};

export default LanguageContextProvider;
