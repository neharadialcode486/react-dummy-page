import React from 'react'
import product2 from "../../assets/img/product-3.png"

const ProductImages = () => {
  return (
    <div className='max-w-[630px] w-full mx-auto'>
<img src={product2} alt="product" className='w-full md:h-[630px] sm:h-[400px] h-[274px] object-cover rounded-lg mb-7' />
<div className='grid grid-cols-3 lg:gap-7 sm:gap-4 gap-2.5 w-full'>
    <img src={product2} alt="product" className='sm:h-[223px] h-[127px] object-cover rounded-lg w-full' />
    <img src={product2} alt="product" className='sm:h-[223px] h-[127px] object-cover rounded-lg w-full' />
    <img src={product2} alt="product" className='sm:h-[223px] h-[127px] object-cover rounded-lg w-full' />
</div>
    </div>
  )
}

export default ProductImages