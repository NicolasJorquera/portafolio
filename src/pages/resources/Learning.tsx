


import "../../assets/resources/Resources.css"

import { useEffect, useRef} from "react"
import ResourceCard from "../../components/ResourceCard"


const resources: any[] = [
    {
        resourceName: 'Algoritmos de ordenamiento',
        resourceDescription: 'Tipos de algoritmos de ordenamiento de una lista.',
        resourceLink: 'https://github.com/NicolasJorquera/sorting-algorithms/tree/main'
    },
    {
        resourceName: 'ML-Foundations',
        resourceDescription: 'Fundamentos del machine learning.',
        resourceLink: 'https://github.com/NicolasJorquera/ML-Foundations/tree/main'
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
            closestItem.classList.remove("faded1", "faded2", "faded3");
        }
    
        // Asignar las clases de fade a los demás ítems
        items.forEach((item) => {
            const element = item as HTMLElement;
            if (element === closestItem) return;

            const itemCenter = element.offsetTop + element.offsetHeight / 2;
            const distance = Math.abs(containerCenter - itemCenter);
            const maxDistance = container.clientHeight / 2;

            if (distance < maxDistance / 2) {
                element.classList.add("faded1");
            } else if (distance < (maxDistance * 2) / 2) {
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