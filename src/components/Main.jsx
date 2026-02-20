import React from 'react'

const Main = () => {
  return (
   <div className="flex flex-col p-10 items-start">

      {/* Big Image */}
      <div className="w-1/2 flex flex-col">
          <img 
            src="/images/image-product-1.jpg" 
            className="w-full max-w-[500px] rounded-2xl" 
            alt="" 
          />
      </div>

      {/* Small Images Under Big Image */}
      <div className="mt-[20px] flex gap-[20px]">
          <img src="/images/image-product-1.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-2.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-3.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
          <img src="/images/image-product-4.jpg" className="w-[100px] h-[100px] object-cover rounded-2xl cursor-pointer border-2 border-transparent" alt="" />
      </div>

   </div>
  )
}

export default Main