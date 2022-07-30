import * as actionTypes from '../actionTypes';

let initialState = {
  videos: [],
  loading: true,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEOS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_VIDEOS_STOP:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_VIDEO_SUCCES:
      return {
        ...state,
        videos: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
export default videoReducer;

