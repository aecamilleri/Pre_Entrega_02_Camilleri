import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SpeciesDetail() {
  const { name } = useParams();
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    const fetchSpeciesDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        const data = await response.json();
        setSpeciesDetails(data);
      } catch (error) {
        console.error('Error al obtener los detalles de la especie:', error);
      }
    };

    fetchSpeciesDetails();
  }, [name]);

  if (!speciesDetails) {
    return <div>Cargando detalles de la especie...</div>;
  }

  return (
    <div className="container m-auto">
      <h2 className="p-8 text-5xl">Detalles de la Especie: {speciesDetails.name}</h2>
      <div className="grid grid-cols-4 gap-4 py-10">
        <div><b>ID:</b> {speciesDetails.id}</div>
        <div><b>Orden:</b> {speciesDetails.order}</div>
        <div><b>Tasa de género:</b> {speciesDetails.gender_rate}</div>
        <div><b>Tasa de captura:</b> {speciesDetails.capture_rate}</div>
        <div><b>Felicidad base:</b> {speciesDetails.base_happiness}</div>
        <div><b>Es bebé:</b> {speciesDetails.is_baby ? 'Sí' : 'No'}</div>
        <div><b>Es legendario:</b> {speciesDetails.is_legendary ? 'Sí' : 'No'}</div>
        <div><b>Es mítico:</b> {speciesDetails.is_mythical ? 'Sí' : 'No'}</div>
        <div><b>Contador de eclosión:</b> {speciesDetails.hatch_counter}</div>
        <div><b>Tiene diferencias de género:</b> {speciesDetails.has_gender_differences ? 'Sí' : 'No'}</div>
        <div><b>Puede cambiar de formas:</b> {speciesDetails.forms_switchable ? 'Sí' : 'No'}</div>
        <div><b>Tasa de crecimiento:</b> {speciesDetails.growth_rate.name}</div>
        <div><b>Números en la Pokédex:</b>
            <ul>
            {speciesDetails.pokedex_numbers.map((entry) => (
                <li key={entry.pokedex.name}>{entry.pokedex.name} - Entrada: {entry.entry_number}</li>
            ))}
            </ul>
        </div>
        <div><b>Grupos de huevos:</b>
            <ul>
            {speciesDetails.egg_groups.map((group) => (
                <li key={group.name}>{group.name}</li>
            ))}
            </ul>
        </div>
        <div><b>Color:</b> {speciesDetails.color.name}</div>
        <div><b>Forma:</b> {speciesDetails.shape.name}</div>
        <div><b>Evoluciona de:</b> {speciesDetails.evolves_from_species ? speciesDetails.evolves_from_species.name : 'Ninguna'}</div>
        <div><b>URL de cadena evolutiva:</b> {speciesDetails.evolution_chain.url}</div>
        <div><b>Hábitat:</b> {speciesDetails.habitat ? speciesDetails.habitat.name : 'Ninguno'}</div>
        <div><b>Generación:</b> {speciesDetails.generation.name}</div>
        <div><b>Nombres:</b>
            <ul>
            {speciesDetails.names.map((nameEntry) => (
                <li key={nameEntry.language.name}>{nameEntry.language.name}: {nameEntry.name}</li>
            ))}
            </ul>
        </div>
        <div><b>Descripciones de formas:</b>
            <ul>
            {speciesDetails.form_descriptions.map((formDesc) => (
                <li key={formDesc.language.name}>{formDesc.description}</li>
            ))}
            </ul>
        </div>
        <div><b>Géneros:</b>
            <ul>
            {speciesDetails.genera.map((genusEntry) => (
                <li key={genusEntry.language.name}>{genusEntry.language.name}: {genusEntry.genus}</li>
            ))}
            </ul>
        </div>
        <div><b>Variedades:</b>
            <ul>
            {speciesDetails.varieties.map((variety) => (
                <li key={variety.pokemon.name}>{variety.is_default ? 'Por defecto' : 'No por defecto'} - Pokemon: {variety.pokemon.name}</li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default SpeciesDetail;
