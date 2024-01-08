import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  return (
    <div className="mt-6 grid w-full gap-4 px-3 md:grid-cols-12">
      <img
        src={product.image}
        alt={product.name}
        className="rounded object-cover md:col-span-5"
      />
      <div className="flex flex-col items-start justify-between gap-6 rounded p-3 shadow-md md:col-span-4 md:p-6">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p>{product.description}</p>
        <Rating value={product.rating} text={product.numReviews + " reviews"} />
        <h4 className="hidden text-lg font-semibold text-stone-700 md:block dark:text-stone-300">
          ${product.price}
        </h4>
      </div>
      <div className="mt-6 flex flex-col items-center justify-start gap-1  rounded md:col-span-3">
        <h4 className="w-full border-2 border-black px-4 py-2 text-lg font-semibold text-stone-700  dark:text-stone-300">
          ${product.price}
        </h4>
        <p
          className={
            "w-full border-2 px-4 py-2 text-stone-700 dark:text-stone-300" +
            (product.countInStock > 0
              ? " border-green-500 text-green-500"
              : " border-red-500 text-red-500")
          }
        >
          {product.countInStock > 0 ? "In stock" : "Out of stock"}
        </p>
        <button
          className={
            "w-full rounded bg-sky-500 px-4 py-2 text-white" +
            (product.countInStock === 0
              ? " cursor-not-allowed opacity-50"
              : " hover:bg-sky-600")
          }
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductScreen;
