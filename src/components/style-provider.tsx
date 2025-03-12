import { createContext, useContext, useEffect, useState } from 'react';

type Style = 'retro' | 'modern'

type StyleProviderProps = {
  children: React.ReactNode;
  defaultStyle?: Style;
  storageKey?: string;
};

type StyleProviderState = {
 style: Style;
setStyle: (style: Style) => void;
};

const initialState: StyleProviderState = {
  style: 'retro',
  setStyle: () => null,
};

const StyleProviderContext = createContext<StyleProviderState>(initialState);

export function StyleProvider({
  children,
  defaultStyle = 'retro',
  storageKey = 'evo-ui-style',
  ...props
}: StyleProviderProps) {
  const [style, setStyle] = useState<Style>(
    () => (localStorage.getItem(storageKey) as Style) || defaultStyle
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(style);
  }, [style]);

  const value = {
    style,
    setStyle: (style: Style) => {
      localStorage.setItem(storageKey, style);
      setStyle(style);
    },
  };

  return (
    <StyleProviderContext.Provider {...props} value={value}>
      {children}
    </StyleProviderContext.Provider>
  );
}

export const useStyle = () => {
  const context = useContext(StyleProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a StyleProvider');

  return context;
};
