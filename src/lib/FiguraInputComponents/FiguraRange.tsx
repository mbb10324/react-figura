import { LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraRange(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name, onEvent } = props;

    return (
        <LabelContext.Provider value={name}>
            <>
                <div className={`${wrapper ? wrapper : "input-container"}`}>
                    {children}
                    <input
                        name={name}
                        id={name}
                        type="range"
                        className={`${inputStyle ? inputStyle : ""}`}
                        onChange={(e) => { onEvent(e.target.value, name, "range"); }}
                    />
                </div>
                <FiguraError name={name} errorStyle={errorStyle} />
            </>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraRange = React.memo(FiguraRange);
MemoizedFiguraRange.displayName = "FiguraRange";
export default MemoizedFiguraRange;