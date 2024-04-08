
import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';




interface projectPreviewProps {
    projectName: string,
    imageFile: string,
    tags: string[],
    projectPage: string

}

function ProjectPreview(props: projectPreviewProps) {
    

    return(
        <div className='projectContainer'>
            <a href={'/projects/' + props.projectPage}>

            
            <Image className='projectImage' src={props.imageFile} rounded/>
            <div className='projectDescription'>
                <div className='projectTitle'>
                    {props.projectName}
                </div>
                <div className='projectTags'>
                    {
                        props.tags.map((tag) => {
                            return(
                                <Button variant='outline-secondary' className='projectTag'>
                                    {tag}
                                </Button>
                            )
                        })
                    }
                    
                </div>
            </div>
            
            {/* Aplicación de biblioteca de películas y series.
            Tiene funcionalidades como buscar entre peliculas, series, personas o todas las anteriores al mismo tiempo. Recomienda películas y series que sean populares actualmente, y permite ajustar algunas configuraciones como idioma, región y tema (oscuro o claro).
            Toda la información la obtiene de la API TMDB.
            La aplicación se encuentra disponible solo en la Play Store. */}
            </a>
        </div>
    )
}

export default ProjectPreview;