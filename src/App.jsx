import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
