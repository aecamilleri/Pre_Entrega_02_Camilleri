import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import PropGreeting from './PropGreeting';

const ItemDetailContainer = () => {
  const { id } = useParams(); 

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();

        const selectedPokemon = {
          id: pokemonData.id,
          title: pokemonData.name,
          price: Math.floor(Math.random() * 100),
          details: `Detalles del ${pokemonData.name}`,
          pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
          moves: pokemonData.moves.map((move) => move.move.name).slice(0, 3),
          abilities: pokemonData.abilities.map((ability) => ability.ability.name).slice(0, 3),
        };

        setItem(selectedPokemon);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [id]); 

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container m-auto">
      <h2 className='p-8 text-5xl'>Detalle del Producto</h2>
      <PropGreeting greeting="¡Bienvenido a los detalles del producto!" />
      <div className="w-full">
        <div className="flex flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img src={item.pictureUrl} alt={item.title} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
              <h3 className="text-2xl font-bold text-center p-2 bg-black text-white">{item.title}</h3>
              <div className='flex flex-col items-start p-5'>
                <p className="text-gray-700 text-center text-lg"><b>Movimientos:</b></p>
                <p>{item.moves.join(', ')}</p>
              </div>
              <div className='flex flex-col items-start p-5'>
                <p className="text-gray-700 text-center text-lg"><b>Habilidades:</b></p>
                <p>{item.abilities.join(', ')}</p>
              </div>
              <div className='flex flex-col items-start p-5'>
                <p className="text-gray-700 text-center text-lg">{item.details}</p>
              </div>
              <div className='flex flex-col items-start p-5'>
                <p className="text-gray-700 text-center text-lg"><b>Precio:</b> <span className="text-4xl">${item.price}</span></p>
              </div>
        </div>
        <ItemCount className="flex justify-items-end" initial={1} stock={5} onAdd={(count) => alert(`Se agregaron ${count} ítems al carrito.`)} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
