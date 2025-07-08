import { useState } from 'react'
import { Content } from './Content'
import { CreateContentModal } from './CreateContentModal'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import { useUserAuthCredential } from '../hooks/useUserAuthCredential'
import { Link } from 'react-router-dom'


export const Dashboard = () => {
    const [openNewContentModal, setOpenNewContentModal] = useState(false)
    const userCredential = useUserAuthCredential()
    return ( 
        <div>
            {userCredential && <div>
            <Sidebar />
            <div className='ml-72 min-h-screen'>
                <Topbar newContentModalButton={setOpenNewContentModal}/>
                {openNewContentModal && <CreateContentModal open={openNewContentModal} setOpenModal={setOpenNewContentModal}/>}
                <Content />
            </div> 
        </div>}

        {!userCredential && <div className='h-screen flex justify-center items-center flex-col text-4xl'>
            <div>
                <div>
                Login First, Loser!
                </div>
            </div>
            <div className="text-xl pt-6 flex flex-col">
                <Link to="/signin">- Already a member? <a>SignIn</a></Link>
                <Link to="/signup">- SignUp</Link>
            </div>
        </div>}

        </div>
        
    )
}