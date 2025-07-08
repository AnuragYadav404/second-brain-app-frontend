import axios from "axios";
import { plusIcon } from "../icons/plusIcon"
import { shareIcon } from "../icons/shareIcon"
import { Button } from "./Button"

interface topbarProps {
    newContentModalButton: (value: boolean) => void,
}

export const Topbar = (props: topbarProps) => {

    async function handleShareBrain() {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/brain/share',
            data: {
                share: true
            },
            headers: {
                "authorization": localStorage.getItem("token")
            }
        });

        alert(response.data.hash);
    }

    return (
        <div className="flex justify-end gap-4 px-6 pt-4 pb-0 bg-gray-100">
            <div className="flex">
                 <Button text="New Content" variant="primary" frontIcon={plusIcon} onClick={() => props.newContentModalButton(true)}/>
            </div> 
            <div className="flex">
                <Button text="Share Brain" variant="primary" frontIcon={shareIcon} onClick={handleShareBrain}/>
            </div> 
        </div>
    )
}