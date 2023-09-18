import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraSelect(props: InputShortProps) {
	const { onChange, children, wrapper, inputStyle, errorStyle, name, onEvent } = props;
	if (!onEvent) throw new Error("Figura did not render properly");

	//these functions seperate children passed into FiguraSelect and extracts the options so that we can properly handle them
	const childrenArray = React.Children.toArray(children);
	const label = childrenArray.find((child) => !isLabel(child));
	const options = childrenArray.filter((child) => isLabel(child));
	function isLabel(child: React.ReactNode): child is React.ReactElement {
		if (React.isValidElement(child)) {
			return child.type === "option";
		}
		return false;
	}

	return (
		<LabelContext.Provider value={name}>
			<>
				<div className={`${wrapper ? wrapper : "input-container"}`}>
					{label}
					<select
						name={name}
						id={name}
						className={`${inputStyle ? inputStyle : "input-style"}`}
						onChange={(e) => {
							onChange && onEvent(e.target.value, name, "select");
						}}
						onBlur={(e) => {
							onEvent(e.target.value, name, "select");
						}}
					>
						{options}
					</select>
				</div>
				<FiguraError name={name} errorStyle={errorStyle} />
			</>
		</LabelContext.Provider>
	);
}

const MemoizedFiguraSelect = React.memo(FiguraSelect);
MemoizedFiguraSelect.displayName = "FiguraSelect";
export default MemoizedFiguraSelect;
