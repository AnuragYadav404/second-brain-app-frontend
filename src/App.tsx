import { Button } from './components/Button'
import { plusIcon } from './icons/plusIcon'
import { shareIcon } from './icons/shareIcon'

function App() {

  return (
    <>
    <Button variant="primary" text='Add Content' onClick={()=> {}} frontIcon={plusIcon}/>
    <Button variant="primary" text='Share Brain' onClick={()=> {}} frontIcon={shareIcon}/>
   </>
  )
}

export default App
