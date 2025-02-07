import PropTypes from "prop-types";

const DateInput = ({ value, onChange }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <input
        type="date"
        value={value}
        onChange={onChange}
        min={today}
        required
      />
    </>
  );
};

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
