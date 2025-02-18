import React from 'react'
import AboutProduct from '../components/uploaded-product-details/AboutProduct'
import InstallApp from '../components/uploaded-product-details/InstallApp'
import ProductImages from '../components/uploaded-product-details/ProductImages'
import RecentlyMatched from '../components/uploaded-product-details/RecentlyMatched'

const ProductDetails = () => {
  return (
    <div>
      <div className='flex gap-8 conatiner xl:px-0 px-5 mx-auto max-w-[1240px] items-start lg:flex-row flex-col lg:mt-[60px] md:mt-8 mt-4'>
        <div className='sm:hidden w-full'><InstallApp/></div>
        <ProductImages/>
        <AboutProduct/>
      </div>
      <RecentlyMatched/>
    </div>
  )
}

export default ProductDetails