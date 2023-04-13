import React, { useEffect, useState } from "react";

// manually imported
import Comment from "./Comment";

import "../Styles/Comment.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentsOfVideoById } from "../Redux/Comments.action";

function Comments({ videoId, totalComments }) {
  const [text, setText] = useState("");

  // event listener of comment input
  const handleCommentInput = (e) => {
    const value = e.target.value;
    setText(value);
    const commentButton =
      document.getElementsByClassName("comment_button_div")[0];
    value
      ? commentButton.classList.add("openCommentButton")
      : commentButton.classList.remove("openCommentButton");
  };

  // dispatch the action reducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const photoUrl = useSelector((state) => state.auth?.user?.photoUrl);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  // event listener of form when add a comment in the video

  const handleCommentForm = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  return (
    <div className="comments">
      <p>{totalComments} comments</p>
      <div className="comment_form d-flex w-100 my-2">
        <img
          src={photoUrl}
          alt="avatar"
          className="comment_avatar rounded-circle mr-3"
        />
        <form className="d-flex flex-grow-1" onSubmit={handleCommentForm}>
          <input
            type="text"
            placeholder="write a comment"
            name=""
            id=""
            className="comment_input flex-grow-1"
            onChange={handleCommentInput}
            value={text}
          />
        </form>
      </div>
      <div className="comment_button_div">
        <button className="comment_button" type="submit">
          Comment
        </button>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
