import PropTypes from "prop-types";

export const VideoSource = (props) => {
  const { url } = props;
  const handleClick = (e) => {
    if (e.target.paused) {
      e.target.play();
      e.target.muted = false;
    } else {
      e.target.pause();
      e.target.muted = true;
    }
  };

  return (
    <>
      <video
        className="rounded-lg"
        onClick={handleClick}
        width="100%"
        autoPlay
        muted
        loop
      >
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
};

VideoSource.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoSource;
