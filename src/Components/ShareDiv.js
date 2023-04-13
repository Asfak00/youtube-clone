import React from "react";

import { RxCross2 } from "react-icons/rx";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

function ShareDiv() {
  // click event listener of copy button
  const handleCopyBtn = () => {
    const button = document.getElementsByClassName("copyBtn")[0];
    button.classList.add("clicked");
    button.innerHTML = "Copied";
    setTimeout(() => {
      button.classList.remove("clicked");
      button.innerHTML = "Copy";
    }, 1000);
    const link = document.getElementsByClassName("videoLink")[0].innerHTML;
    navigator.clipboard.writeText(link);
  };

  // event listener of share menu cross icon
  const handleShareCrossIcon = () => {
    const shareIcon = document.getElementsByClassName("share_div")[0];
    shareIcon.classList.remove("openShareDiv");

    shareIcon.classList.add("closeShareDiv");
  };

  return (
    <div className="share_div">
      <div className="CrossIconDiv" onClick={handleShareCrossIcon}>
        <RxCross2 size={40} className="CrossIcon" />
      </div>
      <div className="link">
        <p>Share</p>

        <FacebookShareButton url={"www.youtube.com"} className="share_icon">
          <FacebookIcon size={50} className="share_social_icon" />
        </FacebookShareButton>

        <TelegramShareButton ur8="yotube.com" className="share_icon">
          <TelegramIcon size={50} className="share_social_icon" />
        </TelegramShareButton>

        <WhatsappShareButton ur8="youtube.com" className="share_icon">
          <WhatsappIcon size={50} className="share_social_icon" />
        </WhatsappShareButton>

        <LinkedinShareButton ur8="youtube.com" className="share_icon">
          <LinkedinIcon size={50} className="share_social_icon" />
        </LinkedinShareButton>

        <PinterestShareButton u8l="yotube.com" className="share_icon">
          <PinterestIcon size={50} className="share_social_icon" />
        </PinterestShareButton>

        <TwitterShareButton url="youtube.com" className="share_icon">
          <TwitterIcon size={50} className="share_social_icon" />
        </TwitterShareButton>

        <RedditShareButton url="youtube.com" className="share_icon">
          <RedditIcon size={50} className="share_social_icon" />
        </RedditShareButton>

        <div className="videoLinkDiv">
          <p className="videoLink">www.youtube.com</p>
          <button className="copyBtn" onClick={handleCopyBtn}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareDiv;
