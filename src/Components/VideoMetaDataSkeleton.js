import React from "react";

import "../Styles/VideoHorizontalSkeleton.css";

function VideoHorizontalSkeleton() {
  return (
    <div className="metadataContainer">
      <div className="video_title"></div>
      <div className="video_data"></div>
      <div className="video_description"></div>
    </div>
  );
}

export default VideoHorizontalSkeleton;
