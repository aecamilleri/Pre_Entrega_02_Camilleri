import React, { useState, useEffect } from 'react';
import ToggleDetails from './ItemDetails';
import ItemCount from './ItemCount';
import PropGreeting from './PropGreeting';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=8');
        const data = await response.json();

        const pokemonList = await Promise.all(
          data.results.map(async (pokemon, index) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();

            return {
              id: index + 1,
              title: pokemonData.name,
              price: Math.floor(Math.random() * 100),
              details: `Detalles del ${pokemonData.name}`,
              pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
              moves: pokemonData.moves.map((move) => move.move.name).slice(0, 3),
              abilities: pokemonData.abilities.map((ability) => ability.ability.name).slice(0, 3),
            };
          })
        );

        setItems(pokemonList);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container m-auto">
      <h2 className='p-8 text-5xl'>Lista de Productos</h2>
      <PropGreeting greeting="¡Bienvenido a mi tienda en línea!" />
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 m-4">
            <ToggleDetails item={item} />
            <ItemCount initial={1} stock={5} onAdd={(count) => alert(`Se agregaron ${count} ítems al carrito.`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
