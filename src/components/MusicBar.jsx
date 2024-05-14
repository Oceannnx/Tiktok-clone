import PropTypes from "prop-types";
import Disc from "../assets/disc.svg";

export const MusicBar = (props) => {
  const data = props.data;
  return (
    <>
      <div className="grid grid-cols-8 ">
        <div></div>
        <div className="grid place-items-center p-2 pl-3 col-span-6 text-white">
          <marquee>{data.song}</marquee>
        </div>
        <div className="grid place-items-center animate-spin">
          <img src={Disc} alt="dics" className="w-10 h-10" />
        </div>
      </div>
    </>
  );
};

MusicBar.propTypes = {
  data: PropTypes.array.isRequired,
};
