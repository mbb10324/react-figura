import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraDateLocal(props: InputShortProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, onEvent } = props;
    if (!onEvent) throw new Error("Figura did not render properly");

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="datetime-local"
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "datelocal"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "datelocal"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraDateLocal = React.memo(FiguraDateLocal);
MemoizedFiguraDateLocal.displayName = "FiguraDateLocal";
export default MemoizedFiguraDateLocal;