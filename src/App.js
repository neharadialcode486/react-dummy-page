import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProduct from "./components/LatestProduct";
import MyStats from "./components/MyStats";
import Partners from "./components/Partners";
import Profile from "./components/Profile";
import ShareExperience from "./components/ShareExperience";

function App() {
  return (
    <>
      <Header />
      <ShareExperience />
      <Profile />
      <Partners />
      <MyStats />
      <LatestProduct />
      <Footer />
    </>
  );
}

export default App;
