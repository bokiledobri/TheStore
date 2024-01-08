import React from "react";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="container grid grid-cols-1 gap-6 p-6 text-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
