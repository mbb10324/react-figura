import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraDate(props: InputShortProps) {
    const { onChange, children, wrapper, inputStyle, errorStyle, name, onEvent } = props;

    return (
        <LabelContext.Provider value={name}>
            <div className={`${wrapper ? wrapper : "input-container"}`}>
                {children}
                <input
                    name={name}
                    id={name}
                    type="date"
                    className={`${inputStyle ? inputStyle : "input-style"}`}
                    onChange={(e) => { onChange && onEvent(e.target.value, name, "date"); }}
                    onBlur={(e) => { onEvent(e.target.value, name, "date"); }}
                />
                <FiguraError name={name} errorStyle={errorStyle} />
            </div>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraDate = React.memo(FiguraDate);
MemoizedFiguraDate.displayName = "FiguraDate";
export default MemoizedFiguraDate;
