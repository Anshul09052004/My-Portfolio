
import './App.css'
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Skill from './Component/Skill'
import Project from './Component/project'



function App() {
  
 

  return (
    <>
   <div className="bg-gray-900 min-h-screen ">
  <Navigation />
  <Home />
  <About />
  <Skill />
  <Project/>
  <Contact />
</div>

    </>
  )
  
}

export default App
