import { Card } from '../components/Card'

import { shareIcon } from '../icons/shareIcon'
import { deleteIcon } from '../icons/deleteIcon'
import { youtubeIcon } from '../icons/youtubeIcon'
import { twitterIcon } from '../icons/twitterIcon'
import { useContent } from '../hooks/useContent'

interface Content {
    type: "youtube"|"twitter",
    link: string,
    title: string
}


export const Content = () => {

    const contents: Content[] = useContent();

    return (
        <div className='flex flex-wrap bg-gray-100 flex-1 gap-4 px-6'>
            {contents.map((content) => {
                return (
                    <Card logoIcon={content.type==="youtube" ? youtubeIcon : twitterIcon} shareIcon={shareIcon} deleteIcon={deleteIcon} link={content.link} contentType={content.type} title={content.title}/>
                )
            })}
        </div>
    )
}

// interface content {
//     link: string,
//     contentType: "twitter"|"youtube",
//     title: string
// }

// const contentLinks: content[] = [
//     {
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     },
//     {
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     },
//     {
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     },{
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     },
//     {
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     },
//     {
//         link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
//         contentType:'twitter', 
//         title:'bullshit tweet'
//     },
//     {
//         link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
//         contentType:'youtube', 
//         title:'random video'
//     }
// ]