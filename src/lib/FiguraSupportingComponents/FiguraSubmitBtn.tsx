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
            <button className={`${buttonStyle ? buttonStyle : "border-2 border-sky-600 hover:border-2 hover:border-sky-400 hover:bg-sky-400 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`} type="submit">{children}</button>
        </div>
    );
};