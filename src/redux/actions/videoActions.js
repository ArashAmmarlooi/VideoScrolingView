import * as actionTypes from "../actionTypes";
import axios from "../../server/http-common";
const URL = "fa/v1/video/video/mostViewedVideos";
const API = process.env.API


// require('dotenv').config()

// const config = {
//   method: "GET",
//   mode: "no-cors",
//   // credentials: "include",
//   url: URL,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "*",
//     "Access-Control-Allow-Methods": "*",
//   },
// };
const getVideoSucces = (data) => {
  return {
    type: actionTypes.GET_VIDEO_SUCCES,
    data,
  };
};

const getVideoStart = () => {
  return {
    type: actionTypes.GET_VIDEOS_START,
  };
};

const getVideoStop = () => {
  return {
    type: actionTypes.GET_VIDEOS_STOP,
  };
};

const getVideos = () => async (dispatch) => {
  try {
    dispatch(getVideoStart());
    const res = await axios.get(URL);
    dispatch(getVideoSucces(res.data));
    return Promise.resolve();
  } catch (err) {
    dispatch(getVideoStop());
    return Promise.reject();
  }
};

export default getVideos;
