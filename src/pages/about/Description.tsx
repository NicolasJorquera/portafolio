
import { Button } from 'react-bootstrap'
import '../../assets/about/Description.css'
import curriculum from '../../assets/images/projects/Nicolas_Curriculum.pdf'


function Description() {
    return (
        <div className="descriptionContainerAbout">
            {/* <div className='descriptionTitle'>
                Sobre mi
            </div> */}

            <div className='descriptionSubtitle'>
                <div className='nameAndCareer'>
                    <div className='nameAbout'>
                        Nicolás Jorquera 
                    </div>
                    <div className='careerAbout'>
                        Ingeniero Civil Electrónico
                    </div>
                </div>

                <div>
                    <a href={curriculum} download="Curriculum_Nicolas_Jorquera">
                        <Button className='resumeButton' variant='white' size='lg'>
                            Currículum
                        </Button>
                    </a>
                    
                </div>
                
            </div>

            <div className='descriptionAbout'>
                Como ingeniero y desarrollador, me gusta crear herramientas o servicios para empresas que les ayude a destacarse del resto.
                Tengo un gran interés en crear herramientas desde cero, transformando una simple idea en algo concreto, útil y eficiente.
                Mi capacidad de adaptabilidad me permite trabajar en distintos proyectos, desde robots, microcontroladores, sensores y distintos
                aparatos de hardware, hasta proyectos de alto nivel en software como páginas web, aplicaciones móviles y videojuegos. <br/><br/>

                Compartir mi conocimiento y experiencia con otros me satisface bastante. Me agrada educar a otros sobre tecnología y como aplicarlo
                a diferentes proyectos. Esta es una de las razones de porque me gusta el trabajo en equipo, permite dar y recibir conocimiento.<br/><br/>

                Aparte del trabajo, tengo un gran interés por el deporte. Me gusta andar en bicicleta, jugar tenis, ultimate frisbee, 
                entre otras actividades.


            </div>
        </div>
    )
}

export default Description