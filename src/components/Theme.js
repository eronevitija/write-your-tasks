import React, {useState, createContext} from 'react'

export default function Theme() {

  const [darkMode,setDarkMode] = useState('light');

  const ThemeContext = createContext();

  const toggleTheme = () => {
    setDarkMode((mode)=>mode ==='light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{darkMode,toggleTheme}}>

    </ThemeContext.Provider>
  )
}
