import React from "react";

type TitleProps = {
    children: React.ReactNode;
    titleStyle?: string;
}


export default React.memo(FiguraTitle);

function FiguraTitle(props: TitleProps) {
    const { children, titleStyle } = props;

    return (
        <h2 className={`${titleStyle ? titleStyle : "title-style"}`}>{children}</h2>
    );
};