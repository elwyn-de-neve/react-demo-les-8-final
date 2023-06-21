import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Login() {
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        try {
            const res = await axios.post('http://localhost:3000/login', {
                email,
                password
            });
            // Stap 4: Geef de JWT mee aan de login functie
            login(res.data.accessToken, '/profile');
        } catch (e) {
            console.error("Onjuist email en wachtwoord combinatie ⛔", e)
            // Hier je error handling in de UI
        }
    }

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                           autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           autoComplete="off"/>
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default Login;