import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "./Card"
import { youtubeIcon } from "../icons/youtubeIcon"
import { twitterIcon } from "../icons/twitterIcon"
import { shareIcon } from "../icons/shareIcon"



export const SharePage = () => {

    const {handle} = useParams()
    const [contents, setContents] = useState([])

    async function fetchShareContents() {
        const response = await axios.get(`http://localhost:3000/api/v1/brain/share/`+ handle
        )
        if(response.status==200) {
            console.log(response)
            setContents(response.data.contents)
            console.log("response content is: ", response.data.contents)
            return response;
        }
    }

    useEffect(() => {
        fetchShareContents();
    }, [])

    // const contents = useShareContents

    return (

        <div className='flex flex-wrap bg-gray-100 flex-1 gap-4 px-6 '>
            {contents.map((content) => {
                return (
                    <Card key={content.title} logoIcon={content.type==="youtube" ? youtubeIcon : twitterIcon} shareIcon={shareIcon} link={content.link} contentType={content.type} title={content.title}/>
                )
            })}
        </div>
    )
}