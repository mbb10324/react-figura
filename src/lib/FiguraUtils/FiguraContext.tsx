import React from "react";
import { FormState } from "./FiguraTypes";

export const LabelContext = React.createContext<string | null>("");

export const ErrorContext = React.createContext<FormState | null>(null);
