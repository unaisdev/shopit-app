// ThemeContext.tsx

import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';
import DarkTheme from '../../theme/darkTheme';
import LightTheme from '../../theme/lightTheme';
import { Theme } from '../../theme/types';

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDark);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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
