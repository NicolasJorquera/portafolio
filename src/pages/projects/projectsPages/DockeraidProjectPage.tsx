
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/DockeraidProjectPage.css";
import dockeraidProject from '../../../assets/images/projects/dockeraidProject.png'



const project = {
    projectName: 'Dockeraid',
    imageFile: dockeraidProject,
    tags: ['Typescript', 'React', 'Docker'],
    projectPage: 'dockeraid'
}



function DockeraidProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="dockeraidProjectPageHeader">
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
                <div className="projectLinks">
                    <Button variant="white" href="https://sim.assayware.com/" target="_blank" className="projectLink">
                        Visitar página
                    </Button>
                </div>
            </div>
            
            <div className="projectImageContainer">
                <Image className="projectImage" src={project.imageFile} rounded>

                </Image>
            </div>
            
        </div>
    )
}

export default DockeraidProjectPage