import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubscribedChannel,
  getSubscribedChannels,
} from "../Redux/Video.action";
import SearchScreenSkeleton from "./SearchScreenSkeleton";

// manually imported files

import VideoHorizontal from "./VideoHorizontal";

function SubscriptionsScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );

  return (
    <Container fluid>
      {!loading
        ? videos?.map((video) => (
            <VideoHorizontal video={video} key={video.id} subScreen />
          ))
        : [...Array(3)].map((i) => <SearchScreenSkeleton key={i} />)}
    </Container>
  );
}

export default SubscriptionsScreen;
