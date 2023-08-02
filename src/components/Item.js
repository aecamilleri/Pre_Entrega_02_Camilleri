// Item.js
import React from 'react';

const Item = ({ item }) => {
    return (
    <div className="border p-4 m-4">
        <h3 className="text-2xl font-bold text-center p-2">{item.title}</h3>
        <img src={item.pictureUrl} alt={item.title} className="max-w-xs mx-auto mt-2" />
        <p className="text-gray-700 text-center text-lg p-3">Precio: ${item.price}</p>
    </div>
    );
};

export default Item;
