import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { dark, light } from '../assets/theme';


enum ThemeType {
  light = "light",
  dark = "dark",
}

const themes = {
  [ThemeType.light]: light,
  [ThemeType.dark]: dark,
}

export const ThemeContext = createContext({
  theme: ThemeType.dark,
  toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(ThemeType.dark);

  async function loadTheme(){
    const savedTheme = await AsyncStorage.getItem('@appLight:theme') as ThemeType;
    if(savedTheme){
      setTheme(savedTheme);
    }
  }

  function toggleTheme() {
    let newTheme;
    if (theme === ThemeType.light) {
      newTheme = ThemeType.dark;
    } else {
      newTheme = ThemeType.light;
    }

    AsyncStorage.setItem('@appLight:theme', newTheme);
    setTheme(newTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}