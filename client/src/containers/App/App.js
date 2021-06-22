import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions";
import Welcome from "../Welcome/Welcome";
import Start from "../../components/Start/Start";
import Home from "../../components/Home/Home";
import OtherProfile from "../OtherProfile/OtherProfile";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import "./styles.css";

export default function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => !user && dispatch(setUser()), []);

    if (user === undefined) {
        return <Loading />;
    } else if (user === null) {
        return <Welcome />;
    } else {
        return (
            <BrowserRouter>
                <>
                    <Route path="/" render={() => <NavBar user={user} />} />
                    <Route exact path="/" component={Start} />
                    <Route path="/profile" component={Home} />
                    <Route path="/user/:id" component={OtherProfile} />
                </>
            </BrowserRouter>
        );
    }
}