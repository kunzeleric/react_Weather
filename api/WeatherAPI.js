import axios from 'axios';

const baseUrl = 'https://api.weatherapi.com/v1';
const apikey = 'ab970fb46f55404f8da235513232003';

class WeatherService{
    
    static getCurrentWeather(location){
        return axios(`${baseUrl}/current.json?key=${apikey}&q=${location}`);
    }

    static getForecastWeather(location){
        return axios(`${baseUrl}/forecast.json?key=${apikey}&q=${location}&days=3`);
    }
}

export default WeatherService;