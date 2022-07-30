import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getVideos from "../redux/actions/videoActions";
import playPauseVideo from "../js/utils";
import styles from "../../public/css/__timeLine.scss";

const TimeLine = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { videos } = state;
  const {
    videos: {
      videos: { data },
    },
  } = state;

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  useEffect(() => {
    let videos = document.querySelectorAll("video");
    console.log(videos, "videoelemtns");
    playPauseVideo(videos);
  }, [state]);

// Loading container if data is loading videos.loading is the state property
// when redux action dispatched it change the false value in state reducer
  if (videos.loading)
    return (
      <div className={styles.loadingCont}>
        در حال دریافت فایل ها
        <svg
          className={styles.spinner}
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.path}
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    );

  return (
    <>
      {data.map((elm, index) => (
        <div key={elm.attributes.id} className={styles.videoCont}>
          <div className={styles.senderCont}>
            <img
              src={elm.attributes.profilePhoto}
              className={styles.placeholder}
            />
            <label>فرستنده : </label>
            <span>{elm.attributes.sender_name}</span>
          </div>
          <div className={styles.titleCont}>
            <span>{elm.attributes.title}</span>
          </div>
          <video controls="controls" src={elm.attributes.preview_src}></video>
          <footer className={styles.footer}>
            <div className={styles.dateCont}>
              <label>تاریخ :</label>
              <span>{elm.attributes.sdate}</span>
            </div>
          </footer>
        </div>
      ))}
    </>
  );
};
export default TimeLine;
