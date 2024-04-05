
import './assets/App.scss';
import React from 'react';
import Test from './pages/Test';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import LatestProjects from './pages/LatestProjects';

import logoDark from './assets/images/logo/logoDark.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" >
            <Image className='logoSize' src={logoDark}/>
          </Navbar.Brand>
          <Nav >
            <Nav.Link href="#about" className='leftPaddingNavbarItems'>Sobre mi</Nav.Link>
            <Nav.Link href="#projects" className='leftPaddingNavbarItems'>Proyectos</Nav.Link>
            <Nav.Link href="#resources" className='leftPaddingNavbarItems'>Recursos</Nav.Link>
            <Nav.Link href="#contact" className='leftPaddingNavbarItems'>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='sectionsContainers'>
        <Introduction/>
        {/* <LatestProjects/> */}
        <Projects/>
        <Technologies/>
      </div>
    </div>
    
    
  );
}

export default App;
