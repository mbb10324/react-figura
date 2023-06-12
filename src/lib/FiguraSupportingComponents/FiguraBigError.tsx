import { FiguraContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    bigErrorStyle?: any;
};

export default function FiguraBigError(props: Props) {
    const { bigErrorStyle } = props;

    return (
        <FiguraContext.Consumer>
            {(context) => (
                <>
                    {context.submit.showError.bool && context.submit.showError.formID === context.formID && !context.form.formState.isFormValid && (
                        <div className={`${bigErrorStyle ? bigErrorStyle : "text-[#721c24] bg-[#F8D7DA] border-[#721c24] p-2 mt-4 border-[1px] rounded-md animate-fade"}`}>{props.children}</div>
                    )}
                </>
            )}
        </FiguraContext.Consumer>
    );
};