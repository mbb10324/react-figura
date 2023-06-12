import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
};

export default function FiguraCheckBox(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={"check"}>
            <FiguraContext.Consumer>
                {(context) => (
                    <>
                        <div className={`${wrapper ? wrapper : "flex flex-row mb-1"}`}>
                            <input
                                className={`${inputStyle ? inputStyle : "mr-2"}`}
                                type="checkbox"
                                name="check"
                                id="check"
                                checked={context.form.formState.check.value}
                                onChange={e => { checkForErrors(true, "check", e.target.checked, context.form.dispatch, context.form.formState, context.formID) }}
                            />
                            {props.children}
                        </div>
                        {context.form.formState.check.touched && context.form.formState.check.hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.form.formState.check.error}</div>
                        )}
                    </>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};