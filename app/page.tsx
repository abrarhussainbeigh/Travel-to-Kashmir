import Header from './components/Header'
import Hero from './components/Hero'
import Packages from './components/Packages'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <Packages />
      <About />
    
      <Contact />
      <Footer />
    </div>
  )
}

