
import './assets/App.scss';
import React from 'react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ContactPage from './pages/contact/ContactPage';

import SimulatorProjectPage from './pages/projects/projectsPages/SimulatorProjectPage';
import Flappy2077ProjectPage from './pages/projects/projectsPages/Flappy2077ProjectPage';
import FlixerProjectPage from './pages/projects/projectsPages/FlixerProjectPage';
import MappingProjectPage from './pages/projects/projectsPages/MappingProjectPage';
import DockeraidProjectPage from './pages/projects/projectsPages/DockeraidProjectPage';
import TransactionFlowProjectPage from './pages/projects/projectsPages/TransactionFlowProjectPage';



import logoDark from './assets/images/logo/logoDark.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark" sticky="top" className='navbar'>
        <Container>
          <Navbar.Brand href="/" >
            <Image className='logoSize' src={logoDark}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="/about" className='leftPaddingNavbarItems'>Sobre mi</Nav.Link>
              <Nav.Link href="/projects" className='leftPaddingNavbarItems'>Proyectos</Nav.Link>
              {/* <Nav.Link href="/resources" className='leftPaddingNavbarItems'>Recursos</Nav.Link> */}
              <Nav.Link href="/contact" className='leftPaddingNavbarItems'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <div className='widthRestriction'>
        <Router>
          <Routes>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/projects/simulator" element={<SimulatorProjectPage/>}/>
            <Route path="/projects/flappy2077" element={<Flappy2077ProjectPage/>}/>
            <Route path="/projects/flixer" element={<FlixerProjectPage/>}/>
            <Route path="/projects/mapping" element={<MappingProjectPage/>}/>
            <Route path="/projects/dockeraid" element={<DockeraidProjectPage/>}/>
            <Route path="/projects/transactionFlow" element={<TransactionFlowProjectPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
      

      <div className='footerContainer'>
        <div className='footerText'>
          Sígueme en mis redes sociales:
        </div>
        <div className='footerLinks'>
          <a href='https://github.com/NicolasJorquera' target="_blank">
          <TbBrandGithubFilled size={30} />
          </a>
          <a  href='https://www.linkedin.com/in/nicolas-jorquera-martinez-70526514b/' target="_blank">
          <FaLinkedinIn size={30}/>
          </a>
          
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
