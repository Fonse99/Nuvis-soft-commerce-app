import React from "react";
import "./styles/RoundedTextField.css"

const RoundedTextField = ({ type = "text", placeHolder = "write here..." }) => {

    return (
        <input
            className={"rounded-shape "}
            type={type}
            placeholder={placeHolder}
        />
    )
}

export default RoundedTextField;