
import { Accordion } from 'react-bootstrap'
import '../../assets/about/Categories.css'

import AboutCategorieItem from "../../components/AboutCategorieItem";

function Categories() {
    return (
        <div className='categoriesContainer'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiencia</Accordion.Header>
                    <Accordion.Body>
                        <AboutCategorieItem
                            timeLapse={["2024", "2025"]}
                            position='Flujo transaccional'
                            companyName='HF Solutions'
                            bulletPoints={[
                                "Conectar correctamente un dispositivo de lectura de tarjetas de crédito a un sistema de transacciones bancarias (Geopagos).",
                                "Api Gateway para que el comercio pueda visualizar y actuar sobre las transacciones de sus clientes.",
                                "Tecnologías utilizadas: AWS serverless (Lambda, DynamoDB, SQS, S3, API Gateway)."
                            ]} />

                        <AboutCategorieItem
                            timeLapse={["2024"]}
                            position='Aplicación de autoservicio'
                            companyName='HF Solutions'
                            bulletPoints={[
                                "Primera maqueta de un autoservicio en un totem con android, en donde se puede elegir los productos y pagar directamente en el totem.",
                                "Tecnologías utilizadas: Flutter, BLoC y Figma."
                            ]} />

                        <AboutCategorieItem
                            timeLapse={["2024"]}
                            position='Implementación de observabilidad'
                            companyName='Datablick'
                            bulletPoints={[
                                "Se busca implementar observabilidad (saber el estado del sistema observando las salidas del mismo) en un sistema propio de simulación de transacciones bancarias (Mirrorbank).",
                                "Para lograr el monitoreo correcto del sistema se implementa un Elastic Stack, y para facilidad de trabajo se dockerizan todas las partes de la implementación.",
                                "Tecnologías utilizadas: Elastic, Logstash, Kibana, Metricbeat, Filebeat, Docker."
                            ]} />

                        <AboutCategorieItem
                            timeLapse={["2022", "2023"]}
                            position='Simulador de sistemas'
                            companyName='Datablick'
                            bulletPoints={[
                                "Aplicación en React encargada de simular el comportamiento de un sistema y los nodos o etapas que lo componen. Se define el comportamiento de la carga que le llegará al sistema y algunos parámetros para cada nodo como concurrencia máxima y tiempo medio de lo que dura una visita en este nodo.",
                                "Análisis, visualización y optimización de datos usando Typescript, y para levantarlo se utilizaron servicios de AWS.",
                                "Tecnologías utilizadas: React, Typescript, EC2."
                            ]} />

                        <AboutCategorieItem
                            timeLapse={["2022", "2023"]}
                            position='Aplicaciones móviles'
                            companyName='Personal'
                            bulletPoints={[
                                "Flixer: Aplicación de biblioteca de películas y series. La aplicación se desarrollo con Flutter y la información se obtiene de la API TMDB. Flixer esta disponible en Android.",
                                "Flappy 2077: Juego basado en Flappy bird. El juego se desarrollo para aprender Unity, el cual se tiene que programar con scripts de C y C++. Flappy 2077 esta disponible en Android."
                            ]} />
                        <AboutCategorieItem
                            timeLapse={["2021", "2022"]}
                            position='Desarrollo de SaaS'
                            companyName='Datablick'
                            bulletPoints={[
                                "Desarrollo de una herramienta para calcular el uso de recursos por aplicaciones docker, y así poder determinar la infraestructura requerida.",
                                "Tecnologías utilizadas: React \& Nodejs, Typescript, lambda, DynamoDB y Aurora MYSQL."
                            ]} />
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

                            ]} />
                        <AboutCategorieItem
                            timeLapse={["2017", "2023"]}
                            position='Ingeniero Civil Electrónico, mención Informática'
                            companyName='Universidad Técnica Federico Santa María'
                            bulletPoints={[
                                "Ayudante en las asignaturas de Matemáticas III y Teoría de redes eléctricas I.",
                                "Participación en los talleres de Ultimate Frisbee y Tenis.",
                                "Desarrollar liderazgo y habilidades de manejo de equipos de trabajo.",
                                "Usar ideas y métodos para tomar la mejor decisión posible basado en los resultados."
                            ]} />
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

                            ]} />
                        <AboutCategorieItem
                            timeLapse={["2017", "2018"]}
                            position='Entretenimiento para niños'
                            companyName='Recetando sonrisas'
                            bulletPoints={[
                                "Recetando sonrisas es una ONG cristiana que brinda ayuda a las personas con problemas de salud.",
                                "Encargado de hacer las actividades de entretenimiento, mientras los padres se examinaban con los profesionales."
                            ]} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Categories