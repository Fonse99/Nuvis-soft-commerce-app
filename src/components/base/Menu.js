import react from "react";

import icon from "../../assets/menu_icon24.png";

import "./styles/Header.css"
const Menu = () => {

    return (
        <div className={"menu-container"}>
            <img    
            className={"menu"} 
            src={icon}
             alt={"menu"} />
        </div>
    )

}


export default Menu;