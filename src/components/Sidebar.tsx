import { useNavigate } from "react-router-dom";
import { useUserAuthCredential } from "../hooks/useUserAuthCredential";
import { brainIcon } from "../icons/brainIcon"
import { SideBarItem } from "./SidebarItem"

export const Sidebar = () => {
    const userCredential = useUserAuthCredential();
    const navigate = useNavigate()

    function handleUserLogout() {
        localStorage.removeItem("token");
        navigate("/")
    }


    return (<div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6 pr-6 flex flex-col justify-between">
        <div>
            <div className="p-6 text-2xl flex items-center">
                {brainIcon}
                <p className="pl-2">Brainly</p>
            </div>
            <div>
                <SideBarItem text="Tweets"/>
                <SideBarItem text="Youtube"/>
            </div>
        </div>

        {userCredential && <div className="flex justify-center pb-10">
            <div>
                <SideBarItem text="Logout" onClick={handleUserLogout}/>
            </div>
        </div>}

    </div>)
}