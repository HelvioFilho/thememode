import React from 'react';
import { ThemeProvider } from './src/assets/ThemeProvider';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
