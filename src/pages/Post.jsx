import React, { useState } from "react";
import AddProduct from "../components/product/AddProduct";
import LatestAddedProduct from "../components/product/LatestAddedProduct";
import YourProduct from "../components/product-detail/YourProduct";
import ErrorProduct from "../components/product/ErrorProduct";

const Post = () => {
  const [view, setView] = useState("default"); // 'default', 'success', or 'error'

  const handleShowNewComponent = () => {
    setView("success");
  };

  const handleShowErrorComponent = () => {
    setView("error");
  };

  const handleBackToDefault = () => {
    setView("default");
  };
  return (
    <div>
      {view === "default" && (
        <>
          <AddProduct
            onFetchProduct={handleShowNewComponent}
            onError={handleShowErrorComponent}
          />
          <LatestAddedProduct />
        </>
      )}
      {view === "success" && <YourProduct goBack={handleBackToDefault} />}
      {view === "error" && <ErrorProduct goBack={handleBackToDefault}/>}
    </div>
  );
};

export default Post;
