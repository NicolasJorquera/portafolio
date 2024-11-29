


import "../../assets/resources/Resources.css"

import { useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import ResourceCard from "../../components/ResourceCard"


const resources: any[] = [
    {
        resourceName: 'Algoritmo Bug para planificación de trayectorias',
        resourceDescription: 'Simulación de un robot ocupando el algoritmo bug para llegar al punto final.',
        resourceLink: 'https://www.youtube.com/playlist?list=PLJ2qBH-Q0nmlRSAX4Ra2xzhF8KIj2gYbp'
    },
    {
        resourceName: 'Ceremonia de titulación',
        resourceDescription: 'Ceremonia en la que se obtiene el grado de Ingeniero Civil Electrónica.',
        resourceLink: ''
    }
]



function Media() {

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

export default Media;