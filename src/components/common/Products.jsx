import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Products = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <ChildA />
          <ChildB />
          {/* Children */}
          <ChildY />
          <ChildZ />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Products;
