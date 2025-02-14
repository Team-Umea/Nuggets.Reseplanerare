import PropTypes from "prop-types";
import DateInput from "./DateInput";
// import { fetchWeatherApi } from "../../api/Api";
// import { fetchPictureApi } from "../../api/Api";
// const getPictureUrl = (pictureData) => {
//   const { server, id, secret } = pictureData;
//   return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
// };

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
    // const weatherData = await fetchWeatherApi(city);
    // const pictureData = await fetchPictureApi(city);
    // const pictureUrl = getPictureUrl(pictureData);
    addTravel({
      activity,
      land,
      date,
      city,
      // weatherData,
      // pictureData,
      // PictureUrl: pictureUrl,
    });
    // console.log(weatherData);
    // console.log(pictureData);
    // console.log(pictureUrl);

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
