import { brainIcon } from "../icons/brainIcon"
import { SideBarItem } from "./SidebarItem"

export const Sidebar = () => {
    return (<div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6 pr-6">
        <div className="p-6 text-2xl flex items-center">
            {brainIcon}
            <p className="pl-2">Brainly</p>
        </div>
        <div>
            <SideBarItem text="Tweets"/>
            <SideBarItem text="Youtube"/>
        </div>
    </div>)
}