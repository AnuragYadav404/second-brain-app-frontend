// import { Button } from './components/Button'
import { Card } from './components/Card'
import { plusIcon } from './icons/plusIcon'
import { shareIcon } from './icons/shareIcon'

function App() {

  return (
    <>
    {/* <Button variant="primary" text='Add Content' onClick={()=> {}} frontIcon={plusIcon}/>
   
   <Button variant="primary" text='Share Brain' onClick={()=> {}} frontIcon={shareIcon}/> */}
   
    <Card logoIcon={plusIcon} shareIcon={shareIcon} deleteIcon={shareIcon} link='https://x.com/TheCinesthetic/status/1942083152199209078' contentType='twitter' title='bullshit tweet'/>
    <Card logoIcon={plusIcon} shareIcon={shareIcon} deleteIcon={shareIcon} link='https://www.youtube.com/watch?v=TZrMbsyVStE' contentType='youtube' title='random video'/>

   </>
  )
}

export default App
