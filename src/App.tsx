// import { Button } from './components/Button'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './components/Signin'
import { Signup } from './components/Signup'
import { Dashboard } from './components/Dashboard'

function App() {



  return (<BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>)
  


  // return (
  //   <div>
  //   {/* <Button variant="primary" text='Add Content' onClick={()=> {}} frontIcon={plusIcon}/> 
  //  <Button variant="primary" text='Share Brain' onClick={()=> {}} frontIcon={shareIcon}/> */}
  //   {/* <Sidebar />
  //   <Dashboard /> */}
  //     <Signin />
  //  </div>
  // )
}

export default App
