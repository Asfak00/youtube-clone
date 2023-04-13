import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../Redux/Video.action";
import VideoHorizontal from "./VideoHorizontal";
import SearchScreenSkeleton from "./SearchScreenSkeleton";

function SearchScreen() {
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  return (
    <Container>
      {!loading
        ? videos?.map((video) => (
            <VideoHorizontal
              video={video}
              key={video.id.videoId}
              searchScreen
            />
          ))
        : [...Array(10)].map((i) => <SearchScreenSkeleton key={i} />)}
    </Container>
  );
}

export default SearchScreen;
