import React from 'react';
import { Switch } from '@mui/material';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="flex justify-end items-center p-4">
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        inputProps={{ 'aria-label': 'Dark mode toggle' }}
      />
      <span className={`ml-2 ${isDarkMode ? "text-white" : "text-black"}`}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeToggle;
