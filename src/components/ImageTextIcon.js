import React from "react";


const ImageTextIcon = (props) => {

    const {
        text,
        imgSrc,
        className = "item-icon"
    } = props;

    return (
        <span>

            <img
                className={className}
                src={imgSrc}
            />

            <h3>
                {text}
            </h3>
        </span>
    )
}

export default ImageTextIcon;