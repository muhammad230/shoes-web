import React from "react";

const Detail = ({ showPopup, setShowPopup, product, price, count, img }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 animate-scale">
        
        <h2 className="text-xl font-bold mb-4">Item Added To Cart ✅</h2>

        <div className="flex gap-4 items-center">
          <img src={img} className="w-16 h-16 rounded" alt="" />
          
          <div>
            <p className="font-bold">{product}</p>
            <p className="text-gray-500">
              ${price} × {count} = <b>${price * count}</b>
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowPopup(false)}
          className="mt-5 bg-orange-500 text-white px-4 py-2 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Detail;