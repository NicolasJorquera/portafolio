
import './assets/App.scss';
import React from 'react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ResourcesPage from './pages/resources/ResourcesPage';
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
  Route,
  Navigate,
  Link,
  useLocation
} from "react-router";
import { useLayoutEffect } from 'react';


// Con navegación de SPA el scroll se conserva entre páginas; se vuelve arriba al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}


function App() {
  return (
    <Router>
    <div>
      <ScrollToTop />
      <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark" sticky="top" className='navbar'>
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <Image className='logoSize' src={logoDark}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link as={Link} to="/about" eventKey="/about" className='leftPaddingNavbarItems'>Sobre mi</Nav.Link>
              <Nav.Link as={Link} to="/projects" eventKey="/projects" className='leftPaddingNavbarItems'>Proyectos</Nav.Link>
              <Nav.Link as={Link} to="/resources" eventKey="/resources" className='leftPaddingNavbarItems'>Recursos</Nav.Link>
              <Nav.Link as={Link} to="/contact" eventKey="/contact" className='leftPaddingNavbarItems'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <div className='widthRestriction'>
          <Routes>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/projects/simulator" element={<SimulatorProjectPage/>}/>
            <Route path="/projects/flappy2077" element={<Flappy2077ProjectPage/>}/>
            <Route path="/projects/flixer" element={<FlixerProjectPage/>}/>
            <Route path="/projects/mapping" element={<MappingProjectPage/>}/>
            <Route path="/projects/dockeraid" element={<DockeraidProjectPage/>}/>
            <Route path="/projects/transactionFlow" element={<TransactionFlowProjectPage/>} />
            <Route path="/resources" element={<ResourcesPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </div>
      

      <div className='footerContainer'>
        <div className='footerText'>
          Sígueme en mis redes sociales:
        </div>
        <div className='footerLinks'>
          <a href='https://github.com/NicolasJorquera' target="_blank" rel="noreferrer">
          <TbBrandGithubFilled size={30} />
          </a>
          <a  href='https://www.linkedin.com/in/nicolas-jorquera-martinez-70526514b/' target="_blank" rel="noreferrer">
          <FaLinkedinIn size={30}/>
          </a>
          
        </div>
      </div>
    </div>
    </Router>
    
    
  );
}

export default App;
