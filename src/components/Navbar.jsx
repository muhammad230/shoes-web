import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-5 flex justify-between items-center border-b border-[#ddd]">
        <div className="text-black font-bold text-3xl">Sneakers</div>
        <ul className="flex space-x-4 hover:space-x-6 transition-all duration-300 text-xl gap-4">
          <li><a href="#" className="text-gray-800 hover:text-black hover:border-b-2 border-orange-500">Collection</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black hover:border-b-2 border-orange-500">Men</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black hover:border-b-2 border-orange-500">Women</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black hover:border-b-2 border-orange-500">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black hover:border-b-2 border-orange-500">Contact</a></li>
        </ul>
        <div className="h-8 w-8 cursor-pointer">
          <img src="/images/shopping-cart-icon-free-vector.jpg" alt="" />
        </div>
      
    </nav>
  );
};

export default Navbar;
