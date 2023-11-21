import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'

import LanguageContextProvider from './Context/languageProvider.tsx';
import LandingPage from './LandingPage.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <LandingPage />
    </LanguageContextProvider>
  </React.StrictMode>,
)
