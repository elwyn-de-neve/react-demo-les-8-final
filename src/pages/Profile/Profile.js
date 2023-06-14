import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Profile() {

    const { user: { email } } = useContext(AuthContext);

    return (
        <main>
            <h1>Profile</h1>
            <p>Welcome <span>{ email }</span></p>
        </main>
    );
}

export default Profile;