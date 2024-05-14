import PropTypes from "prop-types";
import { useState } from "react";
import UnLike from "../assets/unlike.svg";
import Liked from "../assets/liked.svg";
import Message from "../assets/message.svg";
import Share from "../assets/share.svg";

export const Sidebar = (props) => {
  const data = props.data;
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="grid grid-rows-3">
        <div>
          {liked ? (
            <div className="grid place-items-center ">
              <img
                src={Liked}
                alt="liked"
                className="h-12 w-12 p-2"
                onClick={() => setLiked(false)}
              />
              <div className="text-white">{data.likes + 1}</div>
            </div>
          ) : (
            <div className="grid place-items-center ">
              <img
                src={UnLike}
                alt="unlike"
                className="h-12 w-12 p-2 drop-shadow-2xl"
                onClick={() => setLiked(true)}
              />
              <div className="text-white">{data.likes}</div>
            </div>
          )}
        </div>

        <div className="grid place-items-center ">
          <img src={Message} className="h-12 w-12 p-2 drop-shadow-2xl" />
          <div className="text-white">{data.messages}</div>
        </div>
        <div
          className="grid place-items-center"
          id="Share"
          onClick={() => {
            navigator.clipboard.writeText(data.url);
          }}
        >
          <img src={Share} className="h-12 w-12 p-2 drop-shadow-2xl" />
          <div className="text-white">{data.shares}</div>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  data: PropTypes.array.isRequired,
};
