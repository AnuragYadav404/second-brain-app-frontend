import { useState } from 'react'
import { Content } from './Content'
import { CreateContentModal } from './CreateContentModal'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'

export const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false)
    return ( 
        <div>
            <Sidebar />
            <div className='ml-72 min-h-screen'>
                <Topbar newContentModalButton={setOpenModal}/>
                {openModal && <CreateContentModal open={openModal} setOpenModal={setOpenModal}/>}
                <Content />
            </div> 
        </div>
    )
}