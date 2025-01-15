import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProduct from "./components/LatestProduct";
import MyStats from "./components/MyStats";
import Partners from "./components/Partners";
import Profile from "./components/Profile";
import ShareExperience from "./components/ShareExperience";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Header />
      {/* <ShareExperience />
      <Profile />
      <Partners />
      <MyStats />
      <LatestProduct /> */}
      <Routes>
        <Route path="/post" element={<Post/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
