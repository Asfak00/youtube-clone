import React, { useEffect, useState } from "react";
import request from "../api";

// manually imported files
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useHistory } from "react-router-dom";

// css module for styling
import Classes from "../Styles/Video.module.css";

function Video({ video, channelScreen }) {
  const {
    id,
    snippet: {
      title,
      channelId,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  // defined some state for view,days and channel icon you need
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const GetVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    GetVideoDetails();
  }, [_videoId, setDuration, setViews]);

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
  }, [channelId, setChannelIcon]);

  // when click a video just go the watch screen
  const history = useHistory();
  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <div className={Classes.Video} onClick={handleVideoClick}>
      <div className={Classes.video_top}>
        <img src={medium.url} alt="thumbnail" className={Classes.thumbnail} />
        <span className={Classes.timezone}>{_duration}</span>
      </div>
      <div className={Classes.video_info}>
        {!channelScreen && (
          <LazyLoadImage
            src={channelIcon?.url}
            effect="blur"
            className={Classes.video_avatar}
          />
        )}
        <div className={Classes.video_details}>
          <h6 className={Classes.video_title}>{title}</h6>
          <p>{channelTitle}</p>
          <p>
            {numeral(views).format("O.a")} views •
            <span> {moment(publishedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
