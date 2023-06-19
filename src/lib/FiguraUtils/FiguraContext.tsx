import { FiguraContextProps, ResetContextProps } from "./FiguraTypes";
import React from "react";

export const FiguraContext = React.createContext<FiguraContextProps | null>(null);

export const LabelContext = React.createContext<string | null>("");

export const ResetContext = React.createContext<ResetContextProps | null>(null);