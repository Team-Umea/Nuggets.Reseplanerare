import { useEffect, useState, useMemo } from "react";
import { fetchInformationApi } from "../api/Api";
import '../styles/Home.css'
import Hero from '../components/hero/Hero'

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
      < Hero />
      <ul className="rendered-locations">
{renderedLocations}
      </ul>
    </div>
  );
}

export default HomePage;

