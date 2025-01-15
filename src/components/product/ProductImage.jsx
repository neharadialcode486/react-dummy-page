import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import CommonImg from '../common/CommonImg'

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
            columnsCountBreakPoints={{ 350: 2,  1024: 4 }}
          >
            <Masonry>
              <CommonImg imgClass="lg:h-[372px] md:h-[200px] h-[158px] w-full object-cover rounded-xl" parentClass="max-sm:p-1" />
              <CommonImg imgClass="lg:h-[461px] md:h-[300px] h-[195px] w-full object-cover rounded-xl" parentClass="max-sm:p-1" />
              <CommonImg imgClass="lg:h-[326px] md:h-[300px] h-[195px] w-full object-cover rounded-xl" parentClass="max-sm:p-1" />
              <CommonImg imgClass="lg:h-[326px] md:h-[200px] h-[158px] w-full object-cover rounded-xl" parentClass="max-sm:p-1" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
  )
}

export default ProductImage