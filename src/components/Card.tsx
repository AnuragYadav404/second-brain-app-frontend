import { useEffect, type ReactElement } from "react"
import { Button } from "./Button"

interface CardProps {
    logoIcon: ReactElement,
    shareIcon: ReactElement,
    deleteIcon: ReactElement,
    contentType: "youtube" | "twitter",
    link: string,
    title: string
}


export const Card = (props: CardProps) => {

    useEffect(() => {
    // Trigger Twitter to render embeds
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);


    return (<div className="w-80 border-outline border-zinc-500 border-1 rounded-2xl m-4 p-2 bg-slate-50 hover:bg-slate-100">
        <div className="flex justify-between">
            <Button variant="iconButton" onClick={() => {}} frontIcon={props.logoIcon}/>
            <div className="flex">
                <Button variant="iconButton" onClick={() => {}} frontIcon={props.shareIcon}/>
                {props.deleteIcon && <Button variant="iconButton" onClick={() => {}} frontIcon={props.deleteIcon}/>}
            </div>
        </div>
        <div className="pl-4">
            <p>{props.title}</p>
        </div>
        <div className="w-full p-2">

            {props.contentType === "youtube" && <iframe  className="w-full border-1 border-b-zinc-200 rounded-2xl" src={props.link.replace("watch", "embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


            {props.contentType === "twitter" && <blockquote className="twitter-tweet"><a href={props.link.replace("x.com", "twitter.com")}></a></blockquote> }

        </div>
        {/* <div className="">
            footer Content goes here
        </div> */}
    </div>)
}

{/* <script async src="https://platform.twitter
                            .com/widgets.js" charSet="utf-8"></script> */}