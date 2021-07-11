import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        return <div>
            <img src={user?.picture} alt={user?.name}/>
            <h2>Hello, {user?.name}</h2>
        </div>
    }
    return <p>Tap the login button</p>
};

export default UserProfile;
