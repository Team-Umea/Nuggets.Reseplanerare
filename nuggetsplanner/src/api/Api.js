const baseUrl = "http://localhost:5000/information";
const weatherApiKey = "0a73d2fcce10be83cf6d5529ffe32214";
const pictureApiKey = "cc4caf6e8173b835f998846ff40cd435";

function errorHandle(response) {
  if (!response.ok) {
    switch (response.status) {
      case 400:
        console.error("Error 400 - Bad Request");
        break;
      case 401:
        console.error("Error 401 - Unauthorized");
        break;
      case 403:
        console.error("Error 403 - Forbidden");
        break;
      case 404:
        console.error("Error 404 - Not Found");
        break;
      default:
        console.error(`Error - Status Code: ${response.status}`);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
}s

export async function fetchInformationApi() {
  try {
    const response = await fetch(baseUrl);
    errorHandle(response);
    return await response.json();
  } catch (error) {
    console.error("Fel vid hämtning av information:", error);
    return null;
  }
}

export async function fetchWeatherApi(query) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${weatherApiKey}&lang=sv`
    );
    
    errorHandle(response);
    const data = await response.json();

    if (!data.main || !data.weather || !data.wind) {
      throw new Error("Ofullständig data från väder-API");
    }

    return {
      temperature: data.main.temp.toFixed(0),
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
    };
  } catch (error) {
    console.error("Error in fetching weather data:", error);
    return null;
  }
}

export async function fetchPictureApi(query) {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${pictureApiKey}&text=${query}&format=json&nojsoncallback=1`
    );
    
    errorHandle(response);
    const data = await response.json();

    return data.photos.photo[1];
  } catch (error) {
    console.error("Fel vid hämtning av bild:", error);
    return null;
  }
}
