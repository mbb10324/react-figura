import { ButtonProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraSubmitBtn(props: ButtonProps) {
    const { children, buttonStyle } = props;

    return (
        <button
            //submit type inherently fires the parent forms onSubmit
            type="submit"
            className={`${buttonStyle ? buttonStyle : "submit-button"}`}>
            {children}
        </button>

    );
};

FiguraSubmitBtn.displayName = "FiguraSubmitBtn"; //we do this because children.name is unstable. Therefore we explicitly define a displayName