import React from 'react';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';

const ThemeToggleButton = () => {
  const handleToggle = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className='mt-[-5] ml-[2.5]'>
      <input
        className='sr-only'
        type='checkbox'
        id='darkmode-toggle'
        defaultChecked={localStorage.getItem('theme') === 'dark'}
        onChange={handleToggle}
      />
      <label
        className='relative block w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner bg-gray-200 dark:bg-[#242424]'
        htmlFor='darkmode-toggle'
      >
        <span
          className='absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow transition-all duration-300 transform bg-gradient-to-b from-[#ffcc89] to-[#d8860b] dark:bg-gradient-to-b dark:from-gray-400 dark:to-gray-600'
        />
        <ReactSVG
          src={SunSVG}
          className='absolute top-1 left-1 w-5 transition-all duration-300 text-white dark:text-gray-500'
        />
        <ReactSVG
          src={MoonSVG}
          className='absolute top-1 left-[2.5rem] w-5 transition-all duration-300 text-gray-500 dark:text-white'
        />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
