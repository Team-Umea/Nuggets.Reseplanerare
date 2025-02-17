import PropTypes from "prop-types";
import DateInput from "./DateInput";
import { useState } from "react";
import { fetchWeatherApi } from "../../api/Api";
import { fetchPictureApi } from "../../api/Api";

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
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const weatherData = await fetchWeatherApi(city);
    const pictureData = await fetchPictureApi(city);

    // Kontrollera att väderdata och bilddata finns
    if (!weatherData) {
      console.error("❌ Fel: weatherData är null eller undefined.");
      setLoading(false);
      return;
    }

    if (!pictureData) {
      console.error("❌ Fel: pictureData är null eller undefined.");
      setLoading(false);
      return;
    }

    const pictureUrl = getPictureUrl(pictureData);

    const newTravel = {
      activity,
      land,
      date,
      city,
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
      <input
        type="text"
        placeholder="Land"
        value={land}
        onChange={(e) => {
          setLand(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Stad"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        required
      />
      <DateInput
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        required
      />
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
      {loading && <div className="loader">ta det lugnt, skiten kommer...</div>}{" "}
    </form>
  );
}

export default TravelForm;
