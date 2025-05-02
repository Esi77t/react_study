import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Settings = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <>
            <h1>Settings</h1>
            <p>current theme : { theme }</p>
            <button onClick={ toggleTheme }>Toggle Theme</button>
        </>
    )
}