import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getRelatedVideos, getVideosByCategory } from "../Redux/Video.action";

// manually imported files

// css module for styling
import Classes from "../Styles/CategoriesBar.module.css";
import { useParams } from "react-router-dom";

function PlayVideoCategoryBar() {
  const btnKeywords = [
    "All",
    "Related",
    "Recent uploaded",
    "Watched",
    "Most popular",
    "News",
    "Songs",
    "Movie",
    "Air",
  ];

  const [active, setActive] = useState("All");

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleOnClick = (word) => {
    setActive(word);
    if (word === "All") {
      dispatch(getRelatedVideos(id));
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

export default PlayVideoCategoryBar;
