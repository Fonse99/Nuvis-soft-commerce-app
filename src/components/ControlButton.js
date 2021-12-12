import React from "react";

import "./styles/ControlButton.css"
//TODO this will be a input tag because this could be dynamic from only one component. :*
const ControlButton = ({level="primary", text="submit"}) => {
    return (
        <input className={"button-shape"} type={"submit"} value={text} placeholder={text}/>
    )
}

export default ControlButton;