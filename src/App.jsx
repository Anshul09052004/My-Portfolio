
import './App.css'
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Skill from './Component/Skill'
import Project from './Component/Project'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer'
import { BrowserRouter } from 'react-router-dom'




function App() {




  return (
    <>
      <BrowserRouter>
      <div className="bg-gray-900 min-h-screen ">
        <Navigation />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <ToastContainer position="top-center"
          style={{ top: "50px" }}
          autoClose={1500} />
        <Footer />
      </div>
      </BrowserRouter>

    </>
  )

}

export default App
