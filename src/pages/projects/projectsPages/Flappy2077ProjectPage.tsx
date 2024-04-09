
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/Flappy2077ProjectPage.css";
import flappy2077Project from '../../../assets/images/projects/flappy2077Project.png'
import flappy2077ProjectVideo from '../../../assets/images/projects/flappy2077Project.mp4'



const project = {
    projectName: 'Flappy 2077',
    imageFile: flappy2077Project,
    tags: ['Unity', 'Android', 'C', 'C++'],
    projectPage: 'flappy2077'
}



function Flappy2077ProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="flappy2077ProjectPageHeader">
                <div className="headerTags">
                    {
                        project.tags.map((tag, index)=>{
                            if (index == project.tags.length - 1) {
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
                <div className="flappy2077ProjectLinks">
                    <Button variant="white" href="https://play.google.com/store/apps/details?id=com.gonisoma.Flappy2077" target="_blank" className="projectLink">
                        Play Store
                    </Button>
                    <Button variant="white" href="https://www.youtube.com/watch?v=XtQMytORBmM" target="_blank" className="projectLink">
                        Tutorial
                    </Button>
                    <Button variant="white" href="https://github.com/NicolasJorquera/Flappy-2077" target="_blank" className="projectLink">
                        Repositorio
                    </Button>
                </div>
            </div>
            
            <div className="flappy2077ProjectImageContainer">
                <Image className="flappy2077ProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="flappy2077ProjectOverviewAndChapters">
                    <div className="flappy2077ProjectOverview">
                        <div className="flappy2077ProjectOverviewTitle">
                            Resumen del proyecto
                        </div>
                        <div className="flappy2077ProjectOverviewText">
                            Juego basado en Flappy Bird, este desarrollo se realizó por iniciativa propia
                            y con el objetivo de aprender Unity, desde generar las primeras maquetas hasta 
                            publicarlo en la Play Store.
                        </div>
                        
                    </div>
                    <div className="flappy2077ProjectChapters">
                        <div className="flappy2077ProjectChaptersTitle">
                            Secciones
                        </div>
                        <div className="flappy2077ProjectChaptersText">
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

            <div className="flappy2077ProjectObjective">
                <div className="flappy2077ProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="flappy2077ProjectObjectiveText">
                    Durante la duración de mi carrera universitaria intente aprender Unity en dos ocaciones, 
                    pero no logré generar un juego completo debido a que me complicaban los scripts de C. Por esto mismo
                    mi intención era completar un juego (al menos lo principal).
                </div>
            </div>


            <div className="flappy2077ProjectObjective">
                <div className="flappy2077ProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="flappy2077ProjectObjectiveText">
                Desarrollar un juego similar a Flappy Bird fue un proyecto emocionante y educativo para 
                aprender sobre el desarrollo de videojuegos. Comencé definiendo el concepto básico del 
                juego, que en este caso era un juego de plataformas 2D donde el jugador controlaba un 
                personaje que volaba a través de obstáculos. Utilicé un motor de juego como Unity para 
                configurar un nuevo proyecto e importé los recursos gráficos y de sonido necesarios, 
                como imágenes para el personaje, obstáculos y fondos, así como efectos de sonido para 
                acciones como saltar y chocar. <br/><br/>

                La mecánica básica del juego implicaba permitir que el jugador controlara el vuelo 
                del personaje tocando la pantalla para hacerlo ascender. Seguí tutoriales para insertar 
                assets en el entorno de Unity y aprendí a moverlos. Creé la lógica para generar obstáculos 
                automáticos que el jugador debía evitar, como tubos que se desplazaban de manera constante 
                a través del nivel.<br/><br/>

                Fue esencial implementar la detección de colisiones entre el personaje y los obstáculos, 
                de modo que el juego terminara si se producía una colisión, y agregué la lógica de "Game Over". 
                Además, añadí características adicionales al juego, como música de fondo, efectos de sonido y 
                elementos de progresión como puntuaciones y tablas de clasificación.<br/><br/>

                A medida que avanzaba en el desarrollo, realicé pruebas para identificar posibles problemas 
                y realicé ajustes en la jugabilidad, la dificultad y otros aspectos según fue necesario. 
                Solicité retroalimentación de amigos y familiares para mejorar la experiencia del jugador. 
                Recuerdo que el desarrollo de un juego como Flappy Bird fue un proceso iterativo, y siempre 
                pude agregar más características y pulir el juego para que fuera aún mejor. 
                ¡Me divertí mucho mientras aprendía y desarrollaba mi juego!

                </div>
            </div>

            <div className="flappy2077ProjectObjective">
                <div className="flappy2077ProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="flappy2077ProjectObjectiveText">
                    Este juego logró su objetivo, ya que aprendí lo básico de crear un juego para dispositivos móviles en Unity e incluso un poco más,
                    ya que el juego también esta disponible en la Play Store y contiene publicidad, dos características que no son fácil de lograr.


                </div>
            </div>

            <div className="videoContainer">
                    <video className="video" src={flappy2077ProjectVideo} autoPlay muted loop>

                    </video>
            </div>
            
        </div>
    )
}

export default Flappy2077ProjectPage