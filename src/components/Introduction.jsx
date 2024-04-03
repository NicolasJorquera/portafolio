import '../assets/Introduction.css'
import Image from 'react-bootstrap/Image';

import profilePicture from '../assets/profilePicture.jpg'

function Introduction() {
    return (
        <div className='introductionContainer'>
            <div className='profilePicture'>
                <Image src={profilePicture}  rounded />
            </div>
            <div className='description'>
                <div className='name'>
                    Nicolas Jorquera Martínez
                </div>
                <div className='degree'>
                    Ingeniero Civil Electrónico, mención Computadores
                </div>
                <div className='university'>
                    Universidad Técnica Federíco Santa María
                </div>
            </div>
            
        </div>
    )
}

export default Introduction;