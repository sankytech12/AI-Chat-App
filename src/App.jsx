import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Chat from './components/Chat';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import DarkModeToggle from './components/DarkModeToggle';

import './App.css'

const theme = createTheme();

function App() {

  return (
    <div className="bg-white dark:bg-[#131314] text-black dark:text-white h-[100vh]">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Chat Application</h1>
            <DarkModeToggle />
          </header>
          <Chat />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
