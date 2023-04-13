import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer";
import {
  HomeVideoReducer,
  relatedVideoReducer,
  searchVideosReducer,
  subscriptionsChannelVideosReducer,
  channelVideosReducer,
} from "./HomeVideoReducer";
import { selectedVideoReducer } from "./HomeVideoReducer";
import { channelDetailsReducer } from "./ChannelReducer";
import { commentsListReducer } from "./Comments.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  homeVideos: HomeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentsListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchVideosReducer,
  subscriptionsChannel: subscriptionsChannelVideosReducer,
  channelVideos: channelVideosReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
