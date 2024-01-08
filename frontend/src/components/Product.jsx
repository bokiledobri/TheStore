import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded object-cover"
      />
      <Rating value={product.rating} text={product.numReviews + " reviews"} />
      <p className="self-start text-lg font-semibold text-stone-700 dark:text-stone-300">
        ${product.price}
      </p>
    </div>
  );
};

export default Product;
