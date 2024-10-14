import React from 'react';
import { Switch } from '@mui/material';
import { useDarkMode } from '../context/DarkModeContext';



const DarkModeToggle = () => {
    const context=useDarkMode();
    
  return (
    <div className="flex justify-end items-center p-4">
      <Switch
        checked={context?.isDarkMode}
        onChange={context?.toggleDarkMode}
        inputProps={{ 'aria-label': 'Dark mode toggle' }}
      />
      <span className={`ml-2 ${context.isDarkMode ? "text-white" : "text-black"}`}>{context.isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeToggle;
