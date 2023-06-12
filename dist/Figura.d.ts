import { PropsWithChildren } from "react";
import React from "react";
interface Props extends PropsWithChildren {
    endpoint?: any;
    figuraID: any;
    formStyle?: any;
    onSubmit?: any;
}
export default function Figura(props: Props): React.JSX.Element;
export {};
