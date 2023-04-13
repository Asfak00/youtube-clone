import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth.Action";

// react icons
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineVideoLibrary,
  MdExitToApp,
} from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { BiLike } from "react-icons/bi";

// css module for styling
import Classes from "../Styles/Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar({ toggle }) {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <nav className={toggle ? Classes.open : Classes.Sidebar}>
      <ul>
        <Link to="/">
          <li>
            <HiHome className={Classes.icon} />
            <p>Home</p>
          </li>
        </Link>

        <Link to="/feed/subscriptions">
          <li>
            <MdOutlineSubscriptions className={Classes.icon} />
            <p>Subscription</p>
          </li>
        </Link>

        <li>
          <BiLike className={Classes.icon} />
          <p>Liked video</p>
        </li>

        <li>
          <MdHistory className={Classes.icon} />
          <p>History</p>
        </li>

        <li>
          <MdOutlineVideoLibrary className={Classes.icon} />
          <p>Library</p>
        </li>

        <hr />

        <li onClick={handleLogOut}>
          <MdExitToApp className={Classes.icon} />
          <p>Logout</p>
        </li>

        <hr />
      </ul>
    </nav>
  );
}

export default Sidebar;
