import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    // Stap 1: Maak een state object aan voor de authenticatie
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
    });
    const navigate = useNavigate();

    // Stap 2: Pas de verwijzingen naar de state aan (ook bij je logout functie)
    // Stap 5: Token ontvangen en decoderen
    // Stap 6: Token opslaan in de local storage en verwijderen bij logout
    // Stap 7: Gebruiker ophalen met de token
    // Stap 8: Zet gebruikers info in de state (NIET DE JWT TOKEN)
    function login(jwt_token) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);
        // Indien niet alle gebruikers info met login wordt verstuurd, kan je deze hier ophalen
        console.log(decodedToken)
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                email: decodedToken.email,
                id: decodedToken.sub
            }
        })
        console.log('De gebruiker is ingelogd 🔓')
        navigate('/profile')
    }

    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null
        })
        console.log('De gebruiker is uitgelogd 🔒')
        navigate('/')
    }

    // Stap: 9: Geef ook de user mee aan de context
    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logout: logout,
        login: login
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;