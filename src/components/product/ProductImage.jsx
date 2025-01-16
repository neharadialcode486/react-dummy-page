import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import CommonImg from '../common/CommonImg'
import product1 from '../../assets/img/product-1.png'
import product2 from '../../assets/img/product-2.png'
import product3 from '../../assets/img/product-3.png'
import product4 from '../../assets/img/product-4.png'

const ProductImage = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  
    useEffect(() => {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 600);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className="mt-7">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2,  640: 4 }}
          >
            <Masonry>
              <CommonImg imgClass="w-full object-cover rounded-xl" parentClass="max-md:p-1" image={product1} />
              <CommonImg imgClass="w-full object-cover rounded-xl" parentClass="max-md:p-1" image={product2} />
              <CommonImg imgClass="w-full object-cover rounded-xl" parentClass="max-md:p-1" image={product3} />
              <CommonImg imgClass="w-full object-cover rounded-xl" parentClass="max-md:p-1" image={product4} />
            </Masonry>
          </ResponsiveMasonry>
        </div>
  )
}

export default ProductImage