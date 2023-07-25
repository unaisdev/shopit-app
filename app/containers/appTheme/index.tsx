// ThemeContext.tsx

import React, { createContext, useState, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import DarkTheme from '../../theme/darkTheme';
import LightTheme from '../../theme/lightTheme';
import { Theme } from '../../theme/types';

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const THEME_SCHEMA = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

type THEME_SCHEMA_VALUES = (typeof THEME_SCHEMA)[keyof typeof THEME_SCHEMA];

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useColorScheme() === 'dark';
  const [themSchema, setThemeSchema] = useState<THEME_SCHEMA_VALUES>(
    isDark ? THEME_SCHEMA.DARK : THEME_SCHEMA.LIGHT,
  );

  const toggleTheme = () => {
    setThemeSchema(prevMode =>
      prevMode === THEME_SCHEMA.DARK ? THEME_SCHEMA.LIGHT : THEME_SCHEMA.DARK,
    );
  };

  const isDarkMode = useMemo(
    () => themSchema === THEME_SCHEMA.DARK,
    [themSchema],
  );

  const theme = isDarkMode ? DarkTheme : LightTheme;

  const contextValue: ThemeContextProps = {
    theme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
