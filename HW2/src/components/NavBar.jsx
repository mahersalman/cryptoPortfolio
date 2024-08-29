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
            <div><ThemeToggleButton /></div>
    </div>
  );
}

export default NavBar;
