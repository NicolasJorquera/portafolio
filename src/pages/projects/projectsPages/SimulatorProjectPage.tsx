
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/SimulatorProjectPage.css";
import simulatorProject from '../../../assets/images/projects/simulatorProject.png'



const project = {
    projectName: 'Simulador de sistemas',
    imageFile: simulatorProject,
    tags: ['Typescript', 'React'],
    projectPage: 'simulator'
}



function SimulatorProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="simulatorProjectPageHeader">
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

export default SimulatorProjectPage