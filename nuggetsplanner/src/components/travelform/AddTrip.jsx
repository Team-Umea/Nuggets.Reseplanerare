
import { useState } from "react"; // Se till att detta är rätt!
import TravelForm from "./TravelForm";
import RenderTravelForm from "./RenderTravelForm";
import EditTravelModal from "./EditTravelModal"; // Lägg till import
import useLocalStorage from "../../useLocalStorage";

function AddTrip() {
  const [travels, setTravels] = useLocalStorage("travels", []);
  const [land, setLand] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [editingTravel, setEditingTravel] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const addTravel = (travel) => {
    setTravels([...travels, travel]);
  };

  const removeTravel = (index) => {
    setTravels(travels.filter((_, i) => i !== index));
  };

  const openEditModal = (index) => {
    setEditingTravel(travels[index]);
    setEditIndex(index);
  };

  const closeEditModal = () => {
    setEditingTravel(null);
    setEditIndex(null);
  };

  const saveEditedTravel = (updatedTravel) => {
    const updatedTravels = travels.map((travel, i) =>
      i === editIndex ? updatedTravel : travel
    );
    setTravels(updatedTravels);
    closeEditModal();
  };

  return (
    <>
      <TravelForm
        land={land}
        setLand={setLand}
        city={city}
        setCity={setCity}
        date={date}
        setDate={setDate}
        activity={activity}
        setActivity={setActivity}
        addTravel={addTravel}
      />
      <RenderTravelForm
        travels={travels}
        removeTravel={removeTravel}
        openEditModal={openEditModal}
      />
      {editingTravel && (
        <EditTravelModal
          travel={editingTravel}
          saveEditedTravel={saveEditedTravel}
          closeEditModal={closeEditModal}
        />
      )}
    </>
  );
}

export default AddTrip;