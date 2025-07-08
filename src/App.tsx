// import { Button } from './components/Button'

import { Content } from './components/Content'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'


function App() {

  return (
    <div className=''>
    {/* <Button variant="primary" text='Add Content' onClick={()=> {}} frontIcon={plusIcon}/> 
   <Button variant="primary" text='Share Brain' onClick={()=> {}} frontIcon={shareIcon}/> */}
    <Sidebar />
    <div className='ml-72'>
      <Topbar />
      <Content />
    </div> 
   </div>
  )
}

export default App
