import React, {ReactNode} from "react";


export interface ButtonProps {
    children?:ReactNode,
    id?: string,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    withClickEffect?:boolean,
    disabled?:boolean,
    hoverAction?:string | null
}
