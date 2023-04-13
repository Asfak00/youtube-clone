import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosByChannel } from "../Redux/Video.action";
import SkeletonVideo from "./SkeletonVideo";
import Video from "./Video";

import numeral from "numeral";

import "../Styles/channelScreen.css";

function ChannelScreen() {
  const { channelId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
  }, [dispatch, channelId]);

  const { videos, loading } = useSelector((state) => state.channelVideos);

  const { channel } = useSelector((state) => state.channelDetails);

  const { snippet, statistics } = channel;

  console.log(snippet?.title);
  console.log(statistics?.subscriberCount);

  console.log(channel);

  return (
    <>
      <div className="p-1 mt-3 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center channel_left">
          <img
            src={snippet?.thumbnails?.default?.url}
            alt="avatar"
            className="ChannelAvatar"
          />

          <div className="ml-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span className="subscriberCount">
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button className="subscribeBtn">Subscribe</button>
      </div>

      <hr className="hr" />

      <Container fluid>
        <Row className="mt-4">
          {!loading
            ? videos.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map((i) => (
                <Col md={3} lg={3}>
                  <SkeletonVideo key={i} />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
}

export default ChannelScreen;
