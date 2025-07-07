import type { ReactElement } from "react"

interface ButtonProps {
    variant: "primary",
    text: string,
    onClick: () => void,
    loading?: boolean,
    frontIcon?: ReactElement,
    endIcon?: ReactElement,
}

const variantClass = {
    "primary": "text-black outline bg-purple-600 text-purple-600",
}

const defaultStyles = "m-2 px-2 py-1 rounded-2xl font-light flex items-center cursor-pointer border-zinc-50 hover:border-zinc-300 hover:border-shadow-2xl"

export const Button  = (props: ButtonProps) => {
    return (
        <div>         
            <button onClick={props.onClick} className={variantClass[props.variant] + " " + defaultStyles}>
                <div className="pr-1">{props.frontIcon}</div>
                {props.text}   
                {props.endIcon}
            </button>           
        </div>
    )
}