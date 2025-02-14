import PropTypes from "prop-types";
import DateInput from "./DateInput";
import { fetchWeatherApi } from "../../api/Api";
import { fetchPictureApi } from "../../api/Api";

// const getPictureUrl = (pictureData) => {
//   const { server, id, secret } = pictureData;
//   return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
// };

const getPictureUrl = (pictureData) => {
  if (pictureData && pictureData.server && pictureData.id && pictureData.secret) {
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
  const handleClick = async (e) => {
    e.preventDefault();
  
    console.log("Hämtar väderdata för:", city);
    const weatherData = await fetchWeatherApi(city);
    console.log("✅ Hämta väderdata:", weatherData);
  
    console.log("Hämtar bilddata för:", city);
    const pictureData = await fetchPictureApi(city);
    console.log("✅ Hämta bilddata:", pictureData);
  
    // Kontrollera att väderdata och bilddata finns
    if (!weatherData) {
      console.error("❌ Fel: weatherData är null eller undefined.");
      return;
    }
  
    if (!pictureData) {
      console.error("❌ Fel: pictureData är null eller undefined.");
      return;
    }
  
    const pictureUrl = getPictureUrl(pictureData);
  
    // 🛠 Skapa nytt objekt och logga det
    const newTravel = {
      activity,
      land,
      date,
      city,
      weatherData,
      pictureUrl,
    };
  
    console.log("🚀 Dispatchar till Redux:", newTravel); // 🔥 Viktig kontroll
  
    addTravel(newTravel);
  
    // Töm formuläret
    setActivity("");
    setCity("");
    setLand("");
    setDate("");
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
      <button onSubmit={handleClick}>Lägg till resa</button>
    </form>
  );
}

export default TravelForm;
