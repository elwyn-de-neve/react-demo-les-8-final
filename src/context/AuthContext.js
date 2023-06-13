import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    // Stap 1: Maak een state object aan voor de authenticatie
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate()

    // Stap 2: Pas de verwijzingen naar de state aan (ook bij je logout functie)
    // Stap 5: Token ontvangen en decoderen
    // Stap 6: Token opslaan in de local storage
    // Stap 7: Gebruiker ophalen met de token
    // Stap 8: Zet gebruikers info in de state (NIET DE JWT TOKEN)
    function login() {
        setIsAuth(true)
        console.log('De gebruiker is ingelogd 🔓')
        navigate('/profile')
    }

    function logout() {
        setIsAuth(false)
        console.log('De gebruiker is uitgelogd 🔒')
        navigate('/')
    }

    // Stap: 9: Geef ook de user mee aan de context
    const data = {
        isAuth: isAuth,
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