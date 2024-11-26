
import React from 'react';
import Button from 'react-bootstrap/Button';




interface projectPreviewProps {
    resourceName: string,
    resourceDescription: string,
    resourceLink: string,
    resourceColorCard: string

}

function ResourceCard(props: projectPreviewProps) {


    return (
        <div className='resourceCard' style={{borderColor: props.resourceColorCard}} /*style={{ backgroundColor: props.resourceColorCard }}*/>


            <div className='resourceCardContent'>
                <div className='resourceCardTitle'>
                    {props.resourceName}
                </div>
                <div className='resourceCardInfo'>
                    <div className='resourceCardDescription'>
                        {props.resourceDescription}
                    </div>
                    <a href={props.resourceLink} target='_blank' rel="noreferrer">
                        <Button variant='white' onClick={() => { }}>Entrar</Button>
                    </a>
                </div>
            </div>


        </div >
    )
}

export default ResourceCard;