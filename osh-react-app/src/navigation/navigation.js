import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-router-dom";
import "../index.css"

export const NavBar = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <nav className={`navbar ${ theme }`}>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    )

}