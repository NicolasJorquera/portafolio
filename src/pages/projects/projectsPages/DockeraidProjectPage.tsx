
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/DockeraidProjectPage.css";
import dockeraidProject from '../../../assets/images/projects/dockeraidProject.webp'



const project = {
    projectName: 'Dockeraid',
    imageFile: dockeraidProject,
    tags: ['Typescript', 'React', 'Docker', 'AWS'],
    projectPage: 'dockeraid'
}



function DockeraidProjectPage() {
    return (
        <div className="sectionsContainers">
            <div className="dockeraidProjectPageHeader">
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
                <div className="dockeraidProjectLinks">
                    <Button variant="white" href="https://dockeraid.assayware.com/" target="_blank" className="projectLink">
                        Visitar página
                    </Button>
                </div>
            </div>

            <div className="dockeraidProjectImageContainer">
                <Image className="dockeraidProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="dockeraidProjectOverviewAndChapters">
                <div className="dockeraidProjectOverview">
                    <div className="dockeraidProjectOverviewTitle">
                        Resumen del proyecto
                    </div>
                    <div className="dockeraidProjectOverviewText">
                        Herramienta para calcular el uso de recursos de aplicaciones docker, para poder
                        determinar la infraestructura requerida. En este desarrollo participe principalmente
                        en la parte de frontend pero de igual forma configuré aspectos de la infraestructura
                        en Amazon con las herramientas de AWS.
                    </div>

                </div>
                <div className="dockeraidProjectChapters">
                    <div className="dockeraidProjectChaptersTitle">
                        Secciones
                    </div>
                    <div className="dockeraidProjectChaptersText">
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

            <div className="dockeraidProjectObjective">
                <div className="dockeraidProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="dockeraidProjectObjectiveText">
                    Desarrollar una herramienta para calcular el uso de recursos de aplicaciones
                    Docker y determinar la infraestructura requerida puede ser motivado por varias razones.
                    Primero, permite optimizar el uso de recursos al asignarlos de manera eficiente,
                    evitando el desperdicio y reduciendo costos. Además, facilita la planificación de
                    capacidad al prever las necesidades de infraestructura para nuevas aplicaciones o
                    cargas de trabajo, asegurando un rendimiento adecuado. También posibilita la escalabilidad
                    al proporcionar información sobre cómo escalar vertical u horizontalmente según sea
                    necesario. Asimismo, ayuda a optimizar el rendimiento al identificar aplicaciones que
                    consumen recursos de manera desproporcionada, permitiendo ajustes para mejorar la eficiencia.
                    Por último, proporciona datos precisos para el análisis de costos, lo que facilita la
                    asignación de recursos financieros de manera más precisa. En conjunto, esta herramienta
                    conduce a una infraestructura más eficiente y rentable.
                </div>
            </div>


            <div className="dockeraidProjectObjective">
                <div className="dockeraidProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="dockeraidProjectObjectiveText">
                    En primer lugar, se diseñó la interfaz de usuario, definiendo qué información mostrar y cómo
                    interactuar con ella. Luego, se configuró un entorno de desarrollo React con TypeScript y se
                    crearon los componentes necesarios para la interfaz de usuario. Para obtener información sobre
                    las aplicaciones Docker y sus recursos utilizados, se desarrolló una interfaz que permite la creación
                    de workers, servicios y sus parámetros de recursos o requerimientos.
                    Una vez obtenidos los datos, se implementó la lógica para calcular
                    el uso de recursos de cada aplicación Docker y determinar la infraestructura requerida.
                    Esto implicó calcular la cantidad de CPU, memoria, almacenamiento, etc., necesarios para
                    cada aplicación. Los resultados de estos cálculos se mostraron en la interfaz de usuario,
                    utilizando gráficos o tablas para presentar la información de manera clara. Finalmente, se
                    realizaron pruebas exhaustivas para asegurarse de que la herramienta funcionara correctamente
                    en diferentes escenarios antes de ser desplegada en un entorno de producción.

                </div>
            </div>

            <div className="dockeraidProjectObjective">
                <div className="dockeraidProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="dockeraidProjectObjectiveText">
                    Esta herramienta ha sido de gran ayuda para introducir algunos de los conceptos claves de Docker a
                    clientes que tienen implementaciones en esta plataforma pero no logran entender completamente como funciona.


                </div>
            </div>

            <div className="videoContainer">
                <iframe
                    src={`https://www.youtube.com/embed/9Pet-1ofuDc?autoplay=1&loop=1&controls=0&mute=1&playlist=9Pet-1ofuDc`}
                    allow="autoplay; encrypted-media"
                    title="YouTube Video as GIF"
                    className="dockeraidProjectVideo"
                ></iframe>
            </div>

        </div>
    )
}

export default DockeraidProjectPage