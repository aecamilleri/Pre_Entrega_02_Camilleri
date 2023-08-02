// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const mockItems = [
    {
      id: 1,
      title: 'Producto 1',
      price: 10,
      pictureUrl: 'https://black-mamba-shirts.netlify.app/img/remeras/Shirt01.webp',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 20,
      pictureUrl: 'https://black-mamba-shirts.netlify.app/img/remeras/Shirt02.webp',
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 30,
      pictureUrl: 'https://black-mamba-shirts.netlify.app/img/remeras/Shirt03.webp',
    },
  ];

  useEffect(() => {
    // Emulación de retraso de red con setTimeout
    setTimeout(() => {
      setItems(mockItems);
    }, 2000);
  }, []);

  return (
    <div>
      <h2 className='p-8 text-5xl'>Lista de Productos</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 m-4">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-700">Precio: ${item.price}</p>
            <img src={item.pictureUrl} alt={item.title} className="max-w-xs mx-auto mt-2" />
            <ItemCount
              onAdd={(count) => alert(`Se agregaron ${count} ítems al carrito.`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
