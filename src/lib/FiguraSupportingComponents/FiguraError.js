import React from "react";

export default function FiguraError(props) {
    const { fieldValue, errorStyle } = props;

    return (
        <>
            {fieldValue ?
                <>
                    {fieldValue.touched && fieldValue.hasError && (
                        <div className={`${errorStyle ? errorStyle : "error-style"}`}>{fieldValue.error}</div>
                    )}
                </>
                : ""}
        </>
    );
};

FiguraError.displayName = "FiguraError";