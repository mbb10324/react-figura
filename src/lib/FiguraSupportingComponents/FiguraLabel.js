import { ParentContext } from "../FiguraUtils/FiguraContext";
import React, { useContext } from "react";

export default function FiguraLabel(props) {
    const { children, labelStyle } = props;
    const parent = useContext(ParentContext);

    return (
        <label htmlFor={parent} className={`${labelStyle ? labelStyle : "label-style"}`}>{children}</label>
    );
};

FiguraLabel.displayName = "FiguraLabel";