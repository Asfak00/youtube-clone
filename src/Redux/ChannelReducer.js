import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHECK_SUBSCRIPTION_STATUS,
} from "./ActionType";

export const channelDetailsReducer = (
  state = {
    loading: true,
    channel: {},
    channelSubscription: false,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };

    case CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        channel: null,
        loading: false,
        error: payload,
      };

    case CHECK_SUBSCRIPTION_STATUS:
      return {
        ...state,
        channelSubscription: payload,
      };

    default:
      return state;
  }
};
