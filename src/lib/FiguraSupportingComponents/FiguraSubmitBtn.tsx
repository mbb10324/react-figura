import { ButtonProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default React.memo(FiguraSubmitBtn);

function FiguraSubmitBtn(props: ButtonProps) {
    const { children, buttonStyle } = props;

    return (
        <button
            type="submit"
            className={`${buttonStyle ? buttonStyle : "submit-button"}`}>
            {children}
        </button>

    );
};