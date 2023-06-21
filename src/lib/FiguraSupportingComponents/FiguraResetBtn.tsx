import { ButtonProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default React.memo(FiguraResetBtn);

function FiguraResetBtn(props: ButtonProps) {
    const { children, buttonStyle } = props;

    return (
        <button
            type="reset"
            className={`${buttonStyle ? buttonStyle : "reset-button"}`}>
            {children}
        </button>
    );
};