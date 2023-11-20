import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import RootRouter from './router/RootRouter.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import LanguageContextProvider from './Context/languageProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <LanguageContextProvider>
        <RootRouter />
      </LanguageContextProvider>
    </Router>
  </React.StrictMode>,
)
