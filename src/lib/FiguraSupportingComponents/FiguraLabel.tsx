import { ParentContext } from "../FiguraUtils/FiguraContext";
import { PropsWithChildren, useContext } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    labelStyle?: string;
};

export default function FiguraLabel(props: Props) {
    const { children, labelStyle } = props;
    const parent = useContext(ParentContext);

    return (
        <label htmlFor={parent} className={`${labelStyle ? labelStyle : "ml-3"}`}>{children}</label>
    );
};