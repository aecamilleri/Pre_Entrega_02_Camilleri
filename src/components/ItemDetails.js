import React, { useState } from 'react';
import { NavLink } from "react-router-dom"

const ToggleDetails = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex justify-center flex-wrap content-between pt-3">
      <img src={item.pictureUrl} alt={item.title} className="w-full mx-auto mt-2 " />
      <h3 className="text-2xl font-bold text-center p-2 w-full">{item.title}</h3>
      <button
        className="uppercase font-semibold px-3 py-2 m-2 border-2 border-yellow-500 rounded-md tracking-widest"
        onClick={toggleDetails}
      >
        {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles'}
      </button>
      {showDetails && (
        <div>
          <p className="text-gray-700 text-center text-lg p-3">
            <b>Movimientos:</b> {item.moves.join(', ')}
          </p>
          <p className="text-gray-700 text-center text-lg p-3">
            <b>Habilidades:</b> {item.abilities.join(', ')}
          </p>
          <p className="text-gray-700 text-center text-lg p-3">{item.details}</p>
          <p className="text-gray-700 text-center text-lg p-3">
            <b>Precio:</b> <span className="text-4xl">${item.price}</span>
          </p>
          <p className="text-gray-700 text-center text-lg p-3">
          <NavLink to={`/item/${item.id}`}><b>Mas Detalles</b></NavLink>
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleDetails;
