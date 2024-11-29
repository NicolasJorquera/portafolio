


import "../../assets/resources/Resources.css"

import { useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import ResourceCard from "../../components/ResourceCard"


const resources: any[] = [

    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Tipos de algoritmos de ordenamiento de una lista.',
        resourceLink: 'https://colab.research.google.com/drive/1xQ7ZYLEYbQyzGORNPPAX2j8FIQ6JUpxV?usp=sharing'
    },
    {
        resourceName: 'Introducción a la algebra lineal',
        resourceDescription: 'Algebra lineal básica orientada a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/12zkQY-lgwX2gh_YUvZGqEF6Wioe63XJP?usp=sharing'
    },
    {
        resourceName: 'Algebra lineal',
        resourceDescription: 'Algebra lineal orientada a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/1k2eCGLE9FkazXtL_oDO6rKlRzNjhUJSX?usp=sharing'
    },
    {
        resourceName: 'Cálculo parte 1',
        resourceDescription: 'Primera parte de cálculo orientado a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/1famrubh_WfHa6WcRmihzQyJXfJuaKsma?usp=sharing'
    },
    {
        resourceName: 'Cálculo parte 2',
        resourceDescription: 'Segunda parte de cálculo orientado a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/1JJrvBy99pwliNm3tWoznQ5J8fRL4LEB0?usp=sharing'
    },
    {
        resourceName: 'Probabilidad',
        resourceDescription: 'Probabilidad orientada a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/18Q1oxi9C-xsl5u6s9JS8LSbMr7_3Ifun?usp=sharing'
    },
    {
        resourceName: 'Estadística',
        resourceDescription: 'Estadística orientada a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/1Fbu8BQ8qRjS0SJP5cMXYlmOeYH3q7t6K?usp=sharing'
    },
    {
        resourceName: 'Estructuras de datos',
        resourceDescription: 'Estructuras de datos orientadas a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/13udilvNEte-Zpm7Hvp6OuKFjzM6681w4?usp=sharing'
    },
    {
        resourceName: 'Optimización',
        resourceDescription: 'Optimización orientada a Machine Learning.',
        resourceLink: 'https://colab.research.google.com/drive/1xdF1TooofKQ8bIgXVrfmDd7EuDBSHNkU?usp=sharing'
    }
]

function Learning() {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;
    
        const containerCenter = container.scrollTop + container.clientHeight / 2;
        const items = container.querySelectorAll(".resourceItem");
    
        let closestItem: HTMLElement = items[0] as HTMLElement;
        let minDistance = Infinity;
    
        // Encuentra el item más cercano al centro
        items.forEach((item) => {
            const element = item as HTMLElement;
            const itemCenter = element.offsetTop + element.offsetHeight / 2;
            const distance = Math.abs(containerCenter - itemCenter);
    
            // Mantén la referencia del item más cercano al centro
            if (distance < minDistance) {
                minDistance = distance;
                closestItem = element;
            }
        });
    
        // Eliminar las clases previas de escala y fade
        items.forEach((item) => {
            const element = item as HTMLElement;
            element.classList.remove("scaled", "faded1", "faded2", "faded3");
        });
    
        // Añadir la clase "scaled" al item más cercano al centro
        if (closestItem) {
            closestItem.classList.add("scaled");
        }
    
        // Asignar las clases de fade a los demás ítems
        items.forEach((item) => {
            const element = item as HTMLElement;
            if (element === closestItem) return; 

            const itemCenter = element.offsetTop + element.offsetHeight / 2;
            const distance = Math.abs(containerCenter - itemCenter);
            const maxDistance = container.clientHeight / 2;
    
            if (distance < maxDistance / 3) {
                element.classList.add("faded1");
            } else if (distance < (maxDistance * 2) / 3) {
                element.classList.add("faded2");
            } else {
                element.classList.add("faded3");
            }
        });
    };
    
    


    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Establecer scroll inicial al centro
            container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
    
            // Escuchar el evento de scroll
            container.addEventListener("scroll", handleScroll);
            handleScroll(); // Aplicar efecto inicial
        }
        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="resourceSectionContainer" ref={containerRef}>
            {
                resources.map((resource, index) => (
                    <div className="resourceItem" key={index}>

                        <ResourceCard
                            resourceName={resource.resourceName}
                            resourceDescription={resource.resourceDescription}
                            resourceLink={resource.resourceLink}
                        />

                    </div>
                )
                )
            }

        </div>
    )
}

export default Learning;