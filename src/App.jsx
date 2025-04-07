import { useState } from 'react'

import './App.css'
import PushNavbar from './component/navbar/PushNavbar'
import WhyPushSports from './component/WhyPush/WhyPushSports'
import BestInClass from './component/BestInClass/BestInClass'
import SportsInfrastructure from './component/SportsInfra/SportsInfrastructure'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
 <PushNavbar/>
 <WhyPushSports/>
 <BestInClass/>
 <SportsInfrastructure/>
 <Footer/>
      </div>
    </>
  )
}

export default App
