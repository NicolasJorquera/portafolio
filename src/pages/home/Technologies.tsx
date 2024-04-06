

import '../../assets/home/Technologies.css'

import Image from 'react-bootstrap/Image';

import reactLogo from '../../assets/images/technologies/reactLogo.png'
import javascriptLogo from '../../assets/images/technologies/javascriptLogo.jpg'
import cLogo from '../../assets/images/technologies/cLogo.png'
import rosLogo from '../../assets/images/technologies/rosLogo.png'
import cppLogo from '../../assets/images/technologies/cppLogo.png'
import pythonLogo from '../../assets/images/technologies/pythonLogo.png'
import unityLogo from '../../assets/images/technologies/unityLogo.png'
import flutterLogo from '../../assets/images/technologies/flutterLogo.png'
import dartLogo from '../../assets/images/technologies/dartLogo.png'
import androidLogo from '../../assets/images/technologies/androidLogo.png'
import React from 'react';

function Technologies() {

    return(
        <div className='technologiesContainer'>
            <div className='technologiesTitle'>
                Tecnologías
            </div>
            <div className='technologiesRow'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={reactLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            React
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={javascriptLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            JavaScript
                        </div>
                    </div>
                </div>
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={cLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            C
                        </div>
                    </div>
                </div>
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={cppLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            C++
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={pythonLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            Python
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='technologiesRow'>
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={unityLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            Unity
                        </div>
                    </div>
                </div>
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={dartLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            Dart
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={androidLogo} roundedCircle/>
                        </div>
                        <div className="flip-card-back">
                            Android
                        </div>
                    </div>
                </div>
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={flutterLogo} roundedCircle/>  
                        </div>
                        <div className="flip-card-back">
                            Flutter
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image className='imageSize' src={rosLogo} roundedCircle/> 
                        </div>
                        <div className="flip-card-back">
                            ROS
                        </div>
                    </div>
                </div>
                
            </div>
                
            
        </div>
    )
}


export default Technologies;