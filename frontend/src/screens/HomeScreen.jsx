import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="container grid grid-cols-1 gap-6 p-6 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
