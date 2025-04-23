import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
    
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return(
        <button onClick={ toggleTheme }>
            { isDarkMode ? 'Light Mode' : 'Dark Mode' }
        </button>
    )
}