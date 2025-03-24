import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
  };

  return (
    <div>
      <h2>Product Info</h2>
      <p>Name: {product.name}</p>
      <p>Price : ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductInfo;
