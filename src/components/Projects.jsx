import '../assets/Projects.css'

import React from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import flixerProject from '../assets/flixerProject.jpg'
import mappingProject from '../assets/mappingProject.jpg'
import mappingPDF from '../assets/M19615449-3.pdf'
import simulatorProject from '../assets/simulatorProject.jpg'
import flappy2077Project from '../assets/flappy2077Project.mp4'


function ImageModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        centered
        className='imageModal'
      >
        <Modal.Header>
            <Modal.Title>
                {props.projectName}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={props.projectFile}  className='img-fluid' rounded />
        </Modal.Body>
      </Modal>
    );
}

function Projects() {
    const [modalShow, setModalShow] = React.useState(false);
    const [projectFile, setProjectFile] = React.useState("");
    const [projectName, setProjectName] = React.useState("");

    const handleImageClick = (projectfile, projectname) => {
        setModalShow(true)
        setProjectFile(projectfile)
        setProjectName(projectname)
    }

    return (
        <div className='projectsContainer'>
            <ImageModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                projectFile={projectFile}
                projectName={projectName}
            />
            <div className='projectsRow'>
                <Card style={{ width: '30rem' }} bg='secondary' text='white'>
                    <a className='clickeableImage' onClick={() => handleImageClick(flixerProject, "Flixer")}>
                        <Card.Img variant="top" src={flixerProject} />
                    </a>
                    
                    <Card.Body>
                        <Card.Title>Flixer</Card.Title>
                        <Card.Text>
                            Aplicación de biblioteca de películas y series.<br/>
                            Tiene funcionalidades como buscar entre peliculas, series, personas o todas las anteriores al mismo tiempo. 
                            Recomienda películas y series que sean populares actualmente, y permite ajustar algunas configuraciones como idioma, región y tema (oscuro o claro).<br/>
                            Toda la información la obtiene de la API TMDB. <br/>
                            La aplicación se encuentra disponible solo en la Play Store.

                        </Card.Text>
                        <div className='separateButtons'>
                            <Button variant="primary">Github</Button>
                            <Button variant="primary" href='https://play.google.com/store/apps/details?id=com.gonisoma.flixer' target="_blank">Descargar</Button>
                        </div>
                        
                    </Card.Body>
                </Card>

                <Card style={{ width: '30rem' }} bg='secondary' text='white'>
                    <a className='clickeableImage' onClick={() => handleImageClick(mappingProject, "Mapeo de entornos cerrados usando cámaras RGB-D mediante el uso de un róbot cuadrúpedo")}>
                        <Card.Img variant="top" src={mappingProject} />
                    </a>
                    
                    <Card.Body>
                        <Card.Title>Mapeo de entornos cerrados usando cámaras RGB-D mediante el uso de un róbot cuadrúpedo</Card.Title>
                        <Card.Text>
                            Este proyecto es la memoria con la que obtuve el título de Ingeniero Civil Electrónico. <br/>
                            Se utilizó el robot Unitree Go1 para mapear tridimensionalmente el entorno que se recorría.  Debido al uso de cámaras RGB-D se abaratan bastante 
                            los costos frente a una solución 
                            con sensores Lidar. <br/>
                            La solución se logró mediante un script de Matlab y ROS.
                            

                        </Card.Text>
                        <div className='separateButtons'>
                            <a href={mappingPDF} download="Mapeo de entornos" target='_blank'>
                                <Button variant="primary" >Descargar escrito</Button>
                            </a>
                            
                        </div>
                        
                    </Card.Body>
                </Card>
            </div>


            <div className='projectsRow'>
                <Card style={{ width: '30rem' }} bg='secondary' text='white'>
                    <a className='clickeableImage' onClick={() => handleImageClick(simulatorProject, "Simulador de sistemas")}>
                        <Card.Img variant="top" src={simulatorProject} />
                    </a>
                    
                    <Card.Body>
                        <Card.Title>Simulador de sistemas</Card.Title>
                        <Card.Text>
                            Herramienta que se encarga de simular sistemas en los que entra carga y cada uno de los nodos se encarga de algun proceso en específico, lo cual toma tiempo y genera que la carga 
                            o visitas que tiene el sistema se encolen. Finalmente se hacen reportes de como se comporto la carga del sistema en general y de cada uno de los nodos que lo componen. <br/>
                            Este proyecto se desarrolló con TypeScript/JavaScript, React, CSS, HTML, entre otras tecnologías.

                        </Card.Text>
                        <div className='separateButtons'>
                            <Button variant="primary" href='https://sim.assayware.com/' target="_blank">Acceder a herramienta</Button>
                        </div>
                        
                    </Card.Body>
                </Card>

                <Card style={{ width: '30rem', height: '400px' }} bg='secondary' text='white'>
                    <video autoPlay muted loop>
                        <source src={flappy2077Project} type='video/mp4'/>
                    </video>
                    
                    <Card.Body>
                        <Card.Title>Flappy 2077</Card.Title>
                        <Card.Text>
                            Juego basado en el famoso Flappy Bird, se utilizó para aprender lo básico de Unity. Al igual que Flixer, este juego también se encuentra disponible en la Play Store.
                            

                        </Card.Text>
                        <div className='separateButtons'>
                            <Button variant="primary">Github</Button>
                            <Button variant="primary" href='https://play.google.com/store/apps/details?id=com.gonisoma.Flappy2077' target="_blank">Descargar</Button>
                        </div>
                        
                    </Card.Body>
                </Card>
            </div>
            
        </div>

        
            
    )
}

export default Projects;