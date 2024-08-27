import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white w-8 h-8 flex items-center justify-center text-2xl"
      >
      <span role="img" aria-label="sun">
        {theme === 'light' ? '☀️' : '🌑'}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
