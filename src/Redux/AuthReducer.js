import {
  LOADING_PICTURE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../Redux/ActionType";

const initialState = {
  accessToken: localStorage.getItem("ytc-access-token")
    ? localStorage.getItem("ytc-access-token")
    : null,
  user: localStorage.getItem("ytc-user")
    ? JSON.parse(localStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const AuthReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    case LOADING_PICTURE:
      return {
        ...prevState,
        user: payload,
      };

    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
