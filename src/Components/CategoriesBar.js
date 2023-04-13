import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideoCategory,
  getVideosByCategory,
} from "../Redux/Video.action";

// manually imported files

// css module for styling
import Classes from "../Styles/CategoriesBar.module.css";

const btnKeywords = [
  "All",
  "Trending",
  "News",
  "AI",
  "Hindi Songs",
  "Movie",
  "React js",
  "Funny Videos",
  "Javascript",
  "Gojol",
  "Tiktok",
  "Coding",
  "Cricket",
  "Football",
  "Algorithm Art",
  "Music",
  "Programming",
  "Mixed",
  "Live",
  "Comedy",
  "Recently Uploaded",
  "Watched",
  "New To You",
];

function CategoriesBar() {
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();

  const handleOnClick = (word) => {
    setActive(word);
    if (word === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(word));
    }
  };

  return (
    <div className={Classes.CategoriesBar}>
      {btnKeywords.map((word, index) => (
        <span
          key={index}
          onClick={() => handleOnClick(word)}
          className={active === word ? Classes.active : ""}>
          {word}
        </span>
      ))}
    </div>
  );
}

export default CategoriesBar;
