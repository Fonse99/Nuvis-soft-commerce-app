import React, { createElement } from "react";

export const transformChildrens = function (childrenList) {
    return (
        childrenList.map(e => {

            console.log("element ", e)

            return (
                createElement(
                    e.type,
                    e.props,
                    e.children)
            )
        })
    )
}