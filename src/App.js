// import logo from './logo.svg';
// import './App.css';
import Index from './Pages/index.js'
import AboutMe from './Pages/AboutMe.js'
import NotFoundPage from './Pages/NotFoundPage.js'
import ContactMe from './Pages/ContactMe.js'
import Projects from './Pages/Projects.js'

// import { Carousel } from 'react-responsive-carousel'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    // <div className="App">
    <div data-theme="light">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/contactme" element={<ContactMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="*"  element={<NotFoundPage />}/>
          </Routes>
        </BrowserRouter>
      </div>

      
 
  );
}

export default App;
