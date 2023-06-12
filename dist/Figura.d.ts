import { PropsWithChildren } from "react";
import React from 'react';
import "./styles.css";
interface Props extends PropsWithChildren {
    figuraID: any;
    formStyle?: any;
}
export default function Figura(props: Props): React.JSX.Element;
export {};
