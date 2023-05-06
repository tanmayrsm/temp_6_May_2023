import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Skills />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
