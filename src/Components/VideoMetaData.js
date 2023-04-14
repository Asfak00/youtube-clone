import React, { useEffect, useState } from "react";

// manually importing
import moment from "moment";
import numeral from "numeral";

import "../Styles/VideoMetaData.css";

import ShowMoreText from "react-show-more-text";

// react icons
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotsMenu from "./ThreeDotsMenu";
import ShareDiv from "./ShareDiv";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetailsById,
} from "../Redux/Channel.action";
import CustomHelmet from "./CustomHelmet";
import NoInternet from "./NoInternet";
import { useHistory } from "react-router-dom";

function VideoMetaData({ video: { snippet, statistics }, videoId }) {
  // get all real data in the redux store
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  const dispatch = useDispatch();

  const { statistics: channelStatistics, snippet: channelSnippet } =
    useSelector((state) => state.channelDetails.channel);

  const channelSubscription = useSelector(
    (state) => state.channelDetails.channelSubscription
  );

  useEffect(() => {
    dispatch(getChannelDetailsById(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  // toggle of three dots menu in watch video
  const [toggle, setToggle] = useState(false);

  const handleThreeDots = () => {
    setToggle((value) => !value);
    const menu = document.getElementsByClassName("hidden_menu_three_dots")[0];
    toggle ? menu.classList.add("visible") : menu.classList.remove("visible");
  };

  // event listener of share option
  const handleShareOption = () => {
    const shareIcon = document.getElementsByClassName("share_div")[0];
    shareIcon.classList.add("openShareDiv");
    shareIcon.classList.remove("closeShareDiv");
  };

  // handling channel page when use click channel icon
  const history = useHistory();
  const handleChannelPage = () => {
    history.push(`/channel/${channelId}`);
  };

  return (
    <>
      {snippet === null ? (
        <NoInternet />
      ) : (
        <div className="videoMetaData py-1">
          <div className="VideoMetaData_top">
            <h4>{title}</h4>
          </div>

          {/* add helmet component */}
          <CustomHelmet title={title} description={description} />

          {/* channel */}

          <div className="videoMetaData_channel d-flex justify-content-between align-items-center ">
            <div className="channel_details_left d-flex justify-content-between align-items-center ">
              <div
                className="d-flex goChannelPage  justify-content-between align-items-center py-1"
                onClick={handleChannelPage}>
                <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt=""
                  className="rounded-circle my-2"
                />
                <div className="channel_desc d-flex flex-column">
                  <span className="channel-name">{channelTitle}</span>
                  <span className="subscribers">
                    {" "}
                    {numeral(channelStatistics?.subscriberCount).format(
                      "O.a"
                    )}{" "}
                    subscribers
                  </span>
                </div>
              </div>
              <button
                className={`subscribe-btn p-2 m-2 border-0 ${
                  channelSubscription && "btn-gray"
                }`}>
                {channelSubscription ? "Subscribed" : "Subscribe"}
              </button>
            </div>

            {/* others icons */}

            <div className="channel_details_right d-flex align-items-center justify-content-end">
              <div className="like-div">
                <span className="l-f" title="like">
                  <MdThumbUpOffAlt size={22} className="like" />
                  {numeral(likeCount).format("O.a")}
                </span>

                <span className="l-r" title="dislike">
                  <MdThumbDownOffAlt size={22} />
                </span>
              </div>

              {/* share icon */}
              <span className="share" onClick={handleShareOption} title="Share">
                <RiShareForwardLine size={22} className="like" />
                <span className="shareText">Share</span>
              </span>
              <ShareDiv />

              {/* three dots menu icon */}
              <span className="three-dots" title="menu">
                <BsThreeDots
                  size={22}
                  className="like"
                  onClick={handleThreeDots}
                />
              </span>
              <ThreeDotsMenu />
            </div>
          </div>

          {/* description */}

          <div className="videoMetaData_description">
            <span className="publishDate">
              {numeral(viewCount).format("O.a")} views{" "}
              {moment(publishedAt).fromNow()}
            </span>
            <br />
            <ShowMoreText
              lines={2}
              show="Show more"
              less="Show less"
              anchorClass="showMoreText"
              expanded={false}>
              {description}
            </ShowMoreText>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoMetaData;
