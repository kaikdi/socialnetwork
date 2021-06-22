import Search from "../Search/Search";
import Button from "../Button/Button";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import FriendRequests from "../../containers/FriendRequests/FriendRequests";
import axios from "../../utilities/axios";
import "./styles.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    const { id, profile_picture_url } = props.user;
    const logout = async () => {
        await axios.post("/api/logout");
        window.location.replace("/");
    };

    return (
        <nav>
            {window.location.pathname === "/profile" ?
                <Link to="/">
                    <Button id="home-button" icon="./assets/home.svg" alt="home" />
                </Link>
                : <Link to="/profile">
                    <ProfilePicture pictureUrl={profile_picture_url} />
                </Link>
            }
            <Search />
            <FriendRequests id={id} />
            <Button id="logout" icon="/assets/logout.svg" alt="logout" action={logout} />
        </nav>
    );
}