import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserProfile/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/uploaded-product-details" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
