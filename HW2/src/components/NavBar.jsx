import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme classes

function NavBar() {
  const { theme } = useContext(ThemeContext);
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme; // Select the correct theme classes
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={themeClasses.navBarContainer}>
      <div className={themeClasses.navBarTitle}>CryptoTrack</div>
      
      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className={themeClasses.navBarMenuButton}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke={theme === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> {/* Close Icon (X) */}
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke={theme === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> {/* Hamburger Icon */}
            </svg>
          )}
        </button>
      </div>

      {/* Menu items for larger screens */}
      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggleButton />
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className={themeClasses.navBarDropDown}>
          <div className="w-full flex flex-col items-center space-y-4">
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
