// ItemCount.js
import React, { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p className='text-4xl font-bold my-5'>Cantidad: {count}</p>
      <button className='uppercase font-semibold w-10 px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest' onClick={handleDecrement}>-</button>
      <button className='uppercase font-semibold w-10 px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest' onClick={handleIncrement}>+</button>
      <button className='uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest' onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
