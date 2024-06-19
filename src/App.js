import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Certificates from './pages/Certificates';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/certificates" element={<Certificates/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
