import React from "react";

export default function FiguraTitle(props) {
    const { children, titleStyle } = props;

    return (
        <h1 className={`${titleStyle ? titleStyle : "title-style"}`}>{children}</h1>
    );
};

FiguraTitle.displayName = "FiguraTitle";