import React from "react";

type TitleProps = {
    children: React.ReactNode;
    titleStyle?: string;
}

export default function FiguraTitle(props: TitleProps) {
    const { children, titleStyle } = props;

    return (
        <h2 className={`${titleStyle ? titleStyle : "title-style"}`}>{children}</h2>
    );
};

FiguraTitle.displayName = "FiguraTitle"; //we do this because children.name is unstable. Therefore we explicitly define a displayName