import './App.css';
import { Navbar } from './components/Nav/Navbar.js';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/About';
import Skills from './components/Skills/Skills.js'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'
import Language from './components/language/Language'

function App() {
  return (
    <div>
      <Language />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

