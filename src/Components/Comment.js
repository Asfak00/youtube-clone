import React from "react";

import moment from "moment";

// react icons
import { BiLike, BiDislike } from "react-icons/bi";

import "../Styles/Comment.css";

function Comment({ comment }) {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
    likeCount,
  } = comment;

  return (
    <div className="comment d-flex p-2 ">
      <img
        src={authorProfileImageUrl}
        alt="authorProfileImageUrl"
        className="comment_avatar rounded-circle mr-3"
      />
      <div className="comment_body">
        <p className="comment_header">
          {authorDisplayName}{" "}
          <span className="comment_timezone">
            {moment(publishedAt).fromNow()}
          </span>
        </p>
        <p className="comment_text">{textDisplay}</p>
        <div className="like_dislike">
          <span>
            <BiLike size={20} />{" "}
            <span className="comment_like_count">{likeCount}</span>
          </span>
          <span>
            <BiDislike size={20} />
          </span>
          <span className="reply_btn">reply</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
