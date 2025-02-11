import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/EditTravelModal.css";

function EditTravelModal({ travel, saveEditedTravel, closeEditModal }) {
  const [land, setLand] = useState(travel.land);
  const [city, setCity] = useState(travel.city);
  const [date, setDate] = useState(travel.date);
  const [activity, setActivity] = useState(travel.activity);

  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra att sidan laddas om

    // Validering: Kontrollera att alla fält är ifyllda
    if (!land || !city || !date || !activity) {
      alert("Alla fält måste fyllas i!");
      return;
    }

    saveEditedTravel({ land, city, date, activity });
    closeEditModal(); // Stäng modalen efter sparning
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Redigera resa</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Land" type="text" value={land} onChange={(e) => setLand(e.target.value)} required />
          <input placeholder="Stad" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input placeholder="Aktivitet" type="text" value={activity} onChange={(e) => setActivity(e.target.value)} required />
          <div className="modal-btn">
            <button type="submit">Spara</button>
            <button type="button" onClick={closeEditModal}>Avbryt</button>
          </div>
        </form>
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