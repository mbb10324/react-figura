import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import { LabelContext } from "../FiguraUtils/FiguraContext";
import React from "react";

function FiguraUrl(props: InputShortProps) {
	const { onChange, children, wrapper, inputStyle, errorStyle, name, onEvent } = props;
	if (!onEvent) throw new Error("Figura did not render properly");

	return (
		<LabelContext.Provider value={name}>
			<div className={`${wrapper ? wrapper : "input-container"}`}>
				{children}
				<input
					name={name}
					id={name}
					type="url"
					className={`${inputStyle ? inputStyle : "input-style"}`}
					onChange={(e) => {
						onChange && onEvent(e.target.value, name, "url");
					}}
					onBlur={(e) => {
						onEvent(e.target.value, name, "url");
					}}
				/>
				<FiguraError name={name} errorStyle={errorStyle} />
			</div>
		</LabelContext.Provider>
	);
}

const MemoizedFiguraUrl = React.memo(FiguraUrl);
MemoizedFiguraUrl.displayName = "FiguraUrl";
export default MemoizedFiguraUrl;
