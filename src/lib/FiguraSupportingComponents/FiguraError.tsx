import React from "react"

type Props = {
    fieldValue: { value: string, type: string, hasError: boolean, error: string, touched: boolean, formID: string };
    errorStyle?: string;
}

export default function FiguraError(props: Props) {
    const { fieldValue, errorStyle } = props

    return (
        <>
            {fieldValue.touched && fieldValue.hasError && (
                <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{fieldValue.error}</div>
            )}
        </>
    )
}