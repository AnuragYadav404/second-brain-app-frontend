import { eyeIcon } from "../icons/eyeIcon"
import { Link } from "react-router-dom"

export const Homepage = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div>
                <div className="flex justify-center items-center">
                    <div className="text-6xl">
                        <h1>WatchList</h1>
                    </div>
                    <div>
                        {eyeIcon}
                    </div>
                </div>
                <div className="flex flex-col items-center pt-6">
                    <nav className="flex flex-col gap-4 text-xl decoration-2">
                        {!localStorage.getItem("token") && <Link to="/signup">- SignUp</Link>}
                        {!localStorage.getItem("token") && <Link to="/signin">- Already a member? <a>SignIn</a></Link>}
                        {localStorage.getItem("token") && <Link to="/dashboard">- To Dashboard</Link>}
                    </nav>
                </div>
            </div>
            
        </div>
    )
}