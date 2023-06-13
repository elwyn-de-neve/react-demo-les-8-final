import React, {useContext} from 'react';
import {LanguageContext} from "../../context/LanguageContext";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import "./nav.css"

function Nav() {

    const {language, setLanguage} = useContext(LanguageContext)
    const {isAuth, logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profiel</Link></li>
            </ul>
            <div>
                <select value={language} onChange={handleChange}>
                    <option value="nl">NL 🇳🇱</option>
                    <option value="en">EN 🇬🇧</option>
                    <option value="fr">FR 🇫🇷</option>
                    <option value="es">ES 🇪🇸</option>
                </select>
                <ul>
                    {isAuth &&
                        <li>
                            <button type="button" onClick={logout}>Logout</button>
                        </li>
                    }
                    {!isAuth &&
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Registreren</Link></li>
                        </>
                    }
                </ul>
            </div>
        </nav>
);
}

export default Nav;