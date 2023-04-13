import firebase from "firebase/compat/app";

import auth from "../Firebase/Config";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOADING_PICTURE,
  LOGIN_FAIL,
  LOG_OUT,
} from "./ActionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoUrl: res.additionalUserInfo.profile.picture,
    };

    localStorage.setItem("ytc-access-token", accessToken);
    localStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOADING_PICTURE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: LOG_OUT,
  });

  localStorage.removeItem("ytc-access-token");
  localStorage.removeItem("ytc-user");
};
