import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import './App.css'
import Aboutme from './components/About/Aboutme'
import Myskills from './components/Myskills'
import Contact from './components/Contact'

function App() {
  

  return (
   <div>
    <section><Navbar></Navbar>
    <Hero></Hero></section>
    <section><Aboutme></Aboutme></section>
    <section><Myskills></Myskills></section>
    <section><Contact></Contact></section>
   </div>
  )
}

export default App
