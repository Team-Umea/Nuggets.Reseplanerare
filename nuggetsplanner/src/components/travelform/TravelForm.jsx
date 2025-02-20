import PropTypes from "prop-types";
import DateInput from "./DateInput";
import { useState } from "react";
import { fetchWeatherApi } from "../../api/Api";
import { fetchPictureApi } from "../../api/Api";
import { Loader } from "rizzui";
import "../../styles/TravelForm.css";

const getPictureUrl = (pictureData) => {
  if (
    pictureData &&
    pictureData.server &&
    pictureData.id &&
    pictureData.secret
  ) {
    return `https://live.staticflickr.com/${pictureData.server}/${pictureData.id}_${pictureData.secret}.jpg`;
  }
  return null;
};

//PropTypes
TravelForm.propTypes = {
  addTravel: PropTypes.func.isRequired,
  land: PropTypes.string.isRequired,
  setLand: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  activity: PropTypes.string.isRequired,
  setActivity: PropTypes.func.isRequired,
};

function TravelForm({
  addTravel,
  land,
  setLand,
  city,
  setCity,
  date,
  setDate,
  activity,
  setActivity,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const weatherData = await fetchWeatherApi(city);
    const pictureData = await fetchPictureApi(city);

    if (!weatherData) {
      setError(
        "Kunde inte hämta angiven stad. Kontrollera stavning och försök igen!"
      );
      setLoading(false);

      setTimeout(() => {
        setError(null);
      }, 5000);

      return;
    }

    if (!pictureData) {
      setError(
        "Kunde inte hämta angiven stad. Kontrollera stavning och försök igen!"
      );
      setLoading(false);

      setTimeout(() => {
        setError(null);
      }, 5000);

      return;
    }

    const pictureUrl = getPictureUrl(pictureData);
    const convertText = (text) => {
      if (!text) return "";
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };
    const newTravel = {
      activity: convertText(activity),
      land: convertText(land),
      date,
      city: convertText(city),
      weatherData,
      pictureUrl,
    };

    addTravel(newTravel);

    setActivity("");
    setCity("");
    setLand("");
    setDate("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="land">Land:</label>
      <input
        type="text"
        placeholder="Land"
        value={land}
        onChange={(e) => {
          setLand(e.target.value);
        }}
        required
      />
      <label htmlFor="city">Stad:</label>
      <input
        type="text"
        placeholder="Stad"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        required
      />
      <label htmlFor="date">Datum:</label>
      <DateInput
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        required
      />
      <label htmlFor="activity">Aktivitet:</label>
      <input
        type="text"
        placeholder="Aktivitet"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Laddar..." : "Lägg till resa"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>} {}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div className="spinner"></div>
        </div>
      )}
    </form>
  );
}

export default TravelForm;
