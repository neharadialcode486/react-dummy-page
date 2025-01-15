import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";
import PostProduct from "./pages/PostProduct";
import PostProductDetails from "./pages/PostProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserProfile/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/post-product" element={<PostProduct/>} />
        <Route path="/post-product-details" element={<PostProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
