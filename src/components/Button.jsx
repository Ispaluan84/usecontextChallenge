import { useContext } from "react";
import {ThemeContext} from "../themes/ThemeContext";

const Button = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
        </button>
    );
};

export default Button;