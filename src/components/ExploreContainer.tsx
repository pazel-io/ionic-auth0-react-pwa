import './ExploreContainer.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = () => {
    const {isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        return (
            <div className="container">
                <UserProfile/>
                <LogoutButton/>
            </div>
        );
    }
    return (
        <div className="container">
            <UserProfile/>
            <LoginButton/>
        </div>
    );

};

export default ExploreContainer;
