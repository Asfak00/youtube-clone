import React from "react";

import Image from "../Imgaes/no_internet.png";
import "../Styles/NoInternet.css";

function NoInternet() {
  return (
    <div className="no_internet_container">
      <img src={Image} alt="" />
      <h1> Please check your internet connection</h1>
    </div>
  );
}

export default NoInternet;
