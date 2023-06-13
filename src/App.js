import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./pages/Register/Register";
import './styles/global.css'
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {

    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/login"/> }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
        ;
}

export default App;
