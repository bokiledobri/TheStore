import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-6 w-full bg-stone-300 py-2 text-sm text-stone-700 dark:bg-stone-700 dark:text-stone-300">
      <p className="text-center">Copyright © {currentYear} The Store</p>
    </footer>
  );
};

export default Footer;
