import React from "react";

const ScrollButton = (props) => {

    const {
        className = "qty-field",
        min = 0,
        max = 1000,
        value
    } = props;

    return (

        <input
            className={className}
            type={"number"}
            min={min}
            max={max}
            value={value}
        />

    )
}


export default ScrollButton;