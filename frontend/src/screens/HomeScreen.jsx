import React from "react";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="container grid grid-cols-1 gap-6 p-6 text-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product._id} className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full rounded object-cover"
            />
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
