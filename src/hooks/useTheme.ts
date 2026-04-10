import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [fontSize, setFontSize] = useState(1); // 1 = 100%, 1.2 = 120%, etc.

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 16}px`;
  }, [fontSize]);

  const toggleDark = () => setIsDark(!isDark);
  const increaseFont = () => setFontSize(prev => Math.min(prev + 0.1, 1.5));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));

  return { isDark, toggleDark, fontSize, increaseFont, decreaseFont };
}
