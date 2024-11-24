
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/FlixerProjectPage.css";
import flixerProject from '../../../assets/images/projects/flixerProject.webp'
import flixerProjectVideo from '../../../assets/images/projects/flixerProject.mp4'



const project = {
    projectName: 'Flixer',
    imageFile: flixerProject,
    tags: ['Android', 'Flutter'],
    projectPage: 'flixer'
}



function FlixerProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="flixerProjectPageHeader">
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
                <div className="flixerProjectLinks">
                    <Button variant="white" href="https://play.google.com/store/apps/details?id=com.gonisoma.flixer" target="_blank" className="projectLink">
                        Play Store
                    </Button>
                    <Button variant="white" href="https://github.com/NicolasJorquera/Flixer" target="_blank" className="projectLink">
                        Repositorio
                    </Button>
                </div>
            </div>
            
            <div className="flixerProjectImageContainer">
                <Image className="flixerProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="flixerProjectOverviewAndChapters">
                    <div className="flixerProjectOverview">
                        <div className="flixerProjectOverviewTitle">
                            Resumen del proyecto
                        </div>
                        <div className="flixerProjectOverviewText">
                            Aplicación de biblioteca de películas y series. Permite ver gran parte de la información 
                            de la película, incluyendo cosas como la sinopsis, las plataformas en las que esta disponible 
                            y el trailer. Esta aplicación se encuentra disponible en la Play Store.
                        </div>
                        
                    </div>
                    <div className="flixerProjectChapters">
                        <div className="flixerProjectChaptersTitle">
                            Secciones
                        </div>
                        <div className="flixerProjectChaptersText">
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

            <div className="flixerProjectObjective">
                <div className="flixerProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="flixerProjectObjectiveText">
                    Proporcionar a los usuarios una plataforma donde puedan acceder a una amplia gama de información sobre 
                    películas y programas de televisión. Esto incluye detalles como la sinopsis, las plataformas de transmisión 
                    donde están disponibles y los tráilers. La idea es facilitar a los usuarios la búsqueda y el acceso a 
                    contenido audiovisual, brindándoles una experiencia más completa y conveniente. Además, al estar disponible 
                    en la Play Store, se busca alcanzar a una amplia audiencia de usuarios de dispositivos Android. <br/> <br/>

                    Junto con esto, lo que mas me motivaba era la posibilidad de aprender una herramienta como Flutter, la cual
                    permite desarrollar una amplia gama de aplicaciones (Android, IOS, Windows, Linux, Web).
                </div>
            </div>


            <div className="flixerProjectObjective">
                <div className="flixerProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="flixerProjectObjectiveText">
                    La primera versión de esta aplicación se desarrollo para una asignatura de la universidad, pero una vez terminado el 
                    semestre pude completar el resto de lo que tenia en mente. <br/><br/>

                    Desarrollé una aplicación en Flutter para crear una biblioteca y buscador de películas. 
                    Comencé configurando mi entorno de desarrollo, instalando el SDK de Flutter y ajustando 
                    mi sistema operativo según las instrucciones proporcionadas en el sitio web oficial de Flutter.
                    Luego, creé un nuevo proyecto de Flutter utilizando el comando flutter create en mi terminal. 
                    Para el diseño de la interfaz de usuario (UI), utilicé widgets de Flutter para crear una interfaz 
                    intuitiva y atractiva, que incluyera elementos como barras de búsqueda, tarjetas de películas y 
                    detalles de películas. <br/> <br/>
                    
                    Para obtener la información de las películas, decidí utilizar la API de 
                    The Movie Database (TMDB), que ofrece una amplia gama de datos sobre películas, incluyendo detalles, 
                    actores, géneros y más. Utilicé el paquete http de Flutter para realizar solicitudes HTTP a la API 
                    de TMDB y obtener los datos necesarios para mi aplicación. Desarrollé clases de modelo en Flutter 
                    para representar los datos que recibí de la API, como información de películas, actores y géneros. 
                    Luego, implementé la lógica de la aplicación para realizar búsquedas de películas, 
                    filtrar resultados y mostrar detalles de películas utilizando los datos obtenidos de la API.
                    Utilicé el enrutamiento de Flutter para navegar entre diferentes pantallas de mi aplicación, 
                    como la pantalla de inicio, la pantalla de resultados de búsqueda y la pantalla de detalles de películas. <br/><br/>


                    Realicé pruebas exhaustivas para asegurarme de que todas las funciones de mi aplicación funcionaran 
                    correctamente y depuré cualquier problema que encontré. Para darle un toque personal, personalicé 
                    el estilo y la apariencia de mi aplicación utilizando temas, colores y fuentes personalizadas, 
                    con el objetivo de crear una experiencia visualmente atractiva para los usuarios.
                    Finalmente, compilé mi aplicación y la desplegué en dispositivos Android para que los 
                    usuarios pudieran disfrutar de mi biblioteca y buscador de películas.

                </div>
            </div>

            <div className="flixerProjectObjective">
                <div className="flixerProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="flixerProjectObjectiveText">
                    Esta aplicación me permitió conocer la herramienta de Flutter, la cual me gustó bastante debido a que permite generar una interfaz 
                    estéticamente preciosa y con un rendimiento decente.<br/><br/>

                    Actualmente la aplicación se encuentra en la Play Store y la utilizan personas de todo el mundo (lo sé por las ganancias que generar
                    la publicidad).



                </div>
            </div>

            <div className="videoContainer">
                    <video className="videoFlixer" src={flixerProjectVideo} autoPlay muted loop>

                    </video>
            </div>
            
        </div>
    )
}

export default FlixerProjectPage