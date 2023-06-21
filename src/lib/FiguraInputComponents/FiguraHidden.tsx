import React from "react";

function FiguraHidden() {

    return (
        <input
            name={"hidden"}
            id={"hidden"}
            type="hidden"
        />
    );
};

const MemoizedFiguraHidden = React.memo(FiguraHidden);
MemoizedFiguraHidden.displayName = "FiguraHidden";
export default MemoizedFiguraHidden;