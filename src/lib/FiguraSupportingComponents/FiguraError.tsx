import { ErrorContext } from "../FiguraUtils/FiguraContext";
import React, { useContext } from "react";

type ErrorProps = {
    name: string
    errorStyle?: string;
}

export default React.memo(FiguraError);

function FiguraError(props: ErrorProps) {
    const { name, errorStyle } = props;
    const context = useContext(ErrorContext);
    const state = context && context[name];

    return (
        <>
            {state && state.hasError && (
                <div className={`${errorStyle ? errorStyle : "error-style"}`}>{state.error}</div>
            )}
        </>
    );
};