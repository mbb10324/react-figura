import { PropsWithChildren, useContext } from "react";
import { ParentContext } from "../FiguraContext";
import React from "react";

interface Props extends PropsWithChildren {
    labelStyle?: any;
};

export default function FiguraLabel(props: Props) {
    const { children, labelStyle } = props;
    const parent = useContext(ParentContext);

    return (
        <label htmlFor={parent} className={`${labelStyle ? labelStyle : ""}`}>{children}</label>
    );
};