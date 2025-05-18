
import { AllRoutes } from './Routes/AllRoutes'
import { Header,Footer } from './Components'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

export default function App  ()  {
  return (
    <div className='App '>
    <Header />
      <AllRoutes />
      
      <Footer />
    </div>
  )
}


