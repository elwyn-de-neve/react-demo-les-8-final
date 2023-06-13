import React, {useContext} from 'react';
import content from "../../content/content.json";
import {LanguageContext} from "../../context/LanguageContext";
import {AuthContext} from "../../context/AuthContext";

function Home() {

    const {language} = useContext(LanguageContext)
    const {isAuth} = useContext(AuthContext)

    const title = content[language].homepage.title;
    const paragraph = content[language].homepage.paragraph;
    const welcome = content[language].homepage.welcome;

    return (
        <main>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {isAuth && <span>{welcome}</span>}
        </main>
    );
}

export default Home;