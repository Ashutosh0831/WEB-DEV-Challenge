import React from "react";
import Post from "./components/Post";
import "./index.css"
import AllStory from "./components/AllStory";

const App = () => {
  return (
    <>
      <main>
        <AllStory />
        <div className="post-container">
          <Post />
        </div>
      </main>
    </>
  );
};

export default App;
