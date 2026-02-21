import React from "react";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-12 items-center">

      {/* ===== Images Section ===== */}
      <div>
        {/* Big Image */}
        <img
          src="/images/image-product-1.jpg"
          alt="Sneaker"
          className="w-full rounded-2xl mb-5"
        />

        {/* Small Images */}
        <div className="flex gap-4">
          <img
            src="/images/image-product-1.jpg"
            className="w-20 h-20 rounded-xl object-cover border-2 border-orange-500 opacity-70"
            alt=""
          />
          <img
            src="/images/image-product-2.jpg"
            className="w-20 h-20 rounded-xl object-cover"
            alt=""
          />
          <img
            src="/images/image-product-3.jpg"
            className="w-20 h-20 rounded-xl object-cover"
            alt=""
          />
          <img
            src="/images/image-product-4.jpg"
            className="w-20 h-20 rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>

      {/* ===== Text Section ===== */}
      <div className="space-y-6">

        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">
          Sneaker Company
        </p>

        <h1 className="text-4xl font-bold leading-snug">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-gray-500 leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole.
        </p>

        {/* Price */}
        <div>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">$125.00</h2>
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold text-sm">
              50%
            </span>
          </div>
          <p className="text-gray-400 line-through">$250.00</p>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-lg font-bold shadow-md">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Main;