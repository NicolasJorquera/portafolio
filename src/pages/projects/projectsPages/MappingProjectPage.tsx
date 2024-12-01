
import { Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/MappingProjectPage.css";
import mappingProject from '../../../assets/images/projects/mappingProject.webp'



const project = {
    projectName: 'Mapeo tridimensional de entornos',
    imageFile: mappingProject,
    tags: ['ROS', 'Matlab', 'C', 'C++', 'Python'],
    projectPage: 'mapping'
}



function MappingProjectPage() {
    return (
        <div className="sectionsContainers">
            <div className="mappingProjectPageHeader">
                <div className="headerTags">
                    {
                        project.tags.map((tag, index) => {
                            if (index === project.tags.length - 1) {
                                return (
                                    <div>
                                        {tag.toUpperCase()}
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="withPointsContainer">
                                        {tag.toUpperCase()}
                                        <div className="headerPoints">
                                        </div>
                                    </div>

                                )
                            }

                        })
                    }
                </div>
                <div className="headerTitle">
                    {project.projectName}
                </div>
                <div className="mappingProjectLinks">
                    {/* <a href={mappingProjectPDF} download="Escrito_Proyecto_Mapeo">
                        <Button variant="white" className="projectLink">
                            Descargar escrito
                        </Button>
                    </a> */}

                </div>
            </div>

            <div className="mappingProjectImageContainer">
                <Image className="mappingProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="mappingProjectOverviewAndChapters">
                <div className="mappingProjectOverview">
                    <div className="mappingProjectOverviewTitle">
                        Resumen del proyecto
                    </div>
                    <div className="mappingProjectOverviewText">
                        En este proyecto, se aplicó un algoritmo de Matlab en el robot Unitree GO 1 para
                        realizar el mapeo del entorno según las observaciones del robot. La implementación
                        utiliza la posición y orientación proporcionadas por el robot junto con las nubes de
                        puntos obtenidas de la cámara RGB-D ubicada en la parte frontal de su cabeza.
                    </div>

                </div>
                <div className="mappingProjectChapters">
                    <div className="mappingProjectChaptersTitle">
                        Secciones
                    </div>
                    <div className="mappingProjectChaptersText">
                        <div>
                            Motivación •
                        </div>
                        <div>
                            Proyecto •
                        </div>
                        <div>
                            Resultados •
                        </div>
                    </div>
                </div>
            </div>

            <div className="mappingProjectObjective">
                <div className="mappingProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="mappingProjectObjectiveText">
                    Este proyecto se centra en mejorar la exploración y cartografía
                    de entornos cerrados mediante un robot cuadrúpedo equipado con cámaras RGB-D.
                    El objetivo es aumentar la seguridad y eficiencia en la inspección de áreas peligrosas
                    o inaccesibles para humanos, como zonas afectadas por desastres naturales o
                    infraestructuras industriales. Se aprovechan avances tecnológicos en sensores
                    y algoritmos para mejorar la percepción del entorno, lo que puede tener un
                    impacto significativo en la seguridad industrial, respuesta a desastres y eficiencia operativa.
                </div>
            </div>


            <div className="mappingProjectObjective">
                <div className="mappingProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="mappingProjectObjectiveText">
                    Implementé esta solución en MATLAB para realizar el mapeo tridimensional del entorno utilizando
                    datos de nubes de puntos y odometría de un robot. Para trabajar con ROS, utilicé el paquete ROS Toolbox,
                    que facilita la conexión con el robot y la suscripción a los tópicos necesarios, como la nube de puntos y tf.<br /><br />

                    En el script, inicialicé la estructura de datos para representar el mapa 3D y controlé la frecuencia
                    de actualización del mapa para evitar sobrecargar el sistema. En un bucle infinito, recibí los datos
                    de odometría y la nube de puntos, actualicé el mapa y lo mostré en pantalla.<br /><br />

                    Es importante mencionar que al incrementar la frecuencia de actualización del mapa, noté que la cobertura
                    del mismo podría deteriorarse. Además, observé que los colores de los puntos en la nube no se consideraron
                    al añadirlos al mapa, y se asignaron colores según la altura del punto.<br /><br />


                </div>
            </div>

            <div className="mappingProjectObjective">
                <div className="mappingProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="mappingProjectObjectiveText">
                    Los resultados indican que, si bien el procesamiento de la información es lo
                    suficientemente rápido para permitir una previsualización en tiempo real del
                    mapeo tridimensional, la calidad del mapeo no es óptima. Se observan errores
                    en el posicionamiento de las nubes de puntos debido a la información de odometría obtenida del robot.


                </div>
            </div>

            <div className="videoContainer">
                <iframe
                    src={`https://www.youtube.com/embed/-rMB6p4IGfg?autoplay=1&loop=1&controls=0&mute=1&playlist=-rMB6p4IGfg`}
                    allow="autoplay; encrypted-media"
                    title="YouTube Video as GIF"
                    className="mappingProjectVideo"
                ></iframe>
            </div>

        </div>
    )
}

export default MappingProjectPage