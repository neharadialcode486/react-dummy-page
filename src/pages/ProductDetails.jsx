import React from 'react'
import AboutProduct from '../components/uploaded-product-details/AboutProduct'
import ProductImages from '../components/uploaded-product-details/ProductImages'

const ProductDetails = () => {
  return (
    <div>
      <div className='flex gap-8 conatiner xl:px-0 px-5 mx-auto max-w-[1240px] items-start lg:flex-row flex-col lg:mt-[60px] md:mt-8 mt-4'>
        <ProductImages/>
        <AboutProduct/>
      </div>
    </div>
  )
}

export default ProductDetails