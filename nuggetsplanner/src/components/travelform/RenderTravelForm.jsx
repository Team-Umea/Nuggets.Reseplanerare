import PropTypes from "prop-types";

RenderTravelForm.propTypes = {
  travels: PropTypes.func.isRequired,
  removeTravel: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired
};

function RenderTravelForm({ travels, removeTravel, openEditModal }) {
  return (
    <div>
      <h2>Resedetaljer</h2>
      <ul>
        {travels.map((travel, index) => (
          <li key={index}>
            {travel.land}, {travel.city}, {travel.date}, {travel.activity}
            <button onClick={() => removeTravel(index)}>Ta bort</button>
            <button onClick={() => openEditModal(index)}>Redigera</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderTravelForm;