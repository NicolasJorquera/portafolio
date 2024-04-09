


import "../../assets/projects/Projects.css"

import flixerProject from '../../assets/images/projects/flixerProject.png'
import mappingProject from '../../assets/images/projects/mappingProject.png'
// import mappingPDF from '../assets/images/projects/M19615449-3.pdf'
import simulatorProject from '../../assets/images/projects/simulatorProject.png'
import { useEffect, useMemo, useState } from "react"
import { Button } from "react-bootstrap"
import ProjectPreview from "../../components/ProjectPreview"
import flappy2077Project from '../../assets/images/projects/flappy2077Project.png'
import dockeraidProject from '../../assets/images/projects/dockeraidProject.png'


const projects: any[] = [
    
    {
        projectName: 'Simulador de sistemas',
        imageFile: simulatorProject,
        tags: ['Typescript', 'React'],
        projectPage: 'simulator'
    },
    {
        projectName: 'Flappy 2077',
        imageFile: flappy2077Project,
        tags: ['Unity', 'Android', 'C', 'C++'],
        projectPage: 'flappy2077'
    },
    {
        projectName: 'Flixer',
        imageFile: flixerProject,
        tags: ['Android', 'Flutter'],
        projectPage: 'flixer'
    },
    {
        projectName: 'Mapeo tridimensional de entornos',
        imageFile: mappingProject,
        tags: ['ROS', 'Matlab', 'C', 'C++', 'Python'],
        projectPage: 'mapping'
    },
    {
        projectName: 'Dockeraid',
        imageFile: dockeraidProject,
        tags: ['Typescript', 'React', 'Docker', 'AWS'],
        projectPage: 'dockeraid'
    }

]



function Projects() {
    const [technologies, setTechnologies] = useState<string[]>([])
    const [technologiesSelected, setTechnologiesSelected] = useState<string[]>(['All'])
    const [projectsFiltered, setProjectsFiltered] = useState<any[]>(projects)

    const getTechnologies = () => {
        let techs: string[] = ['All']

        projects.forEach(project => {
            project.tags.forEach((tag) => {
                if (!techs.includes(tag)) {
                    techs.push(tag)
                }
            });
        });

        setTechnologies(techs)
    }

    useEffect(()=>{
        getTechnologies()
    }, [])

    useEffect(()=>{
        filterProjects()
    }, [technologiesSelected])


    const filterProjects = () => {
        let pjts: any[] = []


        
        if (technologiesSelected[0] == 'All') {
            pjts = projects
        }else{
            projects.forEach((project)=>{
                technologiesSelected.every((tech)=>{
                    if (project.tags.includes(tech)) {
                        pjts.push(project)
                        return false
                    }
                    return true
                })
            })
        }

        

        setProjectsFiltered(pjts)
    }


    const handleTechTagClick = (t: string) => {
        let tech = [...technologiesSelected]

        if (tech.includes(t)) {
            let indexToDelete = tech.indexOf(t)
            tech.splice(indexToDelete, 1)
        }else{
            if (t == 'All') {
                tech = ['All']
            }else{
                tech.push(t)
            }
            
        }

        if (tech.length > 1) {
            let indexToDelete = tech.indexOf('All')
            if (indexToDelete != -1) {
                tech.splice(indexToDelete, 1)
            }
            
        }else if( tech.length == 0) {
            tech.push('All')
        }

        

        setTechnologiesSelected(tech)

        

    }



    return(
        <div className="projectsSectionContainer">
            <div className="projectsFilter">
                <div className="filterName">
                    Tecnología:
                </div>
                <div className="filterTags">
                    {
                        technologies.map((tech) => {
                            return(
                                <Button onClick={()=>handleTechTagClick(tech)}  variant= {technologiesSelected.includes(tech)? 'secondary' : 'outline-secondary'} className='projectTagFilter'>
                                    {tech}
                                </Button>
                            )
                        }) 
                    }
                </div>

            </div>

            <div className="projectsFiltered">
                {
                    projectsFiltered.map((project)=>{
                        return(
                            <ProjectPreview projectName={project.projectName} imageFile={project.imageFile} tags={project.tags} projectPage={project.projectPage}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Projects;