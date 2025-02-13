import PropTypes from "prop-types";
import "../../styles/RenderTravelForm.css";

RenderTravelForm.propTypes = {
  travels: PropTypes.array.isRequired,
  removeTravel: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired
RenderTravelForm.propTypes = {
  travels: PropTypes.func.isRequired,
};

function RenderTravelForm({ travels, removeTravel, openEditModal }) {
  return (
    <div className="travel-container">
      <h2>Resedetaljer</h2>
      <ul className="travel-list">
        {travels.map((travel, index) => (
          <li key={index} className="travel-item">
            <div className="travel-info">
              <h3>{travel.city}, {travel.land}</h3>
              <p><strong>Datum:</strong> {travel.date}</p>
              <p><strong>Aktivitet:</strong> {travel.activity}</p>
            </div>
            <div className="travel-buttons">
              <button className="edit-btn" title="Redigera" onClick={() => openEditModal(index)}>✏️</button>
              <button className="delete-btn" title="Ta bort" onClick={() => removeTravel(index)}>🗑️</button>
            </div>
          <li key={index}>
            {travel.land}, {travel.city}, {travel.date}, {travel.activity},
            {travel.weatherData.temperature},{travel.weatherData.description},
            {travel.weatherData.wind_speed},{travel.pictureData.farm}
            <img src={travel.PictureUrl} alt={`Bild av ${travel.city}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderTravelForm;
