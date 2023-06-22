import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraPhone(props: InputProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, placeholder, onEvent } = props;
    if (!onEvent) throw new Error("Figura did not render properly");

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="tel"
                    autoComplete="tel"
                    placeholder={`${placeholder ? placeholder : ""}`}
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "tel"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "tel"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraPhone = React.memo(FiguraPhone);
MemoizedFiguraPhone.displayName = "FiguraPhone";
export default MemoizedFiguraPhone;