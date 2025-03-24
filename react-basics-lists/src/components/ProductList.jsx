import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: 499 },
    { id: 2, name: "Laptop", price: 699 },
    { id: 3, name: "HeadPhone", price: 199 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>Name : {product.name}</li>
            <li>Price : ${product.price}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
