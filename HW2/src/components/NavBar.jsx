import React, { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { navBarStyle } from '../styles/NavBarStyle'; 

/**
 * NavBar component displays the navigation bar with the app title and a theme toggle button.
 * @returns {JSX.Element} The rendered NavBar component.
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={navBarStyle.navBarContainer}>
      <div className={navBarStyle.navBarTitle}>CryptoTrack</div>
            <div><ThemeToggleButton /></div>
    </div>
  );
}

export default NavBar;
