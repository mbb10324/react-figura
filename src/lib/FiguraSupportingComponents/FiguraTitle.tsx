import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    titleStyle?: any;
}

export default function FiguraTitle(props: Props) {
    const { children, titleStyle } = props

    return (
        <h1 className={`${titleStyle ? titleStyle : 'text-center h-10 text-3xl overflow-hidden'}`}>{children}</h1>
    )
}