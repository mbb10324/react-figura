import { PropsWithChildren } from "react";
import React from "react";
interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
}
export default function FiguraTime(props: Props): React.JSX.Element;
export {};