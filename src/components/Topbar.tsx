import { plusIcon } from "../icons/plusIcon"
import { shareIcon } from "../icons/shareIcon"
import { Button } from "./Button"

export const Topbar = () => {
    return (
        <div className="flex justify-end gap-4 px-6 pt-4 pb-0 bg-gray-100">
            <div className="flex">
                 <Button text="New Content" variant="primary" frontIcon={plusIcon}/>
            </div> 
            <div className="flex">
                <Button text="Share Brain" variant="primary" frontIcon={shareIcon}/>
            </div> 
        </div>
    )
}