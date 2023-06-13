import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Login() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        // Stap 4: Geef de JWT mee aan de login functie
        login();
    }

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default Login;