import React from "react";

import "../Styles/SkeletonVideo.css";

function SkeletonVideo() {
  return (
    <div className="Skeleton_container">
      <div className="skeleton_box">
        <div className="skeleton_thumbnail"></div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="skeleton_channel_icon"></div>
          <div className="skeleton_channel_name"></div>
        </div>
        <div className="skeleton_views"></div>
      </div>
    </div>
  );
}

export default SkeletonVideo;
