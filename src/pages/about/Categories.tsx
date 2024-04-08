
import { Accordion } from 'react-bootstrap'
import '../../assets/about/Categories.css'

import AboutCategorieItem from "../../components/AboutCategorieItem";

function Categories() {
    return (
        <div className='categoriesContainer'>
            <Accordion  defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiencia</Accordion.Header>
                    <Accordion.Body>
                        <AboutCategorieItem 
                        timeLapse={["2021", "2024"]} 
                        position='Desarrollador frontend y analista de datos' 
                        companyName='Datablick' 
                        bulletPoints={[
                            "Desarrollar Saas para ayudar en pruebas de rendimiento.",
                            "Crear aplicación web en React de simulación de sistemas.",
                            "Análisis y visualización de datos.",
                            "Optimización de sistemas.",
                            "Las principales tecnologías que se utilizaron: Python, Typescript, React, Docker, HTML, CSS."
                        ]}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Educación</Accordion.Header>
                    <Accordion.Body>
                        <AboutCategorieItem 
                            timeLapse={["2023"]} 
                            position='Mapeo de entornos cerrados usando cámaras RGB-D mediante el uso de un robot cuadrúpedo' 
                            companyName='Dr. Fernando Auat Cheein' 
                            bulletPoints={[
                                "Análisis del estado del arte de las tecnologías relacionadas.",
                                "Levantamiento de la factibilidad del proyecto.",
                                "Simulación de la implementación en Gazebo.",
                                "Implementación en Matlab y ROS para el robot Unitree Go1."
                                
                        ]}/>
                        <AboutCategorieItem 
                            timeLapse={["2017", "2023"]} 
                            position='Ingeniero Civil Electrónico, mención computadores' 
                            companyName='Universidad Técnica Federico Santa María' 
                            bulletPoints={[
                                "Ayudante en las asignaturas de Matemáticas III y Teoría de redes eléctricas I.",
                                "Participación en los talleres de Ultimate Frisbee y Tenis.",
                                "Desarrollar liderazgo y habilidades de manejo de equipos de trabajo.",
                                "Usar ideas y métodos para tomar la mejor decisión posible basado en los resultados."
                                
                        ]}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Voluntariados</Accordion.Header>
                    <Accordion.Body>
                        <AboutCategorieItem 
                            timeLapse={["2017", "2020"]} 
                            position='Ayudante en clases de róbotica para niños' 
                            companyName='Mustakis y Departamento de Electrónica' 
                            bulletPoints={[
                                "Ayudar durante la clase con cualquier problema que tengan los grupos en el desarrollo de las actividades.",
                                "Traslado de recursos tecnológicos.",
                                "Creación de desafíos para las clases",
                                "Implementación de un robot seguidor de líneas."
                                
                        ]}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Categories