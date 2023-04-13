import React, { useEffect, useState } from "react";

// manually imported
import { Row, Col } from "react-bootstrap";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Classes from "../Styles/VideoHorizontal.module.css";
import "../Styles/Thumbnail.css";
import request from "../api";
import { useHistory } from "react-router-dom";

function VideoHorizontal({ video, searchScreen, subScreen }) {
  const {
    id,
    snippet: {
      thumbnails,
      channelId,
      title,
      publishedAt,
      channelTitle,
      description,
      resourceId,
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const isVideo = !(id.kind === "youtube#channel" || subScreen);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const GetVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) GetVideoDetails();
  }, [id, isVideo]);

  useEffect(() => {
    const GetChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    GetChannelIcon();
  }, [channelId]);

  const _channelId = resourceId?.channelId || channelId;

  // handle video click when client click a video
  const history = useHistory();
  const handleVideoClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "videoHorizontal_thumbnail_channel";

  return (
    <Row
      className={`${Classes.videoHorizontal} d-flex m-1 p-2 ${
        searchScreen ? "align-items-start" : "align-items-center"
      } ${!isVideo && "align-items-center"} justify-content-center`}
      onClick={handleVideoClick}>
      <Col
        xs={searchScreen ? 8 : 7}
        md={searchScreen || subScreen ? 5 : 8}
        className={Classes.videoHorizontal_left}>
        <LazyLoadImage
          src={thumbnails.medium.url}
          effect="blur"
          className={`videoHorizontal_thumbnail ${thumbnail}`}
          wrapperClassName={Classes.videoHorizontal_thumbnail_wrapper}
        />
        {isVideo && (
          <span className={Classes.videoHorizontal_timezone}>{_duration}</span>
        )}
      </Col>
      <Col
        xs={searchScreen ? 4 : 5}
        md={searchScreen || subScreen ? 7 : 3}
        className="videoHorizontal_right p-0">
        <h6 className={Classes.videoHorizontal_title}>{title}</h6>

        <div className={Classes.videoHorizontal_video_details}>
          {isVideo && searchScreen && (
            <p className={Classes.views}>
              {numeral(views).format("O.a")} views •{" "}
              {moment(publishedAt).fromNow()}
            </p>
          )}

          <div className={Classes.channel_icon_title}>
            {searchScreen && isVideo && (
              <img
                src={channelIcon?.url}
                alt="channelPicture"
                className={Classes.channel_icon}
              />
            )}
            {isVideo && (
              <span className={Classes.channel_title}>{channelTitle}</span>
            )}
          </div>

          {!searchScreen && !subScreen && isVideo && (
            <p className={Classes.Channel_video_views}>
              {numeral(views).format("O.a")} views •{" "}
              {moment(publishedAt).fromNow()}
            </p>
          )}

          {(searchScreen || subScreen) && (
            <span className={Classes.channel_description}>{description}</span>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default VideoHorizontal;
