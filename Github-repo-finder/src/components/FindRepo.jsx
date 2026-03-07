import React, { useState } from "react";
import axios from "axios";
import Repos from "./Repos"
import "./Repo.css"
const FindRepo = () => {

  const [keyword, setKeyword] = useState("");
  const [repo, setRepo] = useState([]);

  const searchRepo = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=language:${keyword}`,
      );
      setRepo(response.data.items);
    } catch (err) {
      console.log("Untrackable error occured" + err);
    }
  };

  return (
    <>
    <div className="container">
        <h1>Repository finder through language (e.g. python, javascript, etc)</h1>
        <input type="text" id="github" 
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}/>
        <button onClick={searchRepo}>Submit</button>
    </div>
    {
        repo.map((item, idx)=>(
            <Repos key = {idx} repos = {item} />
        ))
    }
    </>
  )
}

export default FindRepo
