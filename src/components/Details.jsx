import React from "react";

const Detail = ({ showPopup, setShowPopup }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <p>Item added to cart!</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default Detail;