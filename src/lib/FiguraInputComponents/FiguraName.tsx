import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
};

export default function FiguraName(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={"name"}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                        {props.children}
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className={`${inputStyle ? inputStyle : "border-2 border-sky-600 focus:border-2 focus:border-sky-400 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                            value={context.form.formState.name.value}
                            onChange={e => { checkForErrors(false, "name", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            onBlur={e => { checkForErrors(true, "name", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                        />
                        {context.form.formState.name.touched && context.form.formState.name.hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.form.formState.name.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};