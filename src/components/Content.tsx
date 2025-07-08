import { Card } from '../components/Card'

import { shareIcon } from '../icons/shareIcon'
import { deleteIcon } from '../icons/deleteIcon'
import { youtubeIcon } from '../icons/youtubeIcon'
import { twitterIcon } from '../icons/twitterIcon'



export const Content = () => {
    return (
        <div className='flex flex-wrap bg-gray-100 flex-1 gap-4 px-6'>
            {contentLinks.map((content) => {
                return (
                    <Card logoIcon={content.contentType==="youtube" ? youtubeIcon : twitterIcon} shareIcon={shareIcon} deleteIcon={deleteIcon} link={content.link} contentType={content.contentType} title={content.title}/>
                )
            })}
        </div>
    )
}

interface content {
    link: string,
    contentType: "twitter"|"youtube",
    title: string
}

const contentLinks: content[] = [
    {
        link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
        contentType:'twitter', 
        title:'bullshit tweet'
    },
    {
        link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
        contentType:'youtube', 
        title:'random video'
    },
    {
        link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
        contentType:'twitter', 
        title:'bullshit tweet'
    },
    {
        link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
        contentType:'youtube', 
        title:'random video'
    },
    {
        link:'https://x.com/TheCinesthetic/status/1942083152199209078', 
        contentType:'twitter', 
        title:'bullshit tweet'
    },
    {
        link:'https://www.youtube.com/watch?v=TZrMbsyVStE', 
        contentType:'youtube', 
        title:'random video'
    }
]