import './i18n.ts';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/theme-provider.tsx';
import { StyleProvider } from './components/style-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light' storageKey='evo-ui-theme'>
    <StyleProvider defaultStyle='retro' storageKey='evo-ui-style'>
      <StrictMode>
        <App />
      </StrictMode>
    </StyleProvider>
  </ThemeProvider>
);
