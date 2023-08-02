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
        <p>Cantidad: {count}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
