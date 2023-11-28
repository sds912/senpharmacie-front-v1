import React, { useState } from 'react';
import './RegionButton.css';

const regionsData = [
    { id: 1, name: 'Dakar' },
    { id: 2, name: 'Thiès' },
    { id: 3, name: 'Diourbel' },
    { id: 4, name: 'Fatick' },
    { id: 5, name: 'Kaolack' },
    { id: 6, name: 'Kolda' },
    { id: 7, name: 'Louga' },
    { id: 8, name: 'Matam' },
    { id: 9, name: 'Saint-Louis' },
    { id: 10, name: 'Sédhiou' },
    { id: 11, name: 'Tambacounda' },
    { id: 12, name: 'Kaffrine' },
    { id: 13, name: 'Kédougou' },
    // { id: 14, name: 'Ziguinchor' }
    
   
  ];
  

const RegionButton = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  const handleRegionClick = (regionId) => {
    setActiveRegion(regionId);
    // Vous pouvez également mettre en œuvre la logique de filtrage ici
    // en fonction de la région sélectionnée.
  };

  return (
    <div  >
    <div className="btn-group button">
      {regionsData.map((region) => (
        <button
          key={region.id}
          type="button"
          className={`custom-btn ${activeRegion === region.id ? 'active' : 'inactive'}`}
          onClick={() => handleRegionClick(region.id)}
        >
          {region.name}
        </button>
      ))}
    </div>
  
    {/* {activeRegion && (
      <div>
        <h2>Contenu de la région sélectionnée ({regionsData.find((r) => r.id === activeRegion)?.name})</h2>
      </div>
    )} */}
  </div>
  
  
  );
};

export default RegionButton;
