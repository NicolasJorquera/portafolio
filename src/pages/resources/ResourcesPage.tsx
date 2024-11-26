import "../../assets/resources/Resources.css"

import Learning from "./Learning";
import Media from "./Media";

function ResourcesPage() {
    return (
        <div className="resourcesSectionContainer">
            <div className="columnResources">
                <Learning />
                <Media />
                <Learning />
            </div>

        </div>
    )
}

export default ResourcesPage;