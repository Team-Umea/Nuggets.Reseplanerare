import { useEffect, useState } from "react";
import { fetchInformationApi } from "../api/Api";

function HomePage() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInformationApi();
      setInformation(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hem</h1>
      <ul>
        {information.map((location, index) => (
          <li key={index}>
            {location.activity},{location.location},{location.image}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
