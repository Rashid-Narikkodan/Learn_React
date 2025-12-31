import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme,_setTheme] = useState<'light'|'dark'>('light')
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider