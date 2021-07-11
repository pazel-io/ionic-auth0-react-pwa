import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IonButton, IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <IonButton onClick={() => logout({ returnTo: window.location.origin })}>
            <IonIcon slot="start" icon={logOut} />
            Log Out
        </IonButton>
    );
};

export default LogoutButton;
