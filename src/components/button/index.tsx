'use client'

import {ButtonProps} from "@components/button/index.type";
import {useMemo} from "react";


const Button = ({children, className, onClick, withClickEffect = true, hoverAction, id, disabled}: ButtonProps) => {

    const buttonToShow = useMemo(() => {

        return (
            <button disabled={disabled} id={id} onClick={onClick}
                    className={(!!hoverAction && !disabled ? hoverAction : "") + " " + (className ? className : "") + " " + (withClickEffect && !disabled ? " focus:outline-none active:scale-95 transition transform duration-150 ease-in-out" : "")}>
                {
                    children && children
                }
            </button>
        )
    }, [children, disabled, id, hoverAction, className, withClickEffect])

    return (buttonToShow)
}

export default Button;
