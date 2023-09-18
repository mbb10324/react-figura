import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraCheckBox(props: InputShortProps) {
	const { children, wrapper, inputStyle, errorStyle, name, onEvent } = props;
	if (!onEvent) throw new Error("Figura did not render properly");

	return (
		<LabelContext.Provider value={name}>
			<>
				<div className={`${wrapper ? wrapper : "input-container-inline"}`}>
					<input
						name={name}
						id={name}
						type="checkbox"
						className={`${inputStyle ? inputStyle : "input-style-inline"}`}
						onChange={(e) => {
							onEvent(e.target.checked.toString(), name, "checkbox");
						}}
					/>
					{children}
				</div>
				<FiguraError name={name} errorStyle={errorStyle} />
			</>
		</LabelContext.Provider>
	);
}

const MemoizedFiguraCheckBox = React.memo(FiguraCheckBox);
MemoizedFiguraCheckBox.displayName = "FiguraCheckBox";
export default MemoizedFiguraCheckBox;
