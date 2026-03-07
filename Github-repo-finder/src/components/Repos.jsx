import React from "react";
import "./Repo.css";

const Repos = ({ repos }) => {
  return (
    <>
      <main>
        <div className="repo-container">
          <ul>
            <li>{repos.full_name}</li>
            <a href={repos.url}>{repos.url}</a>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Repos;
