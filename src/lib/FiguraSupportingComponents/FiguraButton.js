import { ResetContext } from "../FiguraUtils/FiguraContext";
import React, { useContext } from "react";

export default function FiguraButton(props) {
    const { inputStyle, children } = props;
    const resetContext = useContext(ResetContext);

    function selectThis(e) {
        e.preventDefault();
        resetContext.setSelected(e.target.value);
    };

    return (
        <input
            type="button"
            value={children?.toString()}
            onClick={selectThis}
            className={`
                ${inputStyle ? inputStyle : "input-style button-group-spacer"}
                ${resetContext.selected === children?.toString() ? "button-group-background" : ""}`}
        />
    );
};

FiguraButton.displayName = "FiguraButton";