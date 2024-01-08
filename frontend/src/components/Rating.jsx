import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="m-3 flex flex-row items-center">
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= value) {
          return <FaStar key={i} className="text-yellow-500" />;
        } else if (value > i - 1 && value < i) {
          return <FaStarHalfAlt key={i} className="text-yellow-500" />;
        } else {
          return <FaRegStar key={i} className="text-yellow-500" />;
        }
      })}
      <span className="ml-2 text-xs">{text && text}</span>
    </div>
  );
};

export default Rating;
