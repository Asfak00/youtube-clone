import React from "react";

import "../Styles/SearchScreenSkeleton.css";

function SearchScreenSkeleton() {
  return (
    <div className="video_box">
      <div className="Video"></div>
      <div className="details">
        <div className="titleLine"></div>
        <div className="viewsLine"></div>
        <div className="channelLine"></div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default SearchScreenSkeleton;
