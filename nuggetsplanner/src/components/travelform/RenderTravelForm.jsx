// import { removeTravel } from "../../store/travelSlice";
import "./../../styles/RenderTravelForm.css";
import PropTypes from "prop-types";

RenderTravelForm.propTypes = {
  travelItems: PropTypes.array,
  handleRemoveTravel: PropTypes.func,
  openEditModal: PropTypes.func,
};

function RenderTravelForm({ travelItems, openEditModal, handleRemoveTravel }) {
  console.log("Travels:", travelItems); // Debugging

  return (
    <div className="travel-container">
      <h2>Resedetaljer</h2>
      <ul className="travel-list">
        {travelItems.map((travel, index) => (
          <li key={index} className="travel-item">
            <div className="travel-info">
              <h3>
                {travel.city}, {travel.land}
              </h3>
              <p>
                <strong>Datum:</strong> {travel.date}
              </p>
              <p>
                <strong>Aktivitet:</strong> {travel.activity}
              </p>
            </div>
            <div className="travel-buttons">
              <button
                className="delete-btn"
                onClick={() => handleRemoveTravel(index)}
              >
                🗑️ Ta bort
              </button>
              <button className="edit-btn" onClick={() => openEditModal(index)}>
                ✏️ Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderTravelForm;

// import PropTypes from "prop-types";
// import "../../styles/RenderTravelForm.css";

// RenderTravelForm.propTypes = {
//   travels: PropTypes.array.isRequired,
//   removeTravel: PropTypes.func.isRequired,
//   openEditModal: PropTypes.func.isRequired,
// };

// function RenderTravelForm({ travels, removeTravel, openEditModal }) {
//   return (
//     <div className="travel-container">
//       <h2>Resedetaljer</h2>
//       <ul className="travel-list">
//         {travels.map((travel, index) => (
//           <li key={index} className="travel-item">
//             <div className="travel-info">
//               <h3>
//                 {travel.city}, {travel.country}
//               </h3>
//               <p>
//                 <strong>Datum:</strong> {travel.date}
//               </p>
//               <p>
//                 <strong>Aktivitet:</strong> {travel.activity}
//               </p>
//               <p>
//                 <strong>Temperatur:</strong> {travel.weatherData.temperature}°C
//               </p>
//               <p>
//                 <strong>Väder:</strong> {travel.weatherData.description}
//               </p>
//               <p>
//                 <strong>Vindhastighet:</strong> {travel.weatherData.wind_speed}{" "}
//                 m/s
//               </p>
//               <p>
//                 <strong>Bild:</strong>
//               </p>
//               <img src={travel.PictureUrl} alt={`Bild av ${travel.city}`} />
//             </div>
//             <div className="travel-buttons">
//               <button
//                 className="edit-btn"
//                 title="Redigera"
//                 onClick={() => openEditModal(index)}
//               >
//                 ✏️
//               </button>
//               <button
//                 className="delete-btn"
//                 title="Ta bort"
//                 onClick={() => removeTravel(index)}
//               >
//                 🗑️
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RenderTravelForm;
