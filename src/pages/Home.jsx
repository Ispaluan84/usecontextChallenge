import React, {useContext} from "react";
import { ThemeContext} from  "../themes/ThemeContext";
import Button from "../components/Button";

const Home = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <section className={`page ${theme}`}>
            <h1>Esta es la Home</h1>
            <Button />
        </section>
    );
};

export default Home;