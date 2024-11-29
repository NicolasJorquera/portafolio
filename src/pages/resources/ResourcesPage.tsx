import { useState } from "react";
import "../../assets/resources/Resources.css";

import Learning from "./Learning";
import Media from "./Media";

function ResourcesPage() {
    const [selectedResource, setSelectedResource] = useState<string>("learning");
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const handleChangeResource = (resource: string) => {
        if (resource !== selectedResource) {
            setIsTransitioning(true); // Activar la animación de ocultar
            setTimeout(() => {
                setSelectedResource(resource); // Cambiar el contenido
                setIsTransitioning(false); // Reactivar la animación de mostrar
            }, 300); // El tiempo debe coincidir con la duración de la transición en CSS
        }
    };

    return (
        <div className="resourcesSectionContainer">
            <div className="columnTitleResources">
                <div
                    className={`columnTitleResourcesText ${selectedResource === 'learning' ? 'columnTitleResourcesTextSelected' : ''}`}
                    onClick={() => handleChangeResource('learning')}
                >
                    Material de estudio
                </div>
                <div
                    className={`columnTitleResourcesText ${selectedResource === 'media' ? 'columnTitleResourcesTextSelected' : ''}`}
                    onClick={() => handleChangeResource('media')}
                >
                    Media
                </div>
            </div>
            <div className={`columnResources ${isTransitioning ? 'hidden' : 'visible'}`}>
                {selectedResource === 'learning' ? <Learning /> : <Media />}
            </div>
        </div>
    );
}

export default ResourcesPage;