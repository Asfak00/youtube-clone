import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Comments from "./Comments";
import VideoHorizontal from "./VideoHorizontal";
import VideoMetaData from "./VideoMetaData";

import SearchScreenSkeleton from "./SearchScreenSkeleton";
import VideoMetaDataSkeleton from "./VideoMetaDataSkeleton";

// manually added style
import Classes from "../Styles/WatchScreen.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../Redux/Video.action";
import { getRelatedVideos } from "../Redux/Video.action";
import PlayVideoCategoryBar from "./PlayVideoCategoryBar";

function WatchScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos, loading: relatedVideoLoading } = useSelector(
    (state) => state.relatedVideos
  );

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <Row>
      <Col lg={8} md={8}>
        <div className={Classes.watchScreen_player}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            width="100%"
            height="100%"
            allowFullScreen></iframe>
        </div>

        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <VideoMetaDataSkeleton />
        )}
        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>

      <Col sm={12} md={4} lg={4} className={Classes.VideoHorizontal}>
        <PlayVideoCategoryBar />
        {!relatedVideoLoading
          ? videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} />
              ))
          : [...Array(6)].map((i) => <SearchScreenSkeleton key={i} />)}
      </Col>
    </Row>
  );
}

export default WatchScreen;
