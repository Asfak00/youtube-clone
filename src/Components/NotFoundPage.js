import React from "react";

// imported image
import logo from "../Imgaes/error.png";

// css module for styling
import Classes from "../Styles/NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={Classes.NotFound_container}>
      <div className={Classes.error_container}>
        <img src={logo} alt="" />
        <h1>404</h1>
        <p>Page Not Found!</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
