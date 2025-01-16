import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Post from "./pages/Post";
import ProductDetails from "./pages/ProductDetails";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserProfile/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
