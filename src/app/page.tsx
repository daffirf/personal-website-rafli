import Hero from "./components/Hero"
import About from "./components/About" 
import Skills from "./components/Skills" 
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <Navbar />
    </main>
  )
}