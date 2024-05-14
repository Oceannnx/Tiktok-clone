import PropTypes from "prop-types";

export const Description = (props) => {
  const data = props.data;
  return (
    <>
      <div className="p-4 pb-10">
        <div className="font-bold text-3xl text-white">{data.owner}</div>
        <div className="text-md max-h-20 text-white">{data.description}</div>
      </div>
    </>
  );
};

Description.propTypes = {
  data: PropTypes.array.isRequired,
};
