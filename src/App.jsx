import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Home      from './components/Home';
import About     from './components/About';
import Experience from './components/Experience';
import Projects  from './components/Projects';
import Contact   from './components/Contact';
import './App.css';

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/'           element={<Home />}       />
      <Route path='/about'      element={<About />}      />
      <Route path='/experience' element={<Experience />} />
      <Route path='/projects'   element={<Projects />}   />
      <Route path='/contact'    element={<Contact />}    />
    </Routes>
  </HashRouter>
);

export default App;
