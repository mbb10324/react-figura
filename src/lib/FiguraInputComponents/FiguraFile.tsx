import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraFile(props: InputProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, placeholder, onEvent } = props;
    if (!onEvent) throw new Error("Figura did not render properly");

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="file"
                    placeholder={`${placeholder ? placeholder : ""}`}
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "file"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "file"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraFile = React.memo(FiguraFile);
MemoizedFiguraFile.displayName = "FiguraFile";
export default MemoizedFiguraFile;