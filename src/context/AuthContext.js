import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {checkTokenValidity} from "../helper/checkTokenValidity";
import axios from "axios";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    // Stap 5: Maak een state aan om de pagina status bij te houden (pending, done)
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    const navigate = useNavigate();

    // Stap 1: Gebruik useEffect om te checken of er een token in de localstorage zit
    // Stap 2: Als er een token in de localstorage zit, check dan of deze nog geldig is (checkTokenValidity)
    // Stap 3: Als de token nog geldig is, log de gebruiker in
    // Stap 4: Als de token niet meer geldig is, log de gebruiker uit
    // Stap 7: Haal de user data op uit de database en sla deze op in de state
    // Stap 8: Geef een redirect mee (optioneel)

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken)
        } else {
            void logout()
        }

    }, [])

    async function login(jwt_token, redirect) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);
        console.log(decodedToken)
        try {
            const {
                data: {
                    email,
                    username,
                    id
                }
            } = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt_token}`
                }
            })
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email,
                    id,
                    username
                },
                status: "done"
            })
            console.log('De gebruiker is ingelogd 🔓')
            if (redirect) navigate(redirect);
        } catch (e) {
            console.error(e)
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        console.log('De gebruiker is uitgelogd 🔒')
        navigate('/')
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logout: logout,
        login: login
    }

    // Stap 6: Check of de pagina status pending is, als dit zo is, laat dan een loading icoon zien
    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;