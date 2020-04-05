const weatherAPIKey = '&appid=e542f831aca4693ae9887bddb0efe71d';
const openWeatherMapBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

async function getZipCodeWeather(zipCode = '60305') {
    const url = openWeatherMapBaseUrl + zipCode + "&units=imperial" + weatherAPIKey;
    const cityWeather = await fetch(url);
    try {
        const cityWeatherJson = await cityWeather.json();
        console.log("Temp:", cityWeatherJson.main.temp);
        return cityWeatherJson.main.temp;
    } catch (error) {
        console.log('error', error);
    }
}

export { getZipCodeWeather }
