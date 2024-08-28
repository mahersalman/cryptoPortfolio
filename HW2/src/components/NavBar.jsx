import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import { navBarStyle } from '../styles/NavBarStyle'; // Import unified theme classes

function NavBar() {
  //const { theme } = useContext(ThemeContext); // Assuming this handles dark/light mode toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={navBarStyle.navBarContainer}>
      <div className={navBarStyle.navBarTitle}>CryptoTrack</div>
      
      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> {/* Close Icon (X) */}
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className={navBarStyle.navBarDropDown}>
          <div className="w-full flex flex-col items-center space-y-4">
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
