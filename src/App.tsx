
import './assets/App.scss';
import React from 'react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';

import logoDark from './assets/images/logo/logoDark.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" className='navbar'>
        <Container>
          <Navbar.Brand href="/" >
            <Image className='logoSize' src={logoDark}/>
          </Navbar.Brand>
          <Nav >
            <Nav.Link href="/about" className='leftPaddingNavbarItems'>Sobre mi</Nav.Link>
            <Nav.Link href="/projects" className='leftPaddingNavbarItems'>Proyectos</Nav.Link>
            <Nav.Link href="/resources" className='leftPaddingNavbarItems'>Recursos</Nav.Link>
            <Nav.Link href="/contact" className='leftPaddingNavbarItems'>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage/>} >
          </Route>
          <Route path="/" element={<HomePage />}>
            
          </Route>
        </Routes>
    </Router>
    </div>
    
    
  );
}

export default App;
