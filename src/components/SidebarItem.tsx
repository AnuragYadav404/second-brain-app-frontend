import { Button } from "./Button"

interface SideBarItemProps {
    text: string,
}

export const SideBarItem = (props: SideBarItemProps) => {

    return (
        <div className="w-full py-1 hover:bg-zinc-100 rounded-2xl flex">
            <Button text={props.text} onClick={() => {}} variant="secondary"/>
        </div>
    )
}