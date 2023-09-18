import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraEmail(props: InputProps) {
	const { onChange, children, wrapper, inputStyle, errorStyle, name, placeholder, onEvent } = props;
	if (!onEvent) throw new Error("Figura did not render properly");

	return (
		<LabelContext.Provider value={name}>
			<div className={`${wrapper ? wrapper : "input-container"}`}>
				{children}
				<input
					name={name}
					id={name}
					type="email"
					autoComplete="email"
					placeholder={`${placeholder ? placeholder : ""}`}
					className={`${inputStyle ? inputStyle : "input-style"}`}
					onChange={(e) => {
						onChange && onEvent(e.target.value, name, "email");
					}}
					onBlur={(e) => {
						onEvent(e.target.value, name, "email");
					}}
				/>
				<FiguraError name={name} errorStyle={errorStyle} />
			</div>
		</LabelContext.Provider>
	);
}

const MemoizedFiguraEmail = React.memo(FiguraEmail);
MemoizedFiguraEmail.displayName = "FiguraEmail";
export default MemoizedFiguraEmail;
