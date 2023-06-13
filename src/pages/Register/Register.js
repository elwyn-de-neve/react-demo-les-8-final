import React, {useState} from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main>
            <h2>Registreren</h2>
            <div>
                <label htmlFor="username">Gebruikersnaam</label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
            </div>
            <div>
                <label htmlFor="password">Wachtwoord</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
            </div>
        </main>
    );
}

export default Register;