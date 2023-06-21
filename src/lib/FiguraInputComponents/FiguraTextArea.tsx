import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraTextArea(props: InputProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, placeholder, onEvent } = props;

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <textarea
                    name={name}
                    id={name}
                    placeholder={`${placeholder ? placeholder : ""}`}
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "textarea"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "textarea"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraTextArea = React.memo(FiguraTextArea);
MemoizedFiguraTextArea.displayName = "FiguraTextArea";
export default MemoizedFiguraTextArea;