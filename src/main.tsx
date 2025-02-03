import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';
import SiteHeader from './components/site-header.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light' storageKey='evo-ui-theme'>
    <StrictMode>
      <SiteHeader />
      <App />
    </StrictMode>
  </ThemeProvider>
);
