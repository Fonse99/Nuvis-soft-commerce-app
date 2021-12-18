import react from "react";

import RoundedTextField from "./RoundedTextField";
import ControlButton from "./ControlButton";

import "./styles/Form.css"

const baseComponents = [
    { type: "text", text: "testing place holder" },
    { type: "password", text: "edit password here" },
    { type: "submit", text: "Log in" },
    { type: "label", text: "or", to: "/login/signup" },
    { type: "link", text: "you don't have an account?, sign up", Link: "here", to: "/login" }
]


/**This create a Form container than integrate some of inputs components
 * 
 * @param {*} param0 
 * @returns 
 */
const Form = ({ title = "Nuvis Soft Commerce", fields }) => {
    return (

        <div id={"container-form"}>

            <form
                className={"form-color form-shape"} >
                            <h1>{title}</h1>

                {cookingFields(fields)}
            </form>

        </div>
    )
}

const cookingFields = function (fields = baseComponents) {
    return (

        fields.map(field => {

            let component = <h1>{"no component defined"}</h1>

            switch (field.type) {
                case "button":
                case "submit":
                    component = <ControlButton text={field.text} />
                    break;
                case "link":
                    component = <span>
                        <h4>{field.text}</h4>
                        <a href={field.to}>{field.Link}</a>
                    </span>
                    break;
                case "label":
                    component = <h4>{field.text}</h4>
                    break;
                default:
                    component = <RoundedTextField
                        type={field.type}
                        placeHolder={field.text}
                    />
                    break;
            }
            return component;
        })
    )
}
export default Form;