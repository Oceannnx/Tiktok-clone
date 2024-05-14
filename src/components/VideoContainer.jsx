import PropTypes from "prop-types";

import { DescriptionBar } from "./DescriptionBar";

import { VideoSource } from "./VideoSource";
import { Sidebar } from "./Sidebar";

export const VideoContainer = (props) => {
  const data = props.data;

  return (
    <>
      <div className="w-1/3 h-5/6 bg-black flex items-center relative rounded-md">
        <VideoSource url={data.url} />
        <div className="absolute bottom-0 w-full rounded-b-md">
          <DescriptionBar data={data} />
        </div>
        <div className="absolute right-2 bottom-48 ">
          <Sidebar data={data} />
        </div>
      </div>
    </>
  );
};

VideoContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
