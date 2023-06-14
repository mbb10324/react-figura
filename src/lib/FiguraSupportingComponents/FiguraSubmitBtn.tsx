import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    buttonStyle?: string;
};

export default function FiguraSubmitBtn(props: Props) {
    const { children, buttonStyle } = props;

    return (
        <button
            type="submit"
            className={`${buttonStyle ? buttonStyle :
                `mb-1 mt-7 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 
                bg-pos-0 hover:hover:bg-pos-100 outline-none rounded-md p-2 transition-all duration-500 ease-in-out`}`}
        >
            {children}
        </button>

    );
};