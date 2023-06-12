import { useFormValidation } from "./FiguraUtils/Validation";
import { useSubmit } from "./FiguraUtils/FormSubmitHandler";
import { FiguraContext } from "./FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    endpoint?: any;
    figuraID: any;
    formStyle?: any;
    onSubmit?: any;
};

export default function Figura(props: Props) {
    const { children, figuraID, formStyle, endpoint, onSubmit } = props;
    const form: any = useFormValidation();
    const submit: any = useSubmit();
    const formID = figuraID;

    return (
        <FiguraContext.Provider value={{ form, submit, formID }}>
            <form
                noValidate
                className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                onSubmit={e => {
                    if (endpoint) {
                        submit.formSubmitHandler(e, form.formState, endpoint, formID)
                    } else if (onSubmit) {
                        submit.formSubmitHandler(e, form.formState, "", formID)
                        if (!submit.showError.bool) {
                            onSubmit()
                        }
                    }
                }}>
                {children}
            </form>
        </FiguraContext.Provider>
    );
};