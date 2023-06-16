import { ResetContext } from "../FiguraUtils/FiguraContext";
import { PropsWithChildren, useContext } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    inputStyle?: string;
};

export default function FiguraButton(props: Props) {
    const { inputStyle, children } = props;
    const resetContext = useContext(ResetContext);

    function selectThis(e: any) {
        e.preventDefault();
        resetContext.setSelected(e.target.value);
    };

    return (
        <input
            type="button"
            value={children?.toString()}
            onClick={selectThis}
            className={`
                ${inputStyle ? inputStyle : "mb-1 w-full border-2 border-blue-500 outline-none rounded-md p-2 pl-3 transition-all duration-300 ease-in-out cursor-pointer"}
                ${resetContext.selected === children?.toString() ? "bg-blue-100" : ""}
                `}
        />
    );
};