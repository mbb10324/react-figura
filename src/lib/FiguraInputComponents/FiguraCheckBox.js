import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

export default function FiguraCheckBox(props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                                <input
                                    name={name}
                                    id={name}
                                    type="checkbox"
                                    className={`${inputStyle ? inputStyle : "input-style-inline"}`}
                                    onChange={e => { checkForErrors(true, name, e.target.checked.toString(), "checkbox", context.dispatch, context.formState, context.formID, validator); }}
                                />
                                {props.children}
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};

FiguraCheckBox.displayName = "FiguraCheckBox";