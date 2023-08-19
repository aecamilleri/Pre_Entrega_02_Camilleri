// CategorySpecies.js
import React, { useState, useEffect } from 'react';
import PropGreeting from './PropGreeting';

function CategorySpecies() {
  const [speciesList, setSpeciesList] = useState([]);

  useEffect(() => {
    const fetchSpeciesList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
        const data = await response.json();
        setSpeciesList(data.results);
      } catch (error) {
        console.error('Error al obtener la lista de especies:', error);
      }
    };

    fetchSpeciesList();
  }, []);

  return (
    <div className="container m-auto">
      <h2 className='p-8 text-5xl'>Especies de Pokémon</h2>
      <PropGreeting greeting="¡Todas las especies que existen!" />
      <div className="grid grid-cols-4 gap-4 py-10">
        {speciesList.map((species) => (
          <a href={`/category-species/${species.name}`}>
            <div className='p-10 border rounded-sm w-full text-center' key={species.name}>
            {species.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CategorySpecies;
