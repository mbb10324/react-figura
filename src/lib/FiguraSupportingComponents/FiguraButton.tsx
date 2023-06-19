import { ResetContext } from "../FiguraUtils/FiguraContext";
import { ButtonProps } from "../FiguraUtils/FiguraTypes";
import React, { useContext } from "react";

//this component is strictly used as a child of FiguraButtonGroup
export default function FiguraButton(props: ButtonProps) {
    const { buttonStyle, children } = props;
    const resetContext = useContext(ResetContext);
    if (!resetContext) return null;

    //when a button is clicked we setSelected to that buttons value
    function selectThis(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        //ensure we have context, and e.target is a valid element
        if (resetContext && e.target instanceof HTMLInputElement) {
            resetContext.setSelected(e.target.value);
        };
    };

    return (
        <input
            type="button"
            value={children?.toString()}
            onClick={() => selectThis}
            className={`
                ${buttonStyle ? buttonStyle : "input-style button-group-spacer"}
                ${resetContext.selected === children?.toString() ? "button-group-background" : ""}`}
        />
    );
};

FiguraButton.displayName = "FiguraButton"; //we do this because children.name is unstable. Therefore we explicitly define a displayName