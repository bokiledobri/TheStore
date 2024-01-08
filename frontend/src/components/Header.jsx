import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header
      className="fixed top-0 w-full bg-sky-200 py-3 
    pl-6 pr-2 text-black dark:bg-sky-800 dark:text-white"
    >
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-semibold">
          TheStore
        </Link>
        <div className="flex items-center">
          <a href="/cart" className="mr-6 flex items-center gap-2">
            <FaShoppingCart />
            <span className="hidden md:inline">Cart</span>
          </a>
          <a href="/login" className="mr-6 flex items-center gap-2">
            <FaUser />
            <span className="hidden md:inline">Login</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
