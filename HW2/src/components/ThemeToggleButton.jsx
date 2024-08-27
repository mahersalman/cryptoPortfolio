import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='mt-[-5] ml-[2.5]'>
      <input
        className='sr-only'
        type='checkbox'
        id='darkmode-toggle'
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        className={`relative block w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
          theme === 'dark' ? 'bg-[#242424]' : 'bg-gray-200'
        }`}
        htmlFor='darkmode-toggle'
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow transition-all duration-300 transform ${
            theme === 'dark'
              ? 'translate-x-9 bg-gradient-to-b from-gray-400 to-gray-600'
              : 'bg-gradient-to-b from-[#ffcc89] to-[#d8860b]'
          }`}
        />
        <ReactSVG
          src={SunSVG}
          className={`absolute top-1 left-1 w-5 transition-all duration-300 ${
            theme === 'dark' ? 'text-gray-500' : 'text-white'
          }`}
        />
        <ReactSVG
          src={MoonSVG}
          className={`absolute top-1 left-[2.5rem] w-5 transition-all duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-500'
          }`}
        />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
