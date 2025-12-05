import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte du thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
};

// Provider du thème
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Récupérer la préférence sauvegardée ou utiliser la préférence système
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark';
      // Appliquer immédiatement le thème
      document.documentElement.setAttribute('data-theme', savedTheme);
      return isDarkTheme;
    }
    // Vérifier la préférence système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    return prefersDark;
  });

  // Basculer entre les thèmes
  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  // Sauvegarder la préférence et appliquer le thème
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDark]);

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
