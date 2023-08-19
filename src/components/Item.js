import React from 'react';

const Item = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default Item;
