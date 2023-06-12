import { PropsWithChildren } from "react";
import { FiguraContext } from "../FiguraContext";
import React from 'react';

interface Props extends PropsWithChildren {
    bigErrorStyle?: any;
}

export default function FiguraPhone(props: Props) {
    const { bigErrorStyle } = props

    return (
        <FiguraContext.Consumer>
            {(context) => (
                <>
                    {context.submit.showError.bool && context.submit.showError.formID === context.formID && !context.form.formState.isFormValid && (
                        <div className={`${bigErrorStyle ? bigErrorStyle : 'text-[#721c24] bg-[#F8D7DA] border-[#F5C6CB] p-2 border-1'}`}>{props.children}</div>
                    )}
                </>
            )}
        </FiguraContext.Consumer>
    )
}