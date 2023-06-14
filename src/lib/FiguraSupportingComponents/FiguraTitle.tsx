import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    titleStyle?: string;
};

export default function FiguraTitle(props: Props) {
    const { children, titleStyle } = props;

    return (
        <h1 className={`${titleStyle ? titleStyle : "text-center h-10 text-3xl overflow-hidden"}`}>{children}</h1>
    );
};