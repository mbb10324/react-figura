import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: string;
    buttonStyle?: string;
};

export default function FiguraSubmitBtn(props: Props) {
    const { children, wrapper, buttonStyle } = props;

    return (
        <div className={`${wrapper ? wrapper : "flex flex-col mb-1 mt-7"}`}>
            <button className={`${buttonStyle ? buttonStyle : "bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:hover:bg-pos-100 outline-none rounded-3xl p-2 transition-all duration-500 ease-in-out"}`} type="submit">{children}</button>
        </div>
    );
};