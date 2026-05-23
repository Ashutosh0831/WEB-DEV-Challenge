import React from "react";

const PostFoot = () => {
  return (
    <div className="foot-container">
      <div className="post-count">
        <img className="like" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" />
        <p>12k</p>
        <img className="comment" src="https://cdn-icons-png.flaticon.com/128/9256/9256383.png" alt="" />
        <p>4k</p>
        <img className="share" src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt="" />
      </div>
      <img
      className="save"
        src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
        alt=""
      />
    </div>
  );
};

export default PostFoot;
