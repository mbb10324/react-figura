import { LabelContext } from "../FiguraUtils/FiguraContext";
import React, { useContext } from "react";

type LabelProps = {
	children: React.ReactNode;
	labelStyle?: string;
};

export default React.memo(FiguraLabel);

function FiguraLabel(props: LabelProps) {
	const { children, labelStyle } = props;
	//html labels need the htmlFor attribute for accessibility purposes. We use the name of the input element associated with the label
	let parent = useContext(LabelContext);
	if (parent === null) parent = "";

	return (
		<label htmlFor={parent} className={`${labelStyle ? labelStyle : "label-style"}`}>
			{children}
		</label>
	);
}
