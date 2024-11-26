
import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';




interface projectPreviewProps {
    resourceName: string,
    resourceDescription: string,
    resourceLink: string

}

function ResourceCard(props: projectPreviewProps) {


    return (
        <div className='projectContainer'>
            <a href={props.resourceLink} target='_blank' rel="noreferrer">

                <div className='projectDescription'>
                    <div className='projectTitle'>
                        {props.resourceName}
                    </div>
                    <div className='resourceDescription'>
                        {props.resourceDescription}
                    </div>
                </div>

            </a>
        </div>
    )
}

export default ResourceCard;