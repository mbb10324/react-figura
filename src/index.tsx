import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraCheckBox from "./lib/FiguraInputComponents/FiguraCheckBox"
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraHidden from "./lib/FiguraInputComponents/FiguraHidden";
import FiguraText from "./lib/FiguraInputComponents/FiguraText";
import ReactDOM from "react-dom/client";
import Figura from "./lib/Figura";
import React from "react";
import "./index.css";

export default function App() {

    function someApiCall(data) {
        console.log(data)
    }

    return (
        <div className="w-full h-full flex justify-center">

            <Figura figuraID={"signup"} onSubmit={someApiCall}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText>
                    <FiguraLabel>Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraCheckBox>
                    <FiguraLabel>Please accept the terms</FiguraLabel>
                </FiguraCheckBox>

                <FiguraHidden />

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