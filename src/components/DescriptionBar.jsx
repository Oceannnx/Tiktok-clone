import { Description } from "./Description";
import { MusicBar } from "./MusicBar";
import PropTypes from "prop-types";

export const DescriptionBar = (props) => {
  const data = props.data;
  return (
    <>
      <Description data={data} />
      <MusicBar data={data} />
    </>
  );
};

DescriptionBar.propTypes = {
  data: PropTypes.array.isRequired,
};
