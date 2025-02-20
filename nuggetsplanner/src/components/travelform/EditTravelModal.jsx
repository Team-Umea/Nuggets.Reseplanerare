import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editTravel } from "../../store/travelSlice";
import DateInput from "./DateInput";
import "../../styles/EditTravelModal.css";

function EditTravelModal({ travel, closeEditModal }) {
  const dispatch = useDispatch();
  const [land, setLand] = useState(travel.land);
  const [city, setCity] = useState(travel.city);
  const [date, setDate] = useState(travel.date);
  const [activity, setActivity] = useState(travel.activity);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      closeEditModal();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTravel({ index: travel.index, land, city, date, activity }));
    closeEditModal();
  };

  return (
    <div id="modal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h2>Redigera resa</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label htmlFor="land">Land:</label>
          <input
            type="text"
            value={land}
            onChange={(e) => setLand(e.target.value)}
            required
          />
          <label htmlFor="city">Stad:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="date">Datum:</label>
          <DateInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label htmlFor="activity">Aktivitet:</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
          <div className="modal-btns">
            <button type="submit">Spara</button>
            <button type="button" onClick={closeEditModal}>
              Avbryt
            </button>
          </div>
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
