import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LanguageContextProvider from "./context/LanguageContext";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <LanguageContextProvider>
                    <App/>
                </LanguageContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);
