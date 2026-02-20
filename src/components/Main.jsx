import React from 'react'

const Main = () => {
  return (
    <div className="flex flex-row p-10 gap-10">

      {/* Images Section */}
      <div className="flex flex-col w-1/2">

        {/* Large Image */}
        <img 
          src="/images/image-product-1.jpg" 
          className="w-full max-w-[500px] rounded-2xl mb-5" 
          alt="Main Product" 
        />

        {/* Small Images */}
        <div className="flex gap-5">
          <img src="/images/image-product-1.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-2.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-3.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-4.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
        </div>

      </div>

      {/* Text Section */}
      <div className="w-1/2 flex flex-col justify-center gap-4">
        <p className="text-gray-500">Snooker Company</p>
        <h1 className="text-4xl font-bold">Fall Limited Edition</h1>
        <p className="text-gray-700">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole.
        </p>
      </div>

    </div>
  )
}

export default Main