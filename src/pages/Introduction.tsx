import '../assets/Introduction.css'
import Image from 'react-bootstrap/Image';

import profilePicture from '../assets/profilePicture.jpg'
import { Button } from 'react-bootstrap';
import React from 'react';

function Introduction() {
    return (
        <div>
            <div className='nameAndShortDescription'>
                <div className='nameAndLastName'>
                    <div className='name'>
                        Nicolás
                    </div>
                    <div className='lastName'>
                        Jorquera
                    </div>
                </div>
                
                <div className='shortDescription'>
                    Ingeniero y desarrollador con experiencia en hardware y software.
                </div>
                 
            </div>
            <div className='aboutMeContainer'>
                <div className='profilePicture'>
                    <Image src={profilePicture}  rounded />
                </div>
                <div className='descriptionContainer'>
                    <div className='name'>
                        Nicolás Jorquera Martínez
                    </div>
                    <div className='degree'>
                        Ingeniero Civil Electrónico, mención Computadores
                    </div>
                    <div className='description'>
                    Soy un ingeniero y desarrollador capacitado para liderar proyectos en los ámbitos 
                    de la robótica, la electrónica y el desarrollo de software. 
                    Mi versatilidad me permite abordar desde la conceptualización hasta la implementación, 
                    garantizando soluciones integrales y eficientes en cada etapa del proceso.
                    </div>
                    <Button size='lg' href='/about'>
                        Sobre mi
                    </Button>
                </div>
                
            </div>
        </div>
        
    )
}

export default Introduction;