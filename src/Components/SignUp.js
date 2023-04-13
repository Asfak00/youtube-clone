import React, { useEffect } from "react";
import { login } from "../Redux/Auth.Action";

import { useHistory } from "react-router-dom";

// dispatch from react redux
import { useDispatch, useSelector } from "react-redux";

// imported react icon
import { BiLogIn } from "react-icons/bi";

// imported image for logo
import image from "../Imgaes/logo.png";
import Signin_logo from "../Imgaes/signin.png";

// css module for styling
import Classes from "../Styles/SignUp.module.css";

function SignUp() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleOnClick = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className={Classes.Login_container}>
      <div className={Classes.Login}>
        <img src={image} alt="youtube logo" />
        <button className={Classes.Login_button} onClick={handleOnClick}>
          <img src={Signin_logo} alt="" />
          SignIn with google
          <BiLogIn className={Classes.login_icon} />
        </button>
        <p>
          This website made by <strong>Rahi Ahmed</strong>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
