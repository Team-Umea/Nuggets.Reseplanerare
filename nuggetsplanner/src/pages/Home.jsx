import { useEffect, useState, useMemo } from "react";
import { fetchInformationApi } from "../api/Api";
import '../styles/Home.css'

function HomePage() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInformationApi();
      setInformation(data);
    };
    fetchData();
  }, []);
  const renderedLocations = useMemo(()=>{
   return information.map((location, index) => (
      <div className="infoContainer" key={index}>
        <img src={location.url} alt="Bild på resmål" className="infoImg"/>
        <h3 className="infoLocation">{location.location}</h3>
        <p className="infoActivity">{location.activity}</p>


      </div>
    ));
  },[information])
  return (
    <div>
      <h2 className="webTitle">Välkommen till Reseplaneraren</h2>
      <p className="titleText">Detta är en sida som kan hjälpa dig att organisera dina framtida drömmar och resor. Samt hitta insperation till potentiella drömresor!</p>

      <ul>
{renderedLocations}
      </ul>
    </div>
  );
}

export default HomePage;

