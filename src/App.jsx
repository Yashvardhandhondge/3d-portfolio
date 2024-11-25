import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import WorkExperience from './Sections/Experience'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <WorkExperience/>
     <Contact/>
     <Footer/>



    </main>
  )
}

export default App