import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import VacuumPumps from './components/VacuumPumps'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = ["home", "pumps", "aboutus", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection}/>
      <Home/>
      <VacuumPumps />
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App