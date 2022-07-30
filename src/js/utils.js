// The function that return boolean value for checking the top and bottom postion
// of the video element
function isInViewport(rect) {
  return (
    rect.top >= 20 &&
    rect.left >= 0 &&
    // devide window.innerheight by 1.5 , we could devide by 2 but I wanted
    // to play video a little below of center of view port beacuase when 
    // we scroll down from bottom to top it plays in wrong position
    rect.bottom <= window.innerHeight / 1.5  &&
    rect.right <= window.innerWidth 
  );
}

export default function playPauseVideo(videos) {
  // check if videos array is filled with video element
  const videoLenght = videos.length !== 0;
  let rect;
  // We put videos element into window.onScroll function beacuse of
  // gather information about top and bottom postion of video elements
  // on scroling
  window.addEventListener("scroll", () => {
    videos.forEach((video) => {
      if (videoLenght) {
        rect = video.getBoundingClientRect();
        if (isInViewport(rect)) video.play();
        else video.pause();
      }
      video.muted = true;
    });
  });
}
