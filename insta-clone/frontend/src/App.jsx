import Story from "./Components/Story";
import Footer from "./Components/Footer";
import Post from "./Components/post";
import "./Shared/global.scss";
import Insta from "./Pages/insta";

const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="contain-post">
          <Insta />
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
