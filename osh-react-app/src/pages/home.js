import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Home = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <>
            <h1>Welcome to My React Dashboard</h1>
            <p>current theme : { theme }</p>
        </>
    )
}