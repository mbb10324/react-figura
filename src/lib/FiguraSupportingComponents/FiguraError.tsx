import { FormField } from "../FiguraUtils/FiguraTypes";
import React from "react";

type ErrorProps = {
    formField: FormField
    errorStyle?: string;
}

export default function FiguraError(props: ErrorProps) {
    const { formField, errorStyle } = props;
    let error: string | undefined = "";
    if (formField) error = formField.error;

    return (
        <>
            {formField && formField.hasError && (
                <div className={`${errorStyle ? errorStyle : "error-style"}`}>{error}</div>
            )}
        </>
    );
};

FiguraError.displayName = "FiguraError"; //we do this because children.name is unstable. Therefore we explicitly define a displayName