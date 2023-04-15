import React, { useState } from "react";

// react icons
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useSelector } from "react-redux";

// manually imported files
import { useHistory, useParams } from "react-router-dom";
import CustomHelmet from "./CustomHelmet";

// image for logo
import image from "../Imgaes/logo.png";

// css module for styling
import Classes from "../Styles/Header.module.css";

const Header = ({ handleToggleMenu }) => {
  const [input, setInput] = useState("");

  // handling the cross icon onclick
  const handleCrossIconOnClick = (value) => {
    setInput("");
    const crossIcon = document.getElementsByClassName("crossIcon")[0];

    crossIcon.classList.remove(Classes.CrossIconOnSearchBar_Visible);
  };

  // handling the on change
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const crossIcon = document.getElementsByClassName("crossIcon")[0];
    value
      ? crossIcon.classList.add(Classes.CrossIconOnSearchBar_Visible)
      : crossIcon.classList.remove(Classes.CrossIconOnSearchBar_Visible);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };

  const { query } = useParams();

  const photoUrl = useSelector((state) => state.auth?.user?.photoUrl);

  return (
    <div className={Classes.header}>
      {/* add helmet component */}
      <CustomHelmet title={query} />

      <section className={Classes.menuIcon}>
        <AiOutlineMenu
          className={Classes.menu_icon}
          size="22"
          onClick={handleToggleMenu}
          title="menu icon"
        />
        <RxHamburgerMenu
          className={Classes.secondBar}
          size="42"
          onClick={handleToggleMenu}
          title="menu icon"
        />
        <img src={image} alt="logo" onClick={() => history.push("/")} />
      </section>
      <section className={Classes.searchBar}>
        <form onSubmit={handleSubmit}>
          <RxCross1
            className={`crossIcon ${Classes.CrossIconOnSearchBar}`}
            onClick={handleCrossIconOnClick}
            title="remove your search text"
          />
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleOnChange}
          />

          <button type="submit" title="search">
            <IoSearchOutline size="23" className={Classes.searchIcon} />
          </button>
        </form>

        <FaMicrophone
          className={Classes.MicrophoneIcon}
          size="30"
          title="search your voice"
        />
      </section>
      <section className={Classes.avatar}>
        <BiVideoPlus size="42" className={Classes.icon} title="create video" />
        <MdOutlineNotificationsNone
          size="42"
          className={Classes.icon}
          title="notification"
        />
        <img src={photoUrl} alt="" title="account" />
      </section>
    </div>
  );
};

export default Header;
