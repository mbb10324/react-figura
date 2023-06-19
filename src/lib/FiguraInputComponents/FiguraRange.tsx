import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraRange(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container"}`}>
                                {children}
                                <input
                                    name={name}
                                    id={name}
                                    type="range"
                                    value={context.formState[name] ? context.formState[name].value : ""}
                                    className={`${inputStyle ? inputStyle : ""}`}
                                    onChange={e => { checkForErrors(true, name, e.target.value, "range", context.dispatch, context.formState, context.formID); }}
                                />
                            </div>
                            <FiguraError formField={context.formState[name]} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraRange.displayName = "FiguraRange"; //we do this because children.name is unstable. Therefore we explicitly define a displayName