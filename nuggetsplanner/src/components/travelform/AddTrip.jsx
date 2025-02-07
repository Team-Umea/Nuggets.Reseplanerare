
import { useState,useEffect } from "react";
import TravelForm from "./TravelForm";
import RenderTravelForm from "./RenderTravelForm";
import useLocalStorage from "../../useLocalStorage";

function AddTrip() {
const [travels, setTravels] = useLocalStorage("travels", []);
const [land,setLand]= useState("");
const [city,setCity]= useState("");
const [date,setDate]= useState("");
const [activity,setActivity]= useState("")
const addTravel = (travel) => {
    setTravels([...travels, travel]);
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

        />
      </>
     );
}

export default AddTrip;