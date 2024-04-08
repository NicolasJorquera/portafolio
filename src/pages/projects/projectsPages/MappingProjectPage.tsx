
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/MappingProjectPage.css";
import mappingProject from '../../../assets/images/projects/mappingProject.png'


const project = {
    projectName: 'Mapeo tridimensional de entornos',
    imageFile: mappingProject,
    tags: ['ROS', 'Matlab', 'C', 'C++', 'Python'],
    projectPage: 'mapping'
}



function MappingProjectPage() {
    return(
        <div className="sectionsContainers">
            <div className="mappingProjectPageHeader">
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

export default MappingProjectPage