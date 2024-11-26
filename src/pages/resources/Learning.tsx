


import "../../assets/resources/Resources.css"

import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import ResourceCard from "../../components/ResourceCard"


const resources: any[] = [

    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Algoritmos de ordenamiento de arreglos, listas, etc. (Python).',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Algoritmos de ordenamiento de arreglos, listas, etc. (Python).',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Algoritmos de ordenamiento de arreglos, listas, etc. (Python).',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Algoritmos de ordenamiento de arreglos, listas, etc. (Python).',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Algoritmos de ordenamiento de arreglos, listas, etc. (Python).',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
]



function Learning() {

    return (
        <div className="resourceSectionContainer">
            <div className="resourceSectionTitle">
                Material de estudio
            </div>

            <div className="resourceColumn">
                {
                    resources.map((resource) => {
                        return (
                            <ResourceCard
                                resourceName={resource.resourceName}
                                resourceDescription={resource.resourceDescription}
                                resourceLink={resource.resourceLink}
                                resourceColorCard='lightblue'
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Learning;