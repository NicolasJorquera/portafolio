import '../../assets/home/Projects.css'

import React from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import ProjectPreview from '../../components/ProjectPreview';

import flixerProject from '../../assets/images/projects/flixerProject.png'
import mappingProject from '../../assets/images/projects/mappingProject.png'
// import mappingPDF from '../assets/images/projects/M19615449-3.pdf'
import simulatorProject from '../../assets/images/projects/simulatorProject.png'
// import flappy2077Project from '../assets/images/projects/flappy2077Project.mp4'




const lastProjects = [
    {
        projectName: 'Flixer',
        imageFile: flixerProject,
        tags: ['Android', 'Flutter'],
        projectPage: 'flixer'
    },
    {
        projectName: 'Simulador de sistemas',
        imageFile: simulatorProject,
        tags: ['Typescript', 'React'],
        projectPage: 'simulator'
    }

]

function Projects() {

    return (
        <div className='projectsContainer'>
            <div className='projectsTitle'>
                Proyectos importantes
            </div>
            <div className='projectsRow'>
                {/* <ProjectPreview projectName='Flixer' imageFile={flixerProject} tags={['Dart', 'Android', 'Flutter']} />

                <ProjectPreview projectName='Mapeo tridimensional de entornos' imageFile={mappingProject} tags={['ROS', 'Shell', 'Linux', 'C', 'C++']} /> */}

                {
                    lastProjects.map((project)=>{
                        return(
                            <ProjectPreview projectName={project.projectName} imageFile={project.imageFile} tags={project.tags} projectPage={project.projectPage}/>
                        )
                    })
                }
            </div>


            {/* <div className='projectsRow'>

                <ProjectPreview projectName='Simulador de sistemas' imageFile={simulatorProject} tags={['Typescript', 'React']} />


                <ProjectPreview projectName='Flappy 2077' imageFile={simulatorProject} tags={['Unity', 'Android', 'C', 'C++']} />

            </div> */}
            
        </div>

        
            
    )
}

export default Projects;