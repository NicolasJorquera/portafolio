
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/Flappy2077ProjectPage.css";
import flappy2077Project from '../../../assets/images/projects/flappy2077Project.png'


const project = {
    projectName: 'Flappy 2077',
    imageFile: flappy2077Project,
    tags: ['Typescript', 'React'],
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

export default Flappy2077ProjectPage