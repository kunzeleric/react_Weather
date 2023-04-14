import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1';
const apikey = 'ab970fb46f55404f8da235513232003';
const weatherIcons = 'https://www.weatherapi.com/docs/conditions.json'


class WeatherService{
    
    static getCurrentWeather(location){
        return axios.get(`${baseUrl}/current.json?key=${apikey}&q=${location}`);
    }

    static getForecastWeather(location){
        return axios.get(`${baseUrl}/forecast.json?key=${apikey}&q=${location}`);
    }
}

export default WeatherService;