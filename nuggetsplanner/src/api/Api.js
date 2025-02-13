const baseUrl = "http://localhost:5000/information";
const weatherApiKey = "0a73d2fcce10be83cf6d5529ffe32214";
const pictureApiKey = "cc4caf6e8173b835f998846ff40cd435";
export async function fetchInformationApi() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Nätverksfel u idiot");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fel som vi ska lägga in sen", error);
  }
}
export async function fetchWeatherApi(query) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${weatherApiKey}&lang=sv`
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
    };
  } catch (error) {
    console.error("error", error);
  }
}

export async function fetchPictureApi(query) {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${pictureApiKey}&text=${query}&format=json&nojsoncallback=1`
    );
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();

    return data.photos.photo[1];
  } catch (error) {
    console.error(error, "du har error");
  }
}

