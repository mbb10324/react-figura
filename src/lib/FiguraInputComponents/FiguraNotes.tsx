import { PropsWithChildren } from "react";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import React from 'react';

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
}

export default function FiguraNotes(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={'notes'}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : 'flex flex-col mb-1'}`}>
                        {props.children}
                        <textarea
                            name="notes"
                            id="notes"
                            className={`${inputStyle ? inputStyle : 'text-black'}`}
                            value={context.form.formState.notes.value}
                            onChange={e => { checkForErrors(false, "notes", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            onBlur={e => { checkForErrors(true, "notes", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                        />
                        {context.form.formState.notes.touched && context.form.formState.notes.hasError && (
                            <div className={`${errorStyle ? errorStyle : 'mt-1 text-[#F65157]'}`}>{context.form.formState.notes.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    )
}