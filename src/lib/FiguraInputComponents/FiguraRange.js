import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

export default function FiguraRange(props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container"}`}>
                                {props.children}
                                <input
                                    name={name}
                                    id={name}
                                    type="range"
                                    value={fieldValue ? fieldValue.value : ""}
                                    className={`${inputStyle ? inputStyle : ""}`}
                                    onChange={e => { checkForErrors(true, name, e.target.value, "range", context.dispatch, context.formState, context.formID, validator); }}
                                />
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};

FiguraRange.displayName = "FiguraRange";