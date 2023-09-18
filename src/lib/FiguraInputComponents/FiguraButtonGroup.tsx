import FiguraError from "../FiguraSupportingComponents/FiguraError";
import React, { useState } from "react";

type ButtonGroupProps = {
	children: React.ReactNode;
	errorStyle?: string;
	wrapper?: string;
	name: string;
	onEvent?: (value: string, name: string, type: string) => void;
};

function FiguraButtonGroup(props: ButtonGroupProps) {
	const { wrapper, errorStyle, name, children, onEvent } = props;
	const [selected, setSelected] = useState(""); //state for the selected value of FiguraButtonGroup
	if (!onEvent) throw new Error("Figura did not render properly");

	//Map over the children
	const childComponents = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type) {
			return React.cloneElement(child, {
				...child.props,
				selected: selected,
				setSelected: setSelected,
			});
		}
		return child;
	});

	return (
		<div
			id={name}
			className={`${wrapper ? wrapper : "input-container"}`}
			onBlur={() => onEvent(selected, name, "buttongroup")}
		>
			{childComponents}
			<FiguraError name={name} errorStyle={errorStyle} />
		</div>
	);
}

const MemoizedFiguraButtonGroup = React.memo(FiguraButtonGroup);
MemoizedFiguraButtonGroup.displayName = "FiguraButtonGroup";
export default MemoizedFiguraButtonGroup;
