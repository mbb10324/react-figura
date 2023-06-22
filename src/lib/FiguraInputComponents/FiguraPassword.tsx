import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraPassword(props: InputProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, placeholder, onEvent } = props;
    if (!onEvent) throw new Error("Figura did not render properly");

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="password"
                    placeholder={`${placeholder ? placeholder : ""}`}
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "password"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "password"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraPassword = React.memo(FiguraPassword);
MemoizedFiguraPassword.displayName = "FiguraPassword";
export default MemoizedFiguraPassword;