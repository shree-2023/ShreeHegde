import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Headersection from './Components/Headersection/Headersection'
import { Title } from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Project from './Components/Projects/Project'

function App() {
  return (
      
    <div>
      
      <Navbar />
      <Headersection />
      <div className='container'>
     
        <About />
        <Title subTitle='MY PROJECTS' />
        <Project/>
        <Title subTitle='CONTACT DETAILS'  />
        <Contact />
        
      </div>
    </div>
   
  )
}
export default App