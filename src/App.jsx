import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer />
    </div>
  )
}

export default App
