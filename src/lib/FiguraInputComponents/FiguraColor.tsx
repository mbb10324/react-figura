import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraColor(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                                <div className="color-picker-container">
                                    <input
                                        name={name}
                                        id={name}
                                        type="color"
                                        value={context.formState[name] ? context.formState[name].value : "#000000"}
                                        className={`${inputStyle ? inputStyle : "color-picker-style"}`}
                                        onChange={e => { checkForErrors(true, name, e.target.value, "color", context.dispatch, context.formState, context.formID); }}
                                    />
                                </div>
                                {children}
                            </div>
                            <FiguraError formField={context.formState[name]} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraColor.displayName = "FiguraColor"; //we do this because children.name is unstable. Therefore we explicitly define a displayName