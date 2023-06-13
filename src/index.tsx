import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraBigError from "./lib/FiguraSupportingComponents/FiguraBigError";
import FiguraCheckBox from "./lib/FiguraInputComponents/FiguraCheckBox"
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraNotes from "./lib/FiguraInputComponents/FiguraNotes";
import FiguraPhone from "./lib/FiguraInputComponents/FiguraPhone";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraSelect from "./lib/FiguraInputComponents/FiguraSelect";
import FiguraName from "./lib/FiguraInputComponents/FiguraName";
import ReactDOM from "react-dom/client";
import Figura from "./lib/Figura";
import React from "react";
import "./index.css";

export default function App() {

    function customValidateName(value: any) {
        if (value.trim() === "") {
            return { hasError: true, error: "Custom Name validation" };
        }
        return { hasError: false, error: "" };
    }

    // function customValidateEmail(value: any) {
    //     if (value.trim() === "") {
    //         return { hasError: true, error: "Custom Email validation" };
    //     }
    //     return { hasError: false, error: "" };
    // }

    return (
        <div className="w-full h-full flex justify-center">

            <Figura figuraID={"signup"} endpoint={"https://some.api.endpoint/"}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraName>
                    <FiguraLabel>First Name:</FiguraLabel>
                </FiguraName>

                <FiguraName>
                    <FiguraLabel>Last Name:</FiguraLabel>
                </FiguraName>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraBigError>Please fill out all of the fields correctly.</FiguraBigError>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App />
);