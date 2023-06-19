import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraRadio(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                                <input
                                    name={name}
                                    id={name}
                                    type="radio"
                                    className={`${inputStyle ? inputStyle : "input-style-inline"}`}
                                    onChange={e => { checkForErrors(true, name, e.target.checked.toString(), "radio", context.dispatch, context.formState, context.formID); }}
                                />
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

FiguraRadio.displayName = "FiguraRadio"; //we do this because children.name is unstable. Therefore we explicitly define a displayName