import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import boy from "../../assets/img/boy.webp";
import MiddleImgs from "./MiddleImgs";
import CommonImg from "./CommonImg";

const Products = () => {
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
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}>
        <Masonry>
          {isWideScreen && (
            <CommonImg imgClass="lg:h-[250px] sm:h-[150px] h-[200px] w-full object-cover rounded-xl" image={boy} />
          )}
          <MiddleImgs />
          <span className="inline-block lg:h-[747px] sm:h-[560px] h-[500px] "></span>
          <CommonImg imgClass="lg:h-[400px] sm:h-[300px] h-[100px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[450px] sm:h-[350px] h-[250px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[550px] sm:h-[450px] h-[300px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[500px] sm:h-[400px] h-[250px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[480px] sm:h-[380px] h-[180px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[500px] sm:h-[250px] h-[200px] w-full object-cover rounded-xl" image={boy} />
          <CommonImg imgClass="lg:h-[270px] sm:h-[170px] h-[100px] w-full object-cover rounded-xl" image={boy} />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Products;
