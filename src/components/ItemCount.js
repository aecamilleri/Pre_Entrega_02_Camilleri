import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <div className='flex justify-center flex-wrap content-between pt-3'>
        <button className='uppercase text-xs w-10 border-2 border-yellow-500 rounded-md tracking-widest' onClick={handleDecrement}>-</button>
        <p className='text-xl font-bold mx-3 py-2'>{count}</p>
        <button className='uppercase text-xs w-10 border-2 border-yellow-500 rounded-md tracking-widest' onClick={handleIncrement}>+</button>
        <button className='uppercase text-xs px-3 py-0 ml-2 border-2 border-yellow-500 rounded-md tracking-widest' onClick={handleAddToCart}>Agregar al carrito</button>
        <p className='text-2xl font-bold text-center p-4 w-full'>Stock: {stock}</p>
      </div>
    </div>
  );
};

export default ItemCount;
