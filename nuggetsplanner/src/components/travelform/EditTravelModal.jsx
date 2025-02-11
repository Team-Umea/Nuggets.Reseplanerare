import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/EditTravelModal.css"

function EditTravelModal({ travel, saveEditedTravel, closeEditModal }) {
  const [land, setLand] = useState(travel.land);
  const [city, setCity] = useState(travel.city);
  const [date, setDate] = useState(travel.date);
  const [activity, setActivity] = useState(travel.activity);

  const handleSave = () => {
    saveEditedTravel({ land, city, date, activity });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Redigera resa</h2>
        <input placeholder="Land" type="text" value={land} onChange={(e) => setLand(e.target.value)} required />
        <input placeholder="Stad" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input placeholder="Aktivitet" type="text" value={activity} onChange={(e) => setActivity(e.target.value)} required />
        <div className="modal-btn">
        <button onClick={handleSave}>Spara</button>
        <button onClick={closeEditModal}>Avbryt</button>
        </div>
      </div>
    </div>
  );
}

EditTravelModal.propTypes = {
  travel: PropTypes.object.isRequired,
  saveEditedTravel: PropTypes.func.isRequired,
  closeEditModal: PropTypes.func.isRequired,
};

export default EditTravelModal;