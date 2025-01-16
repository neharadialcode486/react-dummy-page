import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserProfile/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
