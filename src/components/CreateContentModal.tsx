import { useRef } from "react"
import { Button } from "./Button"
import { crossIcon } from "../icons/crossIcon";
import { plusIcon } from "../icons/plusIcon";
import axios from "axios";


interface contentModalProps {
    open: boolean,
    setOpenModal: (value: boolean) => void
}

export const CreateContentModal = (props: contentModalProps) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);

    async function handleNewContent () {
        // implement post request to backend with auth
        // const response = await axios.post("http://localhost:3000/api/v1/contents", {
        //     data: {
        //         title: titleRef.current?.value,
        //         link: linkRef.current?.value,
        //         type: "twitter",
        //     },
        //     headers: {
        //         "authorization": localStorage.getItem("token")
        //     }
        // })

        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/contents',
            data: {
                title: titleRef.current?.value,
                link: linkRef.current?.value,
                type: typeRef.current?.value,
            },
            headers: {
                "authorization": localStorage.getItem("token")
            }
        });
        console.log(response);
    }

    return (
        <>
            <div className="w-screen h-screen bg-zinc-900 fixed top-0 left-0 opacity-60 flex justify-center" >
            </div>
             <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded-2xl fixed flex flex-col h-60">
                        <div className="flex-1">
                            <input ref={titleRef} placeholder="title" className="px-4 py-2 border rounded m-2 w-60"/>
                        </div>
                         <div className="flex-1">
                            <input ref={linkRef} placeholder="link" className="px-4 py-2 border rounded m-2 w-60"/>
                        </div>
                        <div>
                            <select ref={typeRef} name="cars" id="cars">
                                <option value="youtube">youtube</option>
                                <option value="twitter">twitter</option>
                            </select>
                        </div>
                        <div className="flex justify-around w-full">
                            <div className="bg-amber-100 rounded-2xl hover:bg-amber-200">
                                <Button variant="secondary" text="Add" onClick={handleNewContent} frontIcon={plusIcon}/>
                            </div>
                            <div className="bg-red-100 rounded-2xl hover:bg-red-200">
                                <Button variant="secondary" frontIcon={crossIcon} text="cancel" onClick={() => props.setOpenModal(false)}/>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}