import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraRadio(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name, onEvent } = props;

    return (
        <LabelContext.Provider value={name}>
            <>
                <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                    <input
                        name={name}
                        id={name}
                        type="radio"
                        className={`${inputStyle ? inputStyle : "input-style-inline"}`}
                        onChange={(e) => { onEvent(e.target.value, name, "radio"); }}
                    />
                    {children}
                </div>
                <FiguraError name={name} errorStyle={errorStyle} />
            </>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraRadio = React.memo(FiguraRadio);
MemoizedFiguraRadio.displayName = "FiguraRadio";
export default MemoizedFiguraRadio;