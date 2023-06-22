import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraColor(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name, onEvent } = props;
    if (!onEvent) throw new Error("Figura did not render properly");

    return (
        <LabelContext.Provider value={name}>
            <>
                <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                    <div className="color-picker-container">
                        <input
                            name={name}
                            id={name}
                            type="color"
                            className={`${inputStyle ? inputStyle : "color-picker-style"}`}
                            onChange={(e) => { onEvent(e.target.value, name, "color"); }}
                        />
                    </div>
                    {children}
                </div>
                <FiguraError name={name} errorStyle={errorStyle} />
            </>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraColor = React.memo(FiguraColor);
MemoizedFiguraColor.displayName = "FiguraColor";
export default MemoizedFiguraColor;