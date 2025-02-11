import PropTypes from "prop-types";
RenderTravelForm.propTypes = {
  travels: PropTypes.func.isRequired,
};

function RenderTravelForm({ travels }) {
  return (
    <div>
      <h2>Resedetaljer</h2>
      <ul>
        {travels.map((travel, index) => (
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
