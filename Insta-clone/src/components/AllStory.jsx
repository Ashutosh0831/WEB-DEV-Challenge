import React from "react";
import Story from "./Story";
import "../shared/story.css"

const AllStory = () => {
  return (
    <>
    <h1>Instagram</h1>
      <div className="all-story">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </>
  );
};

export default AllStory;
