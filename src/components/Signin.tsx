import { useRef } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function handleSigninSubmit() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        
        const response = await axios.post("http://localhost:3000/api/v1/signin", {
            username,
            password
        })
        if(response.status==200 && response.data.token) {
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        }
        
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="flex justify-center p-5 text-2xl">
                    <h1>Sign In</h1>
                </div>
                <div className="flex-1">
                    <input ref={usernameRef} placeholder="username" className="px-4 py-2 border rounded m-2 w-60"/>
                </div>
                    <div className="flex-1">
                    <input ref={passwordRef} placeholder="password" className="px-4 py-2 border rounded m-2 w-60"/>
                </div>
                <div className="flex justify-center text-l mt-2">
                    <div>
                        <Button variant="primary" text="Submit" onClick={handleSigninSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}