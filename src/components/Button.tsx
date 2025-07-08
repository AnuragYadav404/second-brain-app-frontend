import type { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "iconButton" | "secondary",
    text?: string,
    onClick?: () => void,
    loading?: boolean,
    frontIcon?: ReactElement,
    endIcon?: ReactElement,
}

const variantClass = {
    "primary": "outline bg-purple-300 text-purple-900 font-bold",
    "iconButton": "", 
    "secondary": "",
}

const defaultStyles = "m-2 px-2 py-1 rounded-2xl font-light flex items-center cursor-pointer border-zinc-50 hover:border-zinc-300 hover:border-shadow-2xl flex-1"

export const Button  = (props: ButtonProps) => {
    return (
        <div className="flex flex-1">         
            <button onClick={props.onClick} className={variantClass[props.variant] + " " + defaultStyles}>
                <div className="pr-1">{props.frontIcon}</div>
                <span className="font-medium">{props.text}</span>
                {props.endIcon}
            </button>           
        </div>
    )
}