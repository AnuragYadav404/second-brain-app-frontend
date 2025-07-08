import axios from "axios";
import { useEffect, useState } from "react"

export const useContent = () => {
    const [content, setContent] = useState([]);


    async function fetchContent() {
        console.log("Fetching ...")
        const response = await axios.get("http://localhost:3000/api/v1/contents",
            {
                headers: {
                "authorization": localStorage.getItem("token")
                }
            }
        )
        if(response.status==200) {
            setContent(response.data.content)
            console.log("response content is: ", response.data.content)

            return response;
        }
    }

    useEffect( () => {
        if(localStorage.getItem("token")){
             fetchContent();
        }
        const intervalID = setInterval(fetchContent, 5000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return content;
}