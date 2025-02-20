import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTravel, removeTravel } from "../../store/travelSlice";
import TravelForm from "./TravelForm";
import RenderTravelForm from "./RenderTravelForm";
import EditTravelModal from "./EditTravelModal";

function AddTrip() {
  const dispatch = useDispatch();
  const travelItems = useSelector((state) => state.travel.travels);

  const [land, setLand] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");

  const handleAddTravel = (travelData) => {
    dispatch(addTravel(travelData)); 
  };

  const [selectedTravel, setSelectedTravel] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleRemoveTravel = (index) => {
    dispatch(removeTravel(index));
  };

  const openEditModal = (index) => {
    setSelectedTravel({ ...travelItems[index], index });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTravel(null);
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
        addTravel={handleAddTravel}
      />
      <RenderTravelForm
        travelItems={travelItems}
        handleRemoveTravel={handleRemoveTravel}
        openEditModal={openEditModal}
      />
      {isEditModalOpen && (
        <EditTravelModal
          travel={selectedTravel}
          closeEditModal={closeEditModal}
        />
      )}
    </>
  );
}

export default AddTrip;