import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";

// manually imported files
import CategoriesBar from "./CategoriesBar";
import Video from "./Video";

// css module for styling
import Classes from "../Styles/CategoriesBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../Redux/Video.action";
import SkeletonVideo from "./SkeletonVideo";

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container className={Classes.homeScreenContainer}>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border d-block text-danger mx-auto"></div>
        }
        className={Classes.infiniteScroll}>
        <Row className={Classes.homeScreenContainer}>
          {!loading
            ? videos.map((video, i) => (
                <Col
                  lg={4}
                  md={4}
                  sm={6}
                  key={video.id}
                  className={Classes.homeScreenCol}>
                  <Video video={video} key={i} />
                </Col>
              ))
            : [...Array(20)].map((i) => (
                <Col lg={4} md={4} sm={4}>
                  <SkeletonVideo key={i} />
                </Col>
              ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}

export default HomeScreen;
