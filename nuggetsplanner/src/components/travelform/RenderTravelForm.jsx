import PropTypes from "prop-types";

RenderTravelForm.propTypes = {
  travels: PropTypes.func.isRequired
}

function RenderTravelForm({ travels }) {
  return (
    <div>
      <h2>Resedetaljer</h2>
      <ul>
        {travels.map((travel, index) => (
          <li key={index}>
            {travel.land}, {travel.city}, {travel.date}, {travel.activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderTravelForm;