import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme classes

const SelectButton = ({ children, selected, onClick }) => {
  const { theme } = useContext(ThemeContext); // Get the current theme
  const themeClasses = theme === "dark" ? darkTheme : lightTheme; // Apply the correct theme classes

  const buttonClasses = `${themeClasses.selectButtonBase} ${selected ? themeClasses.selectButtonSelected : themeClasses.selectButtonUnselected}`;

  return (
    <span onClick={onClick} className={buttonClasses}>
      {children}
    </span>
  );
};

export default SelectButton;
