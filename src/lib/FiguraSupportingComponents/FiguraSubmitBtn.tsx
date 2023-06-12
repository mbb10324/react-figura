import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    buttonStyle?: any;
}

export default function FiguraSubmitBtn(props: Props) {
    const { children, wrapper, buttonStyle } = props
    return (
        <div className={`${wrapper ? wrapper : 'flex flex-col mb-1 mt-1'}`}>
            <button className={`${buttonStyle ? buttonStyle : 'border-[1px] hover:text-black hover:bg-[#FFF7EE] transition-all ease-in-out'}`} type="submit">{children}</button>
        </div>
    )
}