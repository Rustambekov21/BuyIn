import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './companents/root'
import "./assets/style/main.scss"
import LanguageProvider from './context/languageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <Root/>
    </LanguageProvider>
  </BrowserRouter>
);
