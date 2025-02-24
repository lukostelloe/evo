import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';
import { ThemeProvider } from './components/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light' storageKey='evo-ui-theme'>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
