import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5 flex justify-between items-center">
        <div className="text-white font-bold">Sneakers</div>
        <ul className="flex space-x-4 hover:space-x-6 transition-all duration-300">
          <li><a href="#" className="text-white hover:text-gray-300 hover:border-b-2 border-orange-500">Collection</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 hover:border-b-2 border-orange-500">Men</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 hover:border-b-2 border-orange-500">Women</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 hover:border-b-2 border-orange-500">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 hover:border-b-2 border-orange-500">Contact</a></li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
