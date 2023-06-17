import React from "react";

export default function FiguraSubmitBtn(props) {
    const { children, buttonStyle } = props;

    return (
        <button
            type="submit"
            className={`${buttonStyle ? buttonStyle : "submit-button"}`}>
            {children}
        </button>

    );
};