import react from "react";

import Menu from "./Menu";
import Profile from "../Profile";

import "./styles/Header.css"

const Header = () => {

    return (

        <header className={"header-color header-layout"}>
            <Menu />
            <Profile />

        </header>
    )

}

export default Header;