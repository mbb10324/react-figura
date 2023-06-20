import { ButtonProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraResetBtn(props: ButtonProps) {
    const { children, buttonStyle } = props;

    return (
        <button
            type="reset"
            className={`${buttonStyle ? buttonStyle : "reset-button"}`}>
            {children}
        </button>
    );
};

FiguraResetBtn.displayName = "FiguraResetBtn"; //we do this because children.name is unstable. Therefore we explicitly define a displayName