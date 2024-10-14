import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

const DarkModeContext=createContext(null);

export const useDarkMode=()=>{
  const state = useContext(DarkModeContext);
  return state;
}

const DarkModeProvider=({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return(
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;