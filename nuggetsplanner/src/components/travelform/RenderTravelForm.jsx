import PropTypes from "prop-types";
import "../../styles/RenderTravelForm.css";

RenderTravelForm.propTypes = {
  travelItems: PropTypes.any,
  handleRemoveTravel: PropTypes.func,
  openEditModal: PropTypes.func,
};

function RenderTravelForm({ travelItems, handleRemoveTravel, openEditModal }) {
  return (
    <div className="travel-container">
      <h2>Resedetaljer</h2>
      <ul className="travel-list">
        {travelItems.map((travel, index) => (
          <li key={index} className="travel-item">
            <div className="travel-info">
              <h3>
                {travel.city}, {travel.country}
              </h3>
              <p>
                <strong>Datum:</strong> {travel.date}
              </p>
              <p>
                <strong>Aktivitet:</strong> {travel.activity}
              </p>
              <p>
                <strong>Temperatur:</strong> {travel.weatherData.temperature}°C
              </p>
              <p>
                <strong>Väder:</strong> {travel.weatherData.description}
              </p>
              <p>
                <strong>Vindhastighet:</strong> {travel.weatherData.wind_speed}{" "}
                m/s
              </p>
              <p>
                <strong>Bild:</strong>
              </p>
              <img src={travel.pictureUrl} alt={`Bild av ${travel.city}`} />
            </div>
            <div className="travel-buttons">
              <button
                className="edit-btn"
                title="Redigera"
                onClick={() => openEditModal(index)}
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                title="Ta bort"
                onClick={() => handleRemoveTravel(index)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderTravelForm;
