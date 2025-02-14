import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editTravel } from "../../store/travelSlice";

function EditTravelModal({ travel, closeEditModal }) {
  const dispatch = useDispatch();
  const [land, setLand] = useState(travel.land);
  const [city, setCity] = useState(travel.city);
  const [date, setDate] = useState(travel.date);
  const [activity, setActivity] = useState(travel.activity);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTravel({ index: travel.index, land, city, date, activity }));
    closeEditModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Redigera resa</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={land}
            onChange={(e) => setLand(e.target.value)}
            required
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
          <button type="submit">Spara</button>
          <button type="button" onClick={closeEditModal}>
            Avbryt
          </button>
        </form>
      </div>
    </div>
  );
}

EditTravelModal.propTypes = {
  travel: PropTypes.object.isRequired,
  closeEditModal: PropTypes.func.isRequired,
};

export default EditTravelModal;
