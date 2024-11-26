


import "../../assets/resources/Resources.css"

import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import ResourceCard from "../../components/ResourceCard"


const resources: any[] = [
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónico.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing',
        resourceColorCard: 'white'
    },
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónico.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing',
        resourceColorCard: 'white'
    },
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónico.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing',
        resourceColorCard: 'white'
    },
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónico.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing',
        resourceColorCard: '#FFB200'
    },
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónico.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing',
        resourceColorCard: 'white'
    },
]



function Media() {

    return (
        <div className="resourceSectionContainer">
            <div className="resourceSectionTitle">
                Media
            </div>

            <div className="resourceColumn">
                {
                    resources.map((resource) => {
                        return (
                            <ResourceCard
                                resourceName={resource.resourceName}
                                resourceDescription={resource.resourceDescription}
                                resourceLink={resource.resourceLink}
                                resourceColorCard= {resource.resourceColorCard}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Media;