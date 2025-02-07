const baseUrl = "http://localhost:5000/information";

export async function fetchInformationApi() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Nätverksfel u idiot");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fel som vi ska lägga in sen");
  }
}
