import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c76916f3766cccaa32fc878a133bbe30@o4508473985990656.ingest.de.sentry.io/4508473991299152",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,    
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ['http://localhost:5173', /^https:\/\/yourserver\.io\/api/], 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
