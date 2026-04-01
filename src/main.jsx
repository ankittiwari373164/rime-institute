import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoaderProvider } from './context/LoaderContext.jsx'

import { HelmetProvider } from 'react-helmet-async'; 

import ReactGA from "react-ga4";

ReactGA.initialize("G-L9GVKHG6G4");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)