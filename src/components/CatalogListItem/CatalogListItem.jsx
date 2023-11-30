import React from "react";

const CatalogListItem = ({ car }) => {
    
    return (
        <li>
            {car.model}
        </li>
    )
}

export default CatalogListItem