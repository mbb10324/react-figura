import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraWeek(props: InputShortProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, onEvent } = props;

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="week"
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "text"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "text"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraWeek = React.memo(FiguraWeek);
MemoizedFiguraWeek.displayName = "FiguraWeek";
export default MemoizedFiguraWeek;