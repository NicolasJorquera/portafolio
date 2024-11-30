
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/SimulatorProjectPage.css";
import simulatorProject from '../../../assets/images/projects/simulatorProject.webp'
import simulatorProjectVideo from '../../../assets/images/projects/simulatorProject.mp4'



const project = {
    projectName: 'Simulador de sistemas',
    imageFile: simulatorProject,
    tags: ['Typescript', 'React'],
    projectPage: 'simulator'
}



function SimulatorProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="simulatorProjectPageHeader">
                <div className="headerTags">
                    {
                        project.tags.map((tag, index)=>{
                            if (index === project.tags.length - 1) {
                                return(
                                    <div>
                                        {tag.toUpperCase()}
                                    </div>
                                )
                            }
                            else{
                                return(
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
                <div className="simulatorProjectLinks">
                    <Button variant="white" href="https://sim.assayware.com/" target="_blank" className="projectLink">
                        Visitar página
                    </Button>
                </div>
            </div>
            
            <div className="simulatorProjectImageContainer">
                <Image className="simulatorProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="simulatorProjectOverviewAndChapters">
                    <div className="simulatorProjectOverview">
                        <div className="simulatorProjectOverviewTitle">
                            Resumen del proyecto
                        </div>
                        <div className="simulatorProjectOverviewText">
                            Herramienta creada para simular el comportamiento de un sistema que se compone de
                            diferentes nodos o partes con una función en específico que toma tiempo. Se comienza por definir
                            el comportamiento de la carga que entrara al sistema y algunos parametros intrínsecos a los nodos
                            del sistema, como por ejemplo la duración de la visita o la concurrencia máxima.
                        </div>
                        
                    </div>
                    <div className="simulatorProjectChapters">
                        <div className="simulatorProjectChaptersTitle">
                            Secciones
                        </div>
                        <div className="simulatorProjectChaptersText">
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

            <div className="simulatorProjectObjective">
                <div className="simulatorProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="simulatorProjectObjectiveText">
                    Una herramienta diseñada para simular el comportamiento de un sistema compuesto por 
                    diferentes nodos o partes con funciones específicas que toman tiempo podría ser necesaria 
                    por varias razones. <br/><br />
                    Antes de implementar un sistema complejo en la práctica, es útil simular 
                    su comportamiento para identificar posibles cuellos de botella, puntos de fallo o áreas de mejora. 
                    Esto permite optimizar el diseño y los recursos necesarios para su implementación. 
                    Además, la simulación puede proporcionar datos sobre el rendimiento del sistema en diferentes 
                    condiciones, como cargas de trabajo variables o cambios en los parámetros de entrada, 
                    lo que ayuda a comprender cómo responde el sistema a diferentes escenarios y a identificar 
                    áreas donde se puede mejorar el rendimiento. También es importante realizar pruebas exhaustivas 
                    antes de lanzar un sistema en producción para garantizar su funcionamiento correcto y su capacidad 
                    para manejar diferentes situaciones. La simulación facilita estas pruebas al proporcionar un entorno 
                    controlado y repetible para identificar y corregir posibles problemas. Finalmente, la simulación 
                    puede ayudar en la planificación de la capacidad y la escalabilidad del sistema, permitiendo 
                    anticipar cómo se comportará en el futuro y qué recursos serán necesarios para satisfacer la 
                    demanda esperada. <br/><br />

                    Una herramienta de simulación de sistemas puede ser invaluable para diseñadores, 
                    desarrolladores y administradores de sistemas que necesitan comprender, mejorar y 
                    optimizar el rendimiento de sistemas complejos antes de su implementación en el mundo real.
                </div>
            </div>


            <div className="simulatorProjectObjective">
                <div className="simulatorProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="simulatorProjectObjectiveText">
                    Se comenzó con una maqueta de lo que se quería lograr, la cual estaba desarrollada en Python. 
                    En esta maqueta se logró simular sistemas con nodos lineales o secuenciales, es decir, uno detrás del otro.
                    Teniendo esta idea básica funcionando se decidió seguir con el desarrollo de la herramienta en 
                    Typescript y React, cabe destacar que si bien estas tecnologías no se destacan por el procesamiento de datos se 
                    tenía pensado desarrollar a futuro un backend en Python o Golang para el procesamiento de los datos.<br/><br />


                    Se eligió React debido a que cuenta con un paquete de nodos que ayudaría con la visualización de la configuración
                    del sistema a simular, el paquete corresponde a React Flow. Teniendo lista la parte de la visualización de los nodos
                    del sistema, se continuó con la configuración de las entradas del sistema, en donde se creó un nodo raíz en el cual 
                    se define la duración de la prueba, la cantidad de steps para las llegadas y la tasa de llegada de las visitas (llegadas/segundo)
                    para cada uno de estos steps. Luego, se continuó con la definición de parámetros de cada uno de los nodos, en donde 
                    se contemplan los límites de concurrencia, cola, timeout, duración de la visita, entre otras cosas. 
                    Ya habiendo definido el sistema a simular se procede con todo el trabajo de analizar el comportamiento de las visitas a medida
                    que recorrían el sistema, teniendo en cuenta los valores definidos previamente. Esto se logró a grandes rasgos con un objeto que
                    almacena cada una de las visitas, y cada una de las visitas en este objeto alberga distintos flags y timestamps como en que nodo
                    se encuentra, en que nodos ya terminó, cuanto tiempo le tomó en cierto nodo, cuanto tiempo estuvo en la cola de cada 
                    nodo, entre otras cosas. <br/><br />

                    Finalmente se trabajó en permitir la visualización del comportamiento del sistema a medida que la prueba/simulación avanzaba, 
                    esta visualización consta de una serie de gráficos que permite ver el comportamiento de cada nodo durante la prueba.


                </div>
            </div>

            <div className="simulatorProjectObjective">
                <div className="simulatorProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="simulatorProjectObjectiveText">
                    Esta herramienta se hizo en el contexto de que mi empresa realizaba pruebas de rendimiento a sistemas con esta estructura, y
                    desde que la herramienta esta disponible se ha estado ocupando bastante para simular antes de una prueba real, y así estimar
                    los resultados o incluso poder entender detalles del sistema, ya que para poder definirlo en el simulador se necesita saber 
                    cada aspecto del sistema y las partes que lo componen. 


                </div>
            </div>

            <div className="videoContainer">
                    <iframe
                        src={`https://www.youtube.com/embed/KJBjQNAJEwI?autoplay=1&loop=1&controls=0&mute=1&playlist=KJBjQNAJEwI`}
                        allow="autoplay; encrypted-media"
                        title="YouTube Video as GIF"
                        className="simulatorProjectVideo"
                    ></iframe>
            </div>
            
        </div>
    )
}

export default SimulatorProjectPage