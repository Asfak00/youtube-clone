import React from "react";

// react icons
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdLocalFireDepartment,
  MdOutlineOutlinedFlag,
  MdExitToApp,
} from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { RiVideoLine, RiMusicLine, RiFeedbackLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import {
  AiOutlinePlusCircle,
  AiOutlineSetting,
  AiOutlineCopyright,
} from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsTrophy, BsQuestionCircle } from "react-icons/bs";
import { GrFormDown } from "react-icons/gr";

import { Link } from "react-router-dom";

// images
import creator from "../Imgaes/yt_creator.png";
import kids from "../Imgaes/yt_kids.png";
import tv from "../Imgaes/yt_tv.png";
import music from "../Imgaes/yt_music.png";
import stack_learner from "../Imgaes/stack_learner.png";
import anisul_islam from "../Imgaes/anisul_islam.png";
import cleaver_programmer from "../Imgaes/cleaver_programmer.png";
import hablu_programmer from "../Imgaes/hablu_programmer.png";

// module css for style
import Classes from "../Styles/BigHomeMenu.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth.Action";

function BigHomeMenu({ toggle }) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logout());
  };

  return (
    <section className={toggle ? Classes.open : Classes.hide}>
      <div className={Classes.yt_app}>
        <ul>
          <Link to="/">
            <li>
              <HiHome />
              <span>Home</span>
            </li>
          </Link>

          <Link to="/feed/subscriptions">
            <li>
              <MdOutlineSubscriptions />
              <span>Subscription</span>
            </li>
          </Link>

          <li>
            <MdOutlineVideoLibrary />
            <span>Library</span>
          </li>

          <li onClick={handleOnClick}>
            <MdExitToApp />
            <span>Logout</span>
          </li>

          <hr />

          <li>
            <MdHistory />
            <span>History</span>
          </li>

          <li>
            <RiVideoLine />
            <span>Your videos</span>
          </li>

          <li>
            <MdOutlineWatchLater />
            <span>Watch later</span>
          </li>

          <li>
            <CgArrowsExchangeAlt />
            <span>Others</span>
          </li>

          <li>
            <GrFormDown />
            <span>See more</span>
          </li>

          <hr />

          <h5>Subscriptions</h5>

          <li>
            <img
              src={anisul_islam}
              alt="channel"
              className={Classes.channels}
            />
            <span>Anisul Islam</span>
          </li>

          <li>
            <img
              src={cleaver_programmer}
              alt="channel"
              className={Classes.channels}
            />
            <span>Cleaver Program..</span>
          </li>

          <li>
            <img
              src={stack_learner}
              alt="channel"
              className={Classes.channels}
            />
            <span>Stack Learner</span>
          </li>

          <li>
            <img
              src={hablu_programmer}
              alt="channel"
              className={Classes.channels}
            />
            <span>Hablu Program..</span>
          </li>

          <li>
            <AiOutlinePlusCircle />
            <span>Browse channels</span>
          </li>

          <hr />

          <h5>Explore</h5>

          <li>
            <MdLocalFireDepartment />
            <span>Trending</span>
          </li>

          <li>
            <RiMusicLine />
            <span>Music</span>
          </li>

          <li>
            <IoGameControllerOutline />
            <span>Games</span>
          </li>

          <li>
            <BsTrophy />
            <span>Sports</span>
          </li>

          <hr />

          <h5>More from Youtube</h5>
          <li>
            <img src={creator} alt="Creator" className={Classes.img} />
            <span>creator Studio</span>
          </li>

          <li>
            <img src={music} alt="music" className={Classes.img_big} />
            <span>Youtube Music</span>
          </li>

          <li>
            <img src={kids} alt="kids" className={Classes.img_big} />
            <span>Youtube Kids</span>
          </li>

          <li>
            <img src={tv} alt="tv" className={Classes.img} />
            <span>Youtube Tv</span>
          </li>

          <hr />

          <li>
            <AiOutlineSetting />
            <span>setting</span>
          </li>

          <li>
            <MdOutlineOutlinedFlag />
            <span>Report history</span>
          </li>

          <li>
            <BsQuestionCircle />
            <span>Help</span>
          </li>

          <li>
            <RiFeedbackLine />
            <span>Send feedback</span>
          </li>

          <hr />

          <p>About Press Copyright </p>
          <p>Contact Us Creators</p>
          <p>Advertise Developers</p>

          <div className={Classes.terms}>
            <p>Terms privacy policy & safety</p>
            <p>How Youtube Works</p>
            <p>Test New Futures</p>
          </div>

          <div className={Classes.copyright}>
            <p>
              <AiOutlineCopyright /> 2023 Google LLC
            </p>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default BigHomeMenu;
