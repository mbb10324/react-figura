import React from "react";

type ButtonChildProps = {
    children: React.ReactNode;
    buttonStyle?: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default React.memo(FiguraButton);
//this component is strictly used as a child of FiguraButtonGroup
function FiguraButton(props: ButtonChildProps) {
    const { buttonStyle, children, selected, setSelected } = props;

    //when a button is clicked we setSelected to that buttons value
    function selectThis(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        //ensure we have context, and e.target is a valid element
        if (e.target instanceof HTMLInputElement) {
            setSelected(e.target.value);
        };
    };

    return (
        <input
            type="button"
            value={children?.toString()}
            onClick={selectThis}
            className={`
                ${buttonStyle ? buttonStyle : "input-style button-group-spacer"}
                ${selected === children?.toString() ? "button-group-background" : ""}`}
        />
    );
};