import react from "react";
import { transformChildrens } from "../helpers/dynamicAppending";

import productImage from "../assets/defaultProductPhoto.png"

import "./styles/Table.css";
import ImageTextIcon from "./ImageTextIcon";
import ScrollButton from "./ScrollButton";

/*Data examples with develoment goals*/ 
const dataExamples = [

    {
        type: ImageTextIcon,
        props: {
            imgSrc: productImage,
            className: "item-icon",
            text: "Coca-Cola"
        },
    },
    {
        type: "h3",
        props: {
            src: "./assets/defaultProductPhoto.png",
            class: "item-title"
        },
        children: "1234567890"
    },
    {
        type: "h3",
        props: {
            src: "./assets/defaultProductPhoto.png",
            class: "item-title"
        },
        children: `C$ ${22.00}`
    },
    {
        type: ScrollButton,
        props: {
            src: "./assets/defaultProductPhoto.png",
            class: "qty-field"
        },
        children: "Helloda"
    },
    {
        type: "h3",
        props: {
            src: "./assets/defaultProductPhoto.png",
            class: "item-title"
        },
        children: `C$ ${110.00}`
    },

]

const Table = (props) => {

    const { children } = props;

    return (

        <div className={"table"}>
            {children}
        </div>

    )

}

export const TableHeader = (props) => {

    const { headers } = props;

    return (

        <div className={"table-header"}>
            <span className={"header-content"}>
                {headers.map(h => {
                    return (<h3>{h}</h3>)
                })}
            </span>
        </div>

    )

}

export const TableBody = (props) => {

    const { children } = props;

    return (

        <div className={"table-body"}>
            {children}
        </div>

    )

}

export const TableFooter = (props) => {

    const { fields } = props;

    return (
        <div className={"table-footer"}>
            <span className={"header-content"}>
                {fields.map(h => {
                    return (<h3>{h}</h3>)
                })}
            </span>
        </div>
    )

}

export const TableRow = (props) => {

    const { data = dataExamples } = props;

    return (
        <div>
            <div className="table-item">

                <span id={"row"}>
                    {
                        transformChildrens(data)
                    }
                </span>

            </div>
        </div>
    )
}


export default Table;